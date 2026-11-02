"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Stay, StayChoice } from "@/data/accommodations";

/** A place on the route with its stays looked up, ready for the browser. */
export type ResolvedStayChoice = StayChoice & { stays: Stay[] };

interface TripChoices {
  levelId?: string;
  setLevelId: (id: string) => void;
  /** The stay picked at this stop, or the first offered at this level. */
  pickedStay: (choice: ResolvedStayChoice) => Stay | undefined;
  pickStay: (choiceId: string, stayId: string) => void;
  choices: ResolvedStayChoice[];
}

const TripChoicesContext = createContext<TripChoices | null>(null);

/** What a visitor has chosen on a trip page, shared by the page and the booking box. */
export function TripChoicesProvider({
  levelId: firstLevel,
  choices,
  children,
}: {
  levelId?: string;
  choices: ResolvedStayChoice[];
  children: React.ReactNode;
}) {
  const [levelId, setLevelId] = useState(firstLevel);
  const [picks, setPicks] = useState<Record<string, string>>({});

  const value = useMemo<TripChoices>(
    () => ({
      levelId,
      setLevelId,
      choices,
      pickStay: (choiceId, stayId) => setPicks((p) => ({ ...p, [choiceId]: stayId })),
      pickedStay: (choice) => {
        const offered = (levelId && choice.options[levelId]) || [];
        const id = offered.includes(picks[choice.id]) ? picks[choice.id] : offered[0];
        return choice.stays.find((s) => s.id === id);
      },
    }),
    [levelId, choices, picks],
  );

  return <TripChoicesContext.Provider value={value}>{children}</TripChoicesContext.Provider>;
}

export function useTripChoices() {
  const value = useContext(TripChoicesContext);
  if (!value) throw new Error("useTripChoices must sit inside TripChoicesProvider");
  return value;
}
