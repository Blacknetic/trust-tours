"use client";

import { useEffect, useRef, useState } from "react";

interface RotatingWordsProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  /** how long to hold a finished word before deleting (ms) */
  hold?: number;
}

/**
 * Types one word out, holds, deletes it, then types the next — cycling
 * forever. Used for the hero sub-headline so a rotating word keeps catching
 * the eye. Reduced-motion users see the first word, static, no caret.
 */
export default function RotatingWords({
  words,
  className = "",
  typeSpeed = 75,
  deleteSpeed = 38,
  hold = 1500,
}: RotatingWordsProps) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce.current) setCount(words[0].length);
  }, [words]);

  useEffect(() => {
    if (reduce.current) return;
    const word = words[index];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && count < word.length) {
      t = setTimeout(() => setCount(count + 1), typeSpeed);
    } else if (!deleting && count === word.length) {
      t = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && count > 0) {
      t = setTimeout(() => setCount(count - 1), deleteSpeed);
    } else {
      setDeleting(false);
      setIndex((index + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [count, deleting, index, words, typeSpeed, deleteSpeed, hold]);

  return (
    <span className={className}>
      <span aria-live="polite">{words[index].slice(0, count)}</span>
      <span className="tw-caret" aria-hidden="true" />
    </span>
  );
}
