"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Envelope() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.35) * 0.25;
    group.current.rotation.x = Math.cos(t * 0.22) * 0.08 - 0.08;
    group.current.position.y = Math.sin(t * 0.7) * 0.08;
  });
  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.35}>
        <RoundedBox args={[2.8, 1.8, 0.12]} radius={0.08} smoothness={4}>
          <meshStandardMaterial color="#fbfcfa" roughness={0.35} metalness={0.05} />
        </RoundedBox>
        <mesh position={[0, 0.2, 0.08]} rotation={[0, 0, Math.PI]}>
          <coneGeometry args={[1.45, 1.0, 3]} />
          <meshStandardMaterial color="#eaf0ec" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.05, 0.1]}>
          <circleGeometry args={[0.24, 32]} />
          <meshStandardMaterial color="#d4a017" metalness={0.7} roughness={0.25} emissive="#a16207" emissiveIntensity={0.15} />
        </mesh>
        <mesh position={[0, -0.15, 0.09]}>
          <planeGeometry args={[1.7, 0.85]} />
          <MeshDistortMaterial color="#dde5df" transparent opacity={0.55} distort={0.08} speed={1.5} />
        </mesh>
      </Float>
      <Sparkles count={45} scale={[5, 4, 3]} size={2.2} speed={0.25} color="#d4a017" opacity={0.55} />
    </group>
  );
}

export default function HeroScene() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.95} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} color="#fffaf0" />
        <pointLight position={[-3, -2, 3]} intensity={0.4} color="#b8cabc" />
        <Envelope />
      </Canvas>
    </div>
  );
}
