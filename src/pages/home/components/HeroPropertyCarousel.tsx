import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { featuredProperties } from "@/mocks/home";

const AUTOPLAY_MS = 7000;
const TOTAL = featuredProperties.length;

/**
 * Featured listing band.
 * Sits directly beneath the hero as a paper strip: one listing at a time,
 * photograph on the left, folio details on the right, and thin "previous /
 * next" text arrows in the reference's carousel manner. Autoplay pauses on
 * hover so the visitor stays in control.
 */
export default function HeroPropertyCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex(((next % TOTAL) + TOTAL) % TOTAL);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % TOTAL);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section className="border-b border-foreground-950/12 bg-background-100">
      <div
        className="mx-auto max-w-[1500px] px-4 py-10 md:px-10 md:py-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-baseline gap-4">
            <span className="font-label text-[9px] text-foreground-600">Featured Listings</span>
            <span className="font-body text-[11px] tabular-nums text-foreground-500">
              {String(index + 1).padStart(2, "0")}
              <span className="mx-1.5 opacity-50">/</span>
              {String(TOTAL).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Show previous featured listing"
              className="text-arrows cursor-pointer text-foreground-600 transition-colors hover:text-foreground-950"
            >
              <i className="ri-arrow-left-line text-xs" />
              Previous
            </button>
            <span className="text-arrows__sep" aria-hidden="true" />
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Show next featured listing"
              className="text-arrows cursor-pointer text-foreground-600 transition-colors hover:text-foreground-950"
            >
              Next
              <i className="ri-arrow-right-line text-xs" />
            </button>
          </div>
        </div>

        <div className="mt-7 overflow-hidden">
          <div
            className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {featuredProperties.map((property) => {
              const isActive = featuredProperties[index].id === property.id;
              return (
                <Link
                  key={property.id}
                  to={`/properties/${property.id}`}
                  aria-hidden={!isActive}
                  tabIndex={isActive ? 0 : -1}
                  className="group grid w-full shrink-0 cursor-pointer grid-cols-1 items-center gap-5 md:grid-cols-[280px_1fr] md:gap-8"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden md:h-[190px]">
                    <img
                      src={property.image}
                      alt={`${property.name} — ${property.address} luxury home listed by Team Medved`}
                      title={`${property.name}, ${property.address}`}
                      className="img-push h-full w-full object-cover object-top"
                    />
                    <span className="absolute left-0 top-0 bg-foreground-950 px-3 py-1.5 font-label text-[9px] text-background-50">
                      {property.tag}
                    </span>
                    <span className="veil" aria-hidden="true" />
                  </div>

                  <div className="flex min-w-0 flex-col justify-center">
                    <h3 className="font-heading text-2xl leading-tight text-foreground-950 md:text-[1.9rem]">
                      {property.name}
                    </h3>
                    <p className="mt-2.5 font-body text-xs font-light leading-relaxed text-foreground-600 md:text-sm">
                      {property.address}
                      {property.meta ? ` · ${property.meta}` : ""}
                    </p>
                    <div className="mt-5 flex items-center gap-6 border-t border-foreground-950/12 pt-4">
                      <span className="font-heading text-lg text-foreground-950">
                        {property.price}
                      </span>
                      <span className="inline-flex items-center gap-2 font-label text-[9px] text-foreground-700 transition-colors group-hover:text-accent-700">
                        View Property
                        <i className="ri-arrow-right-line btn-arrow text-[11px]" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}