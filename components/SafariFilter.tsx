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
  matchesGroup,
  matchesSelection,
  parseSelection,
  serializeSelection,
  type FilterGroup,
  type FilterSelection,
  type TripFacets,
} from "@/lib/safari-filter";

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

function writeSelection(next: FilterSelection, groups: FilterGroup[], resultsId: string) {
  const qs = serializeSelection(next, groups);
  window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  listeners.forEach((l) => l());
  // A shorter list can leave the visitor stranded down the page.
  const results = document.getElementById(resultsId);
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
  trips: TripFacets[];
  groups: FilterGroup[];
  resultsId: string;
  selection: FilterSelection;
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
  groups,
  resultsId = "safari-results",
  children,
}: {
  trips: TripFacets[];
  groups: FilterGroup[];
  /** The id links use as an anchor (#safari-results) to land on the list. */
  resultsId?: string;
  children: React.ReactNode;
}) {
  const search = useSyncExternalStore(subscribe, getSearch, getServerSearch);

  const state = useMemo(() => {
    const selection = parseSelection(search, groups);
    const visible = new Set(
      trips.filter((t) => matchesSelection(t, selection)).map((t) => t.slug),
    );
    return { trips, groups, resultsId, selection, visible };
  }, [trips, groups, resultsId, search]);

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
export function SafariFilterPanel({ label = "Filter safaris" }: { label?: string }) {
  const { trips, groups, resultsId, selection, visible } = useFilter();
  const [open, setOpen] = useState(false);
  const active = Object.values(selection).reduce((n, ids) => n + ids.length, 0);

  const toggle = (param: string, id: string) => {
    const list = selection[param] ?? [];
    const next = list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
    writeSelection({ ...selection, [param]: next }, groups, resultsId);
  };

  return (
    <aside
      aria-label={label}
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
          {groups.map((g) => (
            <Group key={g.param} title={g.title}>
              {g.options.map((o) => (
                <Checkbox
                  key={o.id}
                  label={o.label}
                  count={
                    trips.filter(
                      (trip) =>
                        matchesGroup(trip, g.param, [o.id]) &&
                        matchesSelection(trip, selection, g.param),
                    ).length
                  }
                  checked={(selection[g.param] ?? []).includes(o.id)}
                  onChange={() => toggle(g.param, o.id)}
                />
              ))}
            </Group>
          ))}

          {active > 0 && (
            <button
              type="button"
              onClick={() => writeSelection({}, groups, resultsId)}
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
  const { trips, resultsId, visible } = useFilter();
  return (
    <div id={resultsId} className="min-w-0 scroll-mt-36 lg:scroll-mt-24">
      <p className="text-sm mb-8" style={{ color: "var(--ink)" }} aria-live="polite">
        Showing {visible.size} of {trips.length} trips
      </p>
      {children}
      {visible.size === 0 && noMatch}
    </div>
  );
}
