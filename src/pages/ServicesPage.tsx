import { Canvas } from '@react-three/fiber';
import { ShaderPlane } from '../components/ui/background-paper-shaders';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <main className="pt-24 min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 1.5] }}>
          <ShaderPlane position={[0, 0, 0]} color1="#222222" color2="#000000" />
        </Canvas>
      </div>
      <div className="relative z-10">
        <Services />
      </div>
    </main>
  );
}
