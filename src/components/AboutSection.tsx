import CountUp from "@/components/ui/count-up";
import detailingImage from "@/assets/detailing-work.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground">
              About Moe's Mobile Detailing
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Moe's Mobile Detailing is a locally trusted, professional detailing service based in Round Rock and Austin, TX. We specialize in giving every vehicle—from daily drivers to luxury cars—the attention and care it deserves. Our mission is simple: deliver a spotless, showroom-level finish right at your doorstep.
              </p>
              <p>
                Whether it's a full interior refresh or a sparkling exterior shine, we combine premium products, precision techniques, and unmatched passion for cars to make your vehicle look its absolute best.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 pt-6">
              <div className="text-center">
                <CountUp value={100} suffix="+" className="text-4xl font-extrabold text-primary drop-shadow-sm" />
                <div className="text-sm text-muted-foreground uppercase tracking-[0.3em] mt-2">Happy Customers</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="text-center">
                <CountUp value={5} suffix="★" decimals={1} className="text-4xl font-extrabold text-primary drop-shadow-sm" />
                <div className="text-sm text-muted-foreground uppercase tracking-[0.3em] mt-2">Rating</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="text-center">
                <CountUp value={24} suffix="/7" className="text-4xl font-extrabold text-primary drop-shadow-sm" />
                <div className="text-sm text-muted-foreground uppercase tracking-[0.3em] mt-2">Mobile Service</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={detailingImage}
                alt="Professional car detailing service"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-primary rounded-2xl -z-10 blur-2xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
