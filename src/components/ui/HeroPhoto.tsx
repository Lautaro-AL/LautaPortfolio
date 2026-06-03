interface HeroPhotoProps {
  mounted: boolean;
}

export default function HeroPhoto({ mounted }: HeroPhotoProps) {
  return (
    <div
      className="relative"
      style={{
        width: "100%",
        maxWidth: "340px",
        aspectRatio: "3 / 4",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateX(0)" : "translateX(28px)",
        transition: "opacity 1.2s ease, transform 1.2s cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: "0ms",
      }}
    >
      {/* Glow behind the frame */}
      <div
        className="absolute inset-0 -z-10 blur-3xl"
        style={{
          background: "radial-gradient(ellipse at center, rgba(79,142,247,0.09) 0%, transparent 70%)",
          transform: "scale(1.4)",
        }}
      />

      {/* Main container */}
      <div className="absolute inset-0 border border-border-color overflow-hidden bg-surface">
        {/* Real photo — hides itself on error so placeholder shows */}
        <img
          src="/images/profile.jpg"
          alt="Lautaro Álvarez"
          className="absolute inset-0 w-full h-full object-cover object-top z-10"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />

        {/* Placeholder (visible when no photo) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 35% 30%, rgba(79,142,247,0.06) 0%, transparent 60%), radial-gradient(circle at 75% 75%, rgba(100,255,218,0.04) 0%, transparent 45%)",
            }}
          />
          <span
            className="font-display font-extrabold relative"
            style={{
              fontSize: "clamp(4rem, 8vw, 6.5rem)",
              letterSpacing: "-0.05em",
              lineHeight: 1,
              color: "rgba(46,55,72,0.9)",
            }}
          >
            LA
          </span>
          <span
            className="font-mono text-xs mt-3 tracking-[0.35em] relative"
            style={{ color: "rgba(90,96,112,0.3)" }}
          >
            FOTO
          </span>
        </div>

        {/* Bottom vignette */}
        <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-bg/25 to-transparent pointer-events-none z-20" />
      </div>

      {/* Crop mark — top right */}
      <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-accent/25 pointer-events-none" />
      {/* Crop mark — bottom left */}
      <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-accent/25 pointer-events-none" />
    </div>
  );
}
