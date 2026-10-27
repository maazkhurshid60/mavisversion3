import { Link } from "react-router-dom";
import { heroShowcase } from "@/mocks/home";
import Reveal from "@/components/base/Reveal";
import Eyebrow from "@/components/base/Eyebrow";
import ButtonLabel from "@/components/base/ButtonLabel";
import HeroPropertyCarousel from "@/pages/home/components/HeroPropertyCarousel";

/**
 * Hero — a full-bleed photographic chapter opener.
 * One image fills the screen behind a warm ink scrim, with the type set in the
 * centre in large Bodoni and a single filled call to action. Content is
 * unchanged; the composition, type scale and motion are new.
 */
export default function Hero() {
  return (
    <>
      <section className="relative isolate flex min-h-[640px] items-center overflow-hidden pt-[68px] md:min-h-[calc(100vh-84px)] md:pt-[84px]">
        {/* Full-bleed background photograph */}
        <div className="absolute inset-0 -z-20">
          <img
            src={heroShowcase.background}
            alt="Contemporary Los Angeles hillside residence at golden hour, seen across an infinity pool with warm light glowing through floor-to-ceiling glass — Team Medved real estate"
            title="Team Medved — contemporary Los Angeles homes at golden hour"
            className="h-full w-full animate-ken-burns object-cover object-center"
          />
        </div>

        {/* Warm ink scrim — deep enough for the type, light enough to keep the
            architecture readable. */}
        <div className="absolute inset-0 -z-10 bg-foreground-950/45" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground-950 via-foreground-950/15 to-foreground-950/55"
          aria-hidden="true"
        />

        {/* Copy column */}
        <div className="relative mx-auto w-full max-w-[1500px] px-4 py-24 text-center md:px-10 md:py-32">
          <Reveal y={18}>
            <Eyebrow tone="light" centered className="justify-center">
              Los Angeles Luxury Real Estate
            </Eyebrow>
          </Reveal>

          <Reveal y={30} delay={120}>
            <h1
              className="mx-auto mt-8 max-w-5xl font-heading text-[3.4rem] leading-[0.94] tracking-[-0.02em] text-background-50 sm:text-[4.6rem] lg:text-[6.6rem]"
              spellCheck={false}
            >
              Team Medved
            </h1>
          </Reveal>

          <Reveal y={24} delay={220}>
            <p className="mx-auto mt-8 max-w-2xl font-body text-sm font-light leading-relaxed text-background-50/85 md:text-base">
              Top producing agents in the Lake Hollywood, Los Feliz, Silver Lake, Studio City,
              Valley Village, Sherman Oaks, Toluca Lake, and surrounding areas.
            </p>
          </Reveal>

          <Reveal y={24} delay={300}>
            <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3">
              <Link
                to="/properties/sale"
                className="btn btn-paper inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap bg-background-50 px-9 py-4 btn-label text-foreground-950 sm:w-auto"
              >
                <ButtonLabel>Browse Properties</ButtonLabel>
                <i className="ri-arrow-right-line btn-arrow text-sm" />
              </Link>
              <Link
                to="/home-valuation"
                className="btn btn-outline-light inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap px-9 py-4 btn-label sm:w-auto"
              >
                <ButtonLabel>Home Valuation</ButtonLabel>
              </Link>
            </div>
          </Reveal>

          <Reveal y={22} delay={400}>
            <div className="mx-auto mt-16 flex flex-wrap items-center justify-center gap-x-9 gap-y-5 border-t border-background-50/25 pt-8">
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-[0.9rem] italic text-background-50/65">Serving</span>
                <span className="font-heading text-base text-background-50">Hills to the Sea</span>
              </div>
              <span className="hidden h-4 w-px bg-background-50/30 sm:block" aria-hidden="true" />
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-[0.9rem] italic text-background-50/65">Established</span>
                <span className="font-heading text-base text-background-50">Since 2004</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Quiet standing statistic, bottom corner */}
        <Reveal
          x={30}
          y={0}
          delay={520}
          className="absolute bottom-8 right-4 hidden lg:block lg:right-10"
        >
          <div className="border border-background-50/30 bg-foreground-950/35 px-6 py-4">
            <p className="font-heading text-2xl leading-none text-background-50">500+</p>
            <p className="mt-2 font-heading text-[0.85rem] italic text-background-50/70">Homes Sold</p>
          </div>
        </Reveal>
      </section>

      <HeroPropertyCarousel />
    </>
  );
}