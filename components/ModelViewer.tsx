'use client';

import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={1} />;
}

export default function ModelViewer({ modelUrl }: { modelUrl: string }) {
    return (
        <div className="w-full h-96 bg-gray-900 rounded-lg">
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <Model url={modelUrl} />
                </Suspense>
                <OrbitControls enableZoom enablePan />
            </Canvas>
        </div>
    );
}