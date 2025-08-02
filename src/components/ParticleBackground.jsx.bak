import { useEffect, useRef } from 'react';
import { tsParticles } from 'tsparticles';

export default function ParticleBackground({ id = 'tsparticles', options }) {
  const container = useRef();

  useEffect(() => {
    tsParticles.load(container.current.id, {
      fpsLimit: 60,
      particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { enable: true, speed: 1 },
        color: { value: '#D53F8C' },
        line_linked: { enable: true, distance: 150 }
      },
      interactivity: {
        events: { onhover: { enable: true, mode: 'grab' } }
      },
      ...options
    });
  }, [options]);

  return <div id={id} ref={container} className="absolute inset-0 -z-10" />;
}