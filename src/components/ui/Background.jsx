import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function StarField(props) {
  const ref = useRef();
  
  // Generate random points in a sphere
  const sphere = random.inSphere(new Float32Array(3000), { radius: 15 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#8A5CFF"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 bg-background overflow-hidden pointer-events-none">
      {/* Animated Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent-blue/20 blur-[120px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-purple/20 blur-[120px] rounded-full animate-pulse-slow delay-1000"></div>

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* 3D Particles */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <StarField />
        </Canvas>
      </div>
    </div>
  );
}
