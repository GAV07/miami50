import React, { useEffect, useState, useRef } from 'react';
import TRUNK from 'vanta/dist/vanta.trunk.min';
import throttle from 'lodash.throttle'; // Ensure lodash.throttle is installed

const VantaBg = () => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);
  // const currentColorRef = useRef(0x004FFF); // Initialize with the starting color
  // const [scrollColor, setScrollColor] = useState(0x004FFF);

  // const updateScrollColor = () => {
  //   const newColor = window.scrollY < 100 ? 0x004FFF : 0xCBDAFF;
  //   if (newColor !== scrollColor) {
  //     setScrollColor(newColor);
  //   }
  // };

  useEffect(() => { 
    // Throttle the scroll handler to improve performance
    // const handleScroll = throttle(updateScrollColor, 200);

    // window.addEventListener('scroll', handleScroll);

    // Initial Vanta effect setup
    effectRef.current = TRUNK({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      //color: scrollColor,
      color: 0xafc5ff,
      backgroundColor: 0xededed,
      spacing: 1.5,
      chaos: 2.5,
    });

    // currentColorRef.current = scrollColor;

    return () => {
      // window.removeEventListener('scroll', handleScroll);
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount
  
  // useEffect(() => {
  //   if (scrollColor !== currentColorRef.current) {
  //     if (effectRef.current) {
  //       effectRef.current.destroy();
  //     }

  //     effectRef.current = TRUNK({
  //       el: vantaRef.current,
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 200.00,
  //       minWidth: 200.00,
  //       scale: 1.00,
  //       scaleMobile: 1.00,
  //       color: scrollColor,
  //       backgroundColor: 0xededed,
  //       spacing: 1.5,
  //       chaos: 2.5,
  //     });

  //     currentColorRef.current = scrollColor;
  //   }
  // }, [scrollColor]);

  return (
    <div
      ref={vantaRef}
      style={{
        bottom: '50%',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        zIndex: -1,
      }}
    />
  );
};

export default VantaBg;