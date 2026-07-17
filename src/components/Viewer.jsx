import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from '@react-three/drei'
import { ACESFilmicToneMapping } from 'three'
import SneakerModel from './SneakerModel.jsx'

export default function Viewer({
  interactive = false,
  targetRotationY = 0,
  autoSpin = false,
  tint = '#ffffff',
  cameraPosition = [3.4, 1.4, 3.4],
  className = '',
}) {
  return (
    <div className={`viewer ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: cameraPosition, fov: 32 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        onCreated={({ gl }) => {
          gl.toneMapping = ACESFilmicToneMapping
          gl.toneMappingExposure = 1.15
        }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight
          position={[4, 6, 3]}
          intensity={2.6}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        {/* Cool rim light from behind-left: separates a dark shoe from a dark background */}
        <directionalLight position={[-5, 3, -4]} intensity={2.1} color="#7d9cc2" />
        <directionalLight position={[0, -2, 4]} intensity={0.5} color="#ff5a1f" />
        <pointLight position={[0, 3, -4]} intensity={1} />
        <hemisphereLight args={['#f5f3ee', '#15161a', 0.6]} />

        <Suspense fallback={null}>
          <SneakerModel
            targetRotationY={targetRotationY}
            autoSpin={autoSpin && !interactive}
            tint={tint}
            rotation={[0, 0.5, 0]}
          />
          <ContactShadows
            position={[0, -0.98, 0]}
            opacity={0.45}
            scale={8}
            blur={2.4}
            far={2}
          />
        </Suspense>

        {interactive && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1.1}
            rotateSpeed={0.7}
            minPolarAngle={Math.PI / 2.8}
            maxPolarAngle={Math.PI / 1.85}
          />
        )}
      </Canvas>
    </div>
  )
}
