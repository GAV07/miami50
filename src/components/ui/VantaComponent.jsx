// components/VantaBackground.js
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadVanta = async () => {
      try {
      const VANTA = (await import('vanta/dist/vanta.trunk.min')).default;
        const THREE = (await import('three/build/three.module.js'));

      if (isMounted && vantaRef.current) {
        vantaEffectRef.current = VANTA({
          el: vantaRef.current,
          THREE: THREE,
            // Add any Vanta.js options here
        });
      }
        
        console.log("VANTA and THREE successfully loaded");
      } catch (err) {
        console.error("Failed to load Vanta.js or THREE.js", err);
      }
    };

    loadVanta();

    return () => {
      isMounted = false;
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} style={{ width: '100%', height: '100vh', position: 'absolute', zIndex: -10 }} />;
};

export default dynamic(() => Promise.resolve(VantaBackground), {
  ssr: false,
});