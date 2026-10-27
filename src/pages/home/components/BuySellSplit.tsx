import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import { buySellPanels } from "@/mocks/home";

export default function BuySellSplit() {
  return (
    <section className="px-4 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {buySellPanels.map((panel, index) => (
            <Reveal key={panel.title} index={index} step={160} y={38}>
              <Link
                to={panel.to}
                className="group relative flex h-[440px] cursor-pointer flex-col justify-end overflow-hidden md:h-[600px]"
              >
                <img
                  src={panel.image}
                  alt={`${panel.title} — Team Medved Los Angeles real estate guidance`}
                  title={`${panel.title} — Team Medved`}
                  className="img-push absolute inset-0 h-full w-full object-cover object-top"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground-950/85 via-foreground-950/25 to-transparent transition-opacity duration-700"
                  aria-hidden="true"
                />

                <div className="relative z-10 p-7 md:p-10">
                  <span className="font-heading text-[0.72rem] italic tracking-[0.14em] text-background-50/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-heading text-3xl leading-[1.06] text-background-50 md:text-[2.9rem]">
                    {panel.title}
                  </h3>
                  <p className="mt-3 max-w-md font-body text-xs font-light leading-relaxed text-background-50/75 md:text-sm">
                    {panel.description}
                  </p>
                  <span className="btn btn-outline-light mt-7 inline-flex items-center gap-3 px-6 py-3.5 btn-label">
                    {panel.cta}
                    <i className="ri-arrow-right-line btn-arrow text-[11px]" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}