import { Outlet } from "react-router-dom";
import GlowCursor from "../cursor/GlowCursor";
import Preloader from "../Components/Home/Preloader";
import { useCallback, useEffect, useState } from "react";
import { useSmoothScroll } from "../lib/smoothScroll";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useSmoothScroll(!isLoading);

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="scroll-container"
      className="min-h-screen bg-[#08080a] text-[#f4f4f0] relative"
    >
      <div className="relative z-10">
        <div className="pt-0">
          <Outlet />
        </div>
        {!isLoading && (
          <div className="hidden lg:block fixed inset-0 pointer-events-none z-40 w-screen h-screen">
            <GlowCursor
              color="#2dd4bf"
              secondaryColor="#67e8f9"
              trailLength={12}
              trailWidth={6}
              trailTaper={0.8}
              followSpeed={0.5}
              glowIntensity={1.4}
              glowSpread={1.0}
              hotspot={0.55}
              brightness={1.1}
              opacity={0.75}
              pulseSpeed={1.4}
              noiseStrength={0.03}
              idleFade
              idleTimeout={650}
              fadeDuration={150}
              blendMode="screen"
            />
          </div>
        )}
        {isLoading && <Preloader onComplete={handleLoaderComplete} />}
      </div>
    </div>
  );
};

export default MainLayout;
