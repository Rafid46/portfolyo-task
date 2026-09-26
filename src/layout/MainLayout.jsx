import { Outlet } from "react-router-dom";
import GlowCursor from "../cursor/GlowCursor";
import Preloader from "../Components/Home/Preloader";
import { useEffect, useState } from "react";
import { useSmoothScroll } from "../lib/smoothScroll";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Lenis + ScrollTrigger share one RAF loop; only starts once the preloader
  // is gone so pinned sections measure against the real layout.
  useSmoothScroll(!isLoading);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="scroll-container" className="min-h-screen text-white relative">
      <div className="relative z-10">
        {isLoading ? (
          <Preloader />
        ) : (
          <div>
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
            <div className="pt-0">
              <Outlet />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
