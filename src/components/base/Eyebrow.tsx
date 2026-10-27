import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  /** Chapter folio, e.g. "01". Rendered as a small bronze italic numeral. */
  index?: string;
  className?: string;
  tone?: "primary" | "secondary" | "light";
  /** Centre the folio pair (used on dark chapter bands). */
  centered?: boolean;
}

const labelTone: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  primary: "text-foreground-700",
  secondary: "text-foreground-600",
  light: "text-background-50/95",
};

const markTone: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  primary: "text-accent-600",
  secondary: "text-accent-700",
  light: "text-accent-300",
};

/**
 * Section folio.
 *
 * A small italic numeral and a serif italic phrase, set the way a printed
 * monograph opens a chapter — no hairline rule, no tracked uppercase capsule.
 * The tracking and uppercase live on buttons instead, so the two voices stay
 * distinct instead of both shouting in the same register.
 */
export default function Eyebrow({
  children,
  index,
  className = "",
  tone = "primary",
  centered = false,
}: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-2.5 ${
        centered ? "justify-center" : ""
      } ${className}`}
    >
      {index ? (
        <span
          className={`font-heading text-[0.58rem] italic leading-none tracking-[0.12em] ${markTone[tone]}`}
        >
          {index}
        </span>
      ) : null}
      <span
        className={`font-heading text-[1.05rem] italic leading-[1.15] tracking-[0.005em] md:text-[1.18rem] ${labelTone[tone]}`}
      >
        {children}
      </span>
    </span>
  );
}