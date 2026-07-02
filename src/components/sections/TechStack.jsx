import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Html, OrbitControls } from '@react-three/drei';
import { 
  FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaJsSquare
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiMysql
} from 'react-icons/si';

const techLogos = [
  { icon: FaReact, color: '#61DAFB' },
  { icon: FaNodeJs, color: '#339933' },
  { icon: SiExpress, color: '#ffffff' },
  { icon: SiMongodb, color: '#47A248' },
  { icon: FaHtml5, color: '#E34F26' },
  { icon: FaJsSquare, color: '#F7DF1E' },
  { icon: SiMysql, color: '#4479A1' },
  { icon: FaGitAlt, color: '#F05032' },
];

function OrbitingLogos() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Glowing Sphere */}
      <Sphere args={[1, 64, 64]}>
        <meshBasicMaterial color="#4F7CFF" />
        <pointLight color="#4F7CFF" intensity={5} distance={10} />
      </Sphere>

      {/* Orbiting Icons */}
      {techLogos.map((tech, index) => {
        const phi = Math.acos(-1 + (2 * index) / techLogos.length);
        const theta = Math.sqrt(techLogos.length * Math.PI) * phi;
        const radius = 3.5;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        return (
          <group key={index} position={[x, y, z]}>
            <Html center transform sprite>
              <div className="w-16 h-16 glass rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(79,124,255,0.4)] transition-shadow duration-300">
                <tech.icon size={30} color={tech.color} />
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default function TechStack() {
  return (
    <section className="relative py-24 z-10 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Core <span className="text-gradient">Technologies</span>
        </h2>
        <div className="h-1 w-20 bg-accent-blue rounded-full mx-auto"></div>
      </div>

      <div className="h-[600px] w-full">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <OrbitingLogos />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
}
