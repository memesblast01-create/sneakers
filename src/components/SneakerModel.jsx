import { useEffect, useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const MODEL_URL = '/models/scene-optimized.glb'

/**
 * Loads the sneaker glb, auto-centers + normalizes its scale so it always
 * frames the same way regardless of the source model's raw pivot/units,
 * and exposes a tint color + target rotation that it eases toward.
 */
export default function SneakerModel({
  targetRotationY = 0,
  autoSpin = false,
  tint = '#ffffff',
  ...props
}) {
  const group = useRef()
  const { scene } = useGLTF(MODEL_URL)

  const model = useMemo(() => scene.clone(true), [scene])

  const materials = useMemo(() => {
    const found = []
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        child.material = child.material.clone()
        found.push(child.material)
      }
    })
    return found
  }, [model])

  // Auto-center and normalize scale so the shoe always sits the same way
  // no matter the raw export's units/origin.
  const { offset, scale } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(model)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)
    const maxAxis = Math.max(size.x, size.y, size.z) || 1
    return { offset: center, scale: 2.6 / maxAxis }
  }, [model])

  useEffect(() => {
    materials.forEach((mat) => {
      mat.color.set(tint)
      mat.needsUpdate = true
    })
  }, [materials, tint])

  useFrame((_, delta) => {
    if (!group.current) return
    if (autoSpin) {
      group.current.rotation.y += delta * 0.15
    } else {
      group.current.rotation.y = THREE.MathUtils.damp(
        group.current.rotation.y,
        targetRotationY,
        4,
        delta,
      )
    }
  })

  return (
    <group ref={group} {...props}>
      <group scale={scale} position={[-offset.x * scale, -offset.y * scale, -offset.z * scale]}>
        <primitive object={model} />
      </group>
    </group>
  )
}

useGLTF.preload(MODEL_URL)
