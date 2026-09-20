import GlowCursor from "./GlowCursor";

const Cursor = () => {
  return (
    <div className="hidden lg:block fixed inset-0 pointer-events-none z-50 w-screen h-screen">
      <GlowCursor
        color="#67E8F9"
        secondaryColor="#A78BFA"
        trailLength={14}
        trailWidth={8}
        trailTaper={0.8}
        followSpeed={0.5}
        glowIntensity={1.9}
        glowSpread={1.2}
        hotspot={0.65}
        brightness={1.25}
        opacity={1}
        pulseSpeed={1.6}
        noiseStrength={0.035}
        idleFade
        idleTimeout={700}
        fadeDuration={100}
        blendMode="screen"
      />
    </div>
  );
};

export default Cursor;
