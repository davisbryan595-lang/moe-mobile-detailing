import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const instagramPosts = [
  {
    id: "DNTE7hyAGPS",
    url: "https://www.instagram.com/p/DNTE7hyAGPS/",
    title: "Deep interior transformation",
  },
  {
    id: "DN9VZCuAPB-",
    url: "https://www.instagram.com/p/DN9VZCuAPB-/",
    title: "Ceramic coating gloss test",
  },
  {
    id: "DOxSfICAOb2",
    url: "https://www.instagram.com/p/DOxSfICAOb2/",
    title: "Paint correction close-up",
  },
  {
    id: "DPvPG_PgHxw",
    url: "https://www.instagram.com/p/DPvPG_PgHxw/",
    title: "Headlight restoration finale",
  },
];

const beforeAfterImages = {
  before: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F6648c00953fc4229b4d650a65b3ea40a?format=webp&width=800",
  after: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2Fc8326c5f8e724bf4aacc2ce2491a2b7e?format=webp&width=800",
};

const GallerySection = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const embedUrls = useMemo(
    () =>
      instagramPosts.map((post) => ({
        ...post,
        embedUrl: `${post.url}${post.url.endsWith("/") ? "" : "/"}embed/`,
      })),
    []
  );

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Work Speaks for Itself
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the stunning transformations we've achieved for our satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {embedUrls.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-xl overflow-hidden border border-border/60 bg-secondary/60 backdrop-blur-md shadow-card"
            >
              <iframe
                src={post.embedUrl}
                title={post.title}
                className="w-full h-[380px] -translate-y-12 pointer-events-none"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                scrolling="no"
              />
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-colors"
                aria-label="Open post on Instagram"
              >
                <div className="text-white text-sm md:text-base font-semibold bg-black/40 px-3 py-2 rounded-full flex items-center gap-4">
                  <span className="likes" />
                  <span className="comments" />
                </div>
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold uppercase tracking-[0.2em] text-white/90 bg-black/40 px-2 py-1 rounded">moe.mobile.detailing</div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-white/90 underline">View profile</div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            className="gradient-primary px-10 py-6 text-lg rounded-full shadow-glow hover:scale-105 transition-transform"
          >
            <a href="https://www.instagram.com/moe.mobile.detailing/" target="_blank" rel="noopener noreferrer">
              View More On Instagram
            </a>
          </Button>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">Before & After Reveal</h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Slide the handle to compare a real client detail from start to finish. Every surface is restored with precision.
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-border/60 shadow-glow">
              <img
                src={beforeAfterImages.after}
                alt="After detailing results"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 h-full w-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                aria-hidden="true"
              >
                <img
                  src={beforeAfterImages.before}
                  alt="Before detailing condition"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="absolute top-0 bottom-0 w-1 bg-primary pointer-events-none"
                style={{ left: `${sliderValue}%`, transform: "translateX(-50%)" }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${sliderValue}%`, transform: "translate(-50%, -50%)" }}
                aria-hidden="true"
              >
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow">
                  ⇆
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary bg-secondary/70 px-3 py-1 rounded-full">
                Before
              </div>
              <div className="absolute bottom-4 right-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary bg-secondary/70 px-3 py-1 rounded-full">
                After
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Before</span>
              <input
                type="range"
                min={0}
                max={100}
                value={sliderValue}
                onChange={(event) => setSliderValue(Number(event.target.value))}
                className="flex-1 accent-primary h-1 bg-border rounded-full appearance-none"
                aria-label="Compare before and after detailing"
              />
              <span className="text-sm uppercase tracking-[0.4em] text-muted-foreground">After</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Gallery photos are displayed from our Instagram feed. Visit our profile to see all our work!</p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
