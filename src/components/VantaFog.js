'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/src/vanta.fog'; // ✅ correct import path

export default function VantaFog() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      const effect = FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xf7f7f7,
        midtoneColor: 0xffffff,
        lowlightColor: 0x9589ff,
        baseColor: 0xffffff,
        blurFactor: 0.9,
        speed: 5.0,
        zoom: 0.7,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    />
  );
}
