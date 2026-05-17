// Three.js 3D Background - efekty 3D dla hero sekcji
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

// Pływające cząsteczki/kule - zwiększona widoczność
function FloatingParticles({ count = 80 }) {
  const mesh = useRef<THREE.InstancedMesh>(null)

  // Generuj losowe pozycje dla cząsteczek - większe i bliżej kamery
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 25
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 8 - 2 // bliżej kamery
      const scale = Math.random() * 1.8 + 0.5 // większe cząsteczki
      const speed = Math.random() * 0.4 + 0.15
      temp.push({ x, y, z, scale, speed })
    }
    return temp
  }, [count])

  // Animacja cząsteczek
  useFrame((state) => {
    if (!mesh.current) return

    const time = state.clock.getElapsedTime()

    particles.forEach((particle, i) => {
      const matrix = new THREE.Matrix4()

      // Pływający ruch
      const y = particle.y + Math.sin(time * particle.speed + i) * 0.5
      const x = particle.x + Math.cos(time * particle.speed * 0.5 + i) * 0.3

      matrix.setPosition(x, y, particle.z)
      matrix.scale(new THREE.Vector3(particle.scale, particle.scale, particle.scale))

      mesh.current!.setMatrixAt(i, matrix)
    })

    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color="#fbbf24"
        transparent
        opacity={0.75}
        roughness={0.2}
        metalness={0.8}
        emissive="#f59e0b"
        emissiveIntensity={0.8}
      />
    </instancedMesh>
  )
}

// Świecące pierścienie - grubsze i jaśniejsze
function GlowRing({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.x = time * 0.15
    mesh.current.rotation.y = time * 0.25
  })

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <torusGeometry args={[2, 0.12, 16, 100]} />
      <meshStandardMaterial
        color="#fbbf24"
        emissive="#f59e0b"
        emissiveIntensity={1.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

// Główny komponent 3D Background
export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Oświetlenie - mocniejsze złote akcenty */}
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 5]} intensity={3} color="#fbbf24" />
        <pointLight position={[-10, -10, 0]} intensity={2.5} color="#f59e0b" />
        <pointLight position={[0, 5, 3]} intensity={2} color="#fef3c7" />
        <pointLight position={[5, -5, 2]} intensity={1.5} color="#d97706" />

        {/* Efekty 3D - więcej cząsteczek i pierścieni */}
        <FloatingParticles count={80} />
        <GlowRing position={[-4, 2, -2]} scale={1.8} />
        <GlowRing position={[5, -2, -3]} scale={1.3} />
        <GlowRing position={[0, 0, -5]} scale={2.2} />
        <GlowRing position={[-6, -3, -4]} scale={0.9} />
        <GlowRing position={[7, 3, -3]} scale={1.1} />
      </Canvas>
    </div>
  )
}
