"use client";

import {
  Suspense,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { useSearchParams } from "next/navigation";
import {
  SAFARI_TYPES,
  TRAVEL_TIMES,
  matchesTime,
  matchesType,
  parseSelection,
  serializeSelection,
  type SafariFacets,
  type SafariSelection,
} from "@/lib/safari-filter";

const RESULTS_ID = "safari-results";

// The URL is the single source of truth. Reading it through an external store
// (rather than useSearchParams) keeps every card in the prerendered HTML.
const listeners = new Set<() => void>();
function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("popstate", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("popstate", listener);
  };
}
const getSearch = () => window.location.search;
const getServerSearch = () => "";

function writeSelection(next: SafariSelection) {
  const qs = serializeSelection(next);
  window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  listeners.forEach((l) => l());
  // A shorter list can leave the visitor stranded down the page.
  const results = document.getElementById(RESULTS_ID);
  if (results && results.getBoundingClientRect().top < 0) results.scrollIntoView();
}

// A link to /safaris?type=migration is a same-page navigation the store can't
// see, and the results may only just have been revealed, too late for the
// browser's own jump to the anchor.
function UrlChangeListener() {
  const searchParams = useSearchParams();
  useEffect(() => {
    listeners.forEach((l) => l());
    const target = window.location.hash.slice(1);
    if (target) requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView());
  }, [searchParams]);
  return null;
}

interface FilterState {
  trips: SafariFacets[];
  selection: SafariSelection;
  visible: Set<string>;
}
const FilterContext = createContext<FilterState | null>(null);

function useFilter() {
  const state = useContext(FilterContext);
  if (!state) throw new Error("Safari filter parts must sit inside SafariFilterProvider");
  return state;
}

export function SafariFilterProvider({
  trips,
  children,
}: {
  trips: SafariFacets[];
  children: React.ReactNode;
}) {
  const search = useSyncExternalStore(subscribe, getSearch, getServerSearch);

  const state = useMemo(() => {
    const selection = parseSelection(search);
    const visible = new Set(
      trips
        .filter((t) => matchesType(t, selection.types) && matchesTime(t, selection.times))
        .map((t) => t.slug),
    );
    return { trips, selection, visible };
  }, [trips, search]);

  return (
    <FilterContext.Provider value={state}>
      <Suspense fallback={null}>
        <UrlChangeListener />
      </Suspense>
      {children}
    </FilterContext.Provider>
  );
}

/** Wraps a server-rendered card; hidden trips stay in the HTML for search engines. */
export function FilteredTrip({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const { visible } = useFilter();
  return (
    <div className="h-full" hidden={!visible.has(slug)}>
      {children}
    </div>
  );
}

/** Wraps a server-rendered category section; hidden once none of its trips match. */
export function FilteredSection({
  id,
  slugs,
  className,
  children,
}: {
  id: string;
  slugs: string[];
  className?: string;
  children: React.ReactNode;
}) {
  const { visible } = useFilter();
  return (
    <section id={id} className={className} hidden={!slugs.some((s) => visible.has(s))}>
      {children}
    </section>
  );
}

function Checkbox({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  const disabled = count === 0 && !checked;
  return (
    <label
      className={`flex items-center gap-3 py-1.5 text-sm ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      style={{ color: "var(--ink)", opacity: disabled ? 0.45 : 1 }}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="h-5 w-5 flex-shrink-0"
        style={{ accentColor: "var(--forest)" }}
      />
      <span className="flex-1">{label}</span>
      <span className="text-xs tabular-nums" style={{ color: "var(--forest)" }}>
        {count}
      </span>
    </label>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend
        className="text-lg font-extrabold mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--forest)" }}
      >
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

// `sticky` keeps the panel in view while the trips scroll past: beside them on
// desktop, as a bar under the site header on mobile.
export function SafariFilterPanel() {
  const { trips, selection, visible } = useFilter();
  const [open, setOpen] = useState(false);
  const { types, times } = selection;
  const active = types.length + times.length;

  const toggle = <T,>(list: T[], item: T) =>
    list.includes(item) ? list.filter((x) => x !== item) : [...list, item];

  return (
    <aside
      aria-label="Filter safaris"
      className="sticky top-16 z-30 -mx-4 md:-mx-6 lg:mx-0 mb-8 lg:mb-0 px-4 md:px-6 lg:px-0 py-3 lg:py-0 lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto"
      style={{ background: "var(--paper)" }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="safari-filter-options"
        className="lg:hidden w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold"
        style={{ background: "var(--forest)", color: "var(--paper)" }}
      >
        <span>
          Filter trips{active > 0 ? ` (${active})` : ""}
        </span>
        <span aria-hidden="true">{open ? "▲" : "▼"}</span>
      </button>

      <div
        id="safari-filter-options"
        className={`${open ? "block" : "hidden"} lg:block pt-4 lg:pt-0 max-h-[calc(100dvh-11rem)] lg:max-h-none overflow-y-auto lg:overflow-visible`}
      >
        <div className="flex flex-col gap-7">
          <Group title="Type">
            {SAFARI_TYPES.map((t) => (
              <Checkbox
                key={t.id}
                label={t.label}
                count={
                  trips.filter((trip) => trip.types.includes(t.id) && matchesTime(trip, times))
                    .length
                }
                checked={types.includes(t.id)}
                onChange={() => writeSelection({ types: toggle(types, t.id), times })}
              />
            ))}
          </Group>

          <Group title="Travel time">
            {TRAVEL_TIMES.map((t) => (
              <Checkbox
                key={t.id}
                label={t.label}
                count={
                  trips.filter((trip) => matchesTime(trip, [t.id]) && matchesType(trip, types))
                    .length
                }
                checked={times.includes(t.id)}
                onChange={() => writeSelection({ types, times: toggle(times, t.id) })}
              />
            ))}
          </Group>

          {active > 0 && (
            <button
              type="button"
              onClick={() => writeSelection({ types: [], times: [] })}
              className="self-start text-sm font-semibold underline"
              style={{ color: "var(--forest)" }}
            >
              Clear filters
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="lg:hidden w-full mt-5 px-4 py-3 rounded-xl text-sm font-semibold"
          style={{ background: "var(--gold)", color: "var(--paper)" }}
        >
          Show {visible.size} {visible.size === 1 ? "trip" : "trips"}
        </button>
      </div>
    </aside>
  );
}

export function SafariResults({
  noMatch,
  children,
}: {
  noMatch: React.ReactNode;
  children: React.ReactNode;
}) {
  const { trips, visible } = useFilter();
  return (
    <div id={RESULTS_ID} className="min-w-0 scroll-mt-36 lg:scroll-mt-24">
      <p className="text-sm mb-8" style={{ color: "var(--ink)" }} aria-live="polite">
        Showing {visible.size} of {trips.length} trips
      </p>
      {children}
      {visible.size === 0 && noMatch}
    </div>
  );
}
