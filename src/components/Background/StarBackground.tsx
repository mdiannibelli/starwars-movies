/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

const StarBackground = ({ props }: any) => {
    const ref: any = useRef();
    const [sphere] = useState(() => // Random stars sphere
        random.inSphere(new Float32Array(800), { radius: 1 })
    );

    useFrame((state, delta) => { // rotate the geometry
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });
    return (
        <group rotation={[0, 0, Math.PI / 4]}> {/* Initial rotation [0, 0, Math.PI / 4] */}
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation={true}
                    dethWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className='w-full h-full fixed inset z-[-20]'>
        <Canvas camera={{ position: [0, 0, 1] }}> {/* start a React Three Fiber Scene */}
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;