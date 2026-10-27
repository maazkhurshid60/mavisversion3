import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { featuredProperties } from "@/mocks/home";

export default function FeaturedProperties() {
  return (
    <section className="px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading
          index="03"
          label="Portfolio"
          title="Featured Properties"
          align="left"
          className="max-w-3xl"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {featuredProperties.map((property, index) => (
            <Reveal key={property.id} index={index} step={130} y={34} className="h-full">
              <Link
                to={`/properties/${property.id}`}
                className="group flex h-full cursor-pointer flex-col border border-foreground-950/12 bg-background-50"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={property.image}
                    alt={`${property.name} — ${property.address} luxury home listed by Team Medved`}
                    title={`${property.name}, ${property.address}`}
                    className="img-push h-full w-full object-cover object-center"
                  />
                  <span className="absolute left-0 top-0 bg-foreground-950 px-3 py-1.5 font-label text-[9px] text-background-50">
                    {property.tag}
                  </span>

                  <span className="veil" aria-hidden="true" />
                  <span className="veil-content absolute inset-0 flex items-center justify-center">
                    <span className="btn btn-outline-light inline-flex items-center gap-2 px-5 py-3 btn-label">
                      View Property
                    </span>
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-5 py-6 text-center">
                  <h3 className="font-heading text-lg leading-snug text-foreground-950">
                    {property.name}
                  </h3>
                  <p className="mt-2 font-body text-[11px] font-light leading-relaxed text-foreground-600">
                    {property.address}
                    {property.meta ? ` · ${property.meta}` : ""}
                  </p>
                  <span className="mx-auto mt-4 block h-px w-8 bg-foreground-950/20" aria-hidden="true" />
                  <span className="mt-3 font-heading text-base text-foreground-950">
                    {property.price}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal y={20} delay={120}>
          <div className="mt-12 flex justify-center">
            <Link
              to="/properties/sale"
              className="btn btn-outline inline-flex cursor-pointer items-center gap-3 px-9 py-4 btn-label"
            >
              View All Properties
              <i className="ri-arrow-right-line btn-arrow text-[11px]" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}