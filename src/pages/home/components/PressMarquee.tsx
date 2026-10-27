import { pressNames } from "@/mocks/home";

const marqueeItems = [...pressNames, ...pressNames];

/**
 * Press ticker — a solid ink band with a centred serif title and the names
 * running continuously behind hairline dividers. Pauses on hover.
 */
export default function PressMarquee() {
  return (
    <section className="overflow-hidden bg-foreground-950 py-14 md:py-20">
      <div className="mx-auto mb-12 max-w-[1500px] px-4 text-center md:px-10">
        <h2 className="font-heading text-2xl tracking-[0.06em] text-background-50 md:text-[2rem]">
          As Seen In
        </h2>
      </div>

      <div className="group relative flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {marqueeItems.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="flex items-center whitespace-nowrap"
            >
              <span className="mx-8 font-heading text-base font-normal tracking-[0.02em] text-background-50/70 transition-colors duration-500 hover:text-background-50 md:mx-14 md:text-[1.35rem]">
                {name}
              </span>
              <span className="h-5 w-px bg-background-50/25" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}