"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroNetwork3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Dimensions
    const container = containerRef.current;
    let width = container.clientWidth || 600;
    let height = container.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all interactive network elements
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Core Architecture Nodes definition: API -> Backend -> Queue -> Database -> AI
    const nodesData = [
      { name: "API Gateway", pos: new THREE.Vector3(-8, 3, 0), color: 0x38bdf8, size: 0.9 },
      { name: "Backend Core", pos: new THREE.Vector3(-2.5, 0.5, 2), color: 0x6366f1, size: 1.2 },
      { name: "Async Queue", pos: new THREE.Vector3(2.5, 2.5, -1), color: 0x06b6d4, size: 0.9 },
      { name: "Database Cluster", pos: new THREE.Vector3(3.5, -3, 1), color: 0x10b981, size: 1.0 },
      { name: "AI / Inference", pos: new THREE.Vector3(8, 1, 0), color: 0xa855f7, size: 1.1 },
      { name: "Cache / Redis", pos: new THREE.Vector3(-2, -3.5, -2), color: 0xf43f5e, size: 0.8 },
      { name: "Observability", pos: new THREE.Vector3(5, 4, -3), color: 0xeab308, size: 0.75 },
    ];

    // Create 3D Meshes for Nodes
    const nodeMeshes: THREE.Mesh[] = [];
    const sphereGeo = new THREE.SphereGeometry(1, 24, 24);
    const ringGeo = new THREE.RingGeometry(1.2, 1.35, 32);

    nodesData.forEach((node) => {
      // Core sphere
      const mat = new THREE.MeshBasicMaterial({
        color: node.color,
        wireframe: true,
      });
      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.scale.setScalar(node.size);
      mesh.position.copy(node.pos);
      networkGroup.add(mesh);
      nodeMeshes.push(mesh);

      // Subtle outer glow halo
      const innerCoreMat = new THREE.MeshBasicMaterial({
        color: node.color,
        transparent: true,
        opacity: 0.25,
      });
      const innerCore = new THREE.Mesh(sphereGeo, innerCoreMat);
      innerCore.scale.setScalar(node.size * 0.75);
      mesh.add(innerCore);

      // Orbiting subtle ring
      const ringMat = new THREE.MeshBasicMaterial({
        color: node.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.scale.setScalar(node.size);
      ring.rotation.x = Math.PI / 2;
      mesh.add(ring);
    });

    // Create connections between nodes
    const connections = [
      [0, 1], // API -> Backend
      [1, 2], // Backend -> Queue
      [1, 5], // Backend -> Redis
      [1, 3], // Backend -> Database
      [2, 4], // Queue -> AI
      [2, 6], // Queue -> Observability
      [4, 3], // AI -> Database
      [5, 3], // Redis -> Database
    ];

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.22,
    });

    connections.forEach(([i, j]) => {
      const p1 = nodesData[i].pos;
      const p2 = nodesData[j].pos;
      const points = [p1, p2];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeo, lineMat);
      networkGroup.add(line);
    });

    // Pulsing Data Packets Traveling Between Nodes
    const packetCount = 14;
    const packetGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const packetMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });

    const packets: {
      mesh: THREE.Mesh;
      fromIdx: number;
      toIdx: number;
      progress: number;
      speed: number;
    }[] = [];

    for (let p = 0; p < packetCount; p++) {
      const conn = connections[p % connections.length];
      const packetMesh = new THREE.Mesh(packetGeo, packetMat);
      networkGroup.add(packetMesh);
      packets.push({
        mesh: packetMesh,
        fromIdx: conn[0],
        toIdx: conn[1],
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.005,
      });
    }

    // Background floating particle dust
    const particleCount = 100;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let k = 0; k < particleCount * 3; k += 3) {
      particlePositions[k] = (Math.random() - 0.5) * 36;
      particlePositions[k + 1] = (Math.random() - 0.5) * 24;
      particlePositions[k + 2] = (Math.random() - 0.5) * 20;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x64748b,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    networkGroup.add(particles);

    // Mouse movement interaction with damping
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetRotationY = x * 0.5;
      targetRotationX = y * 0.35;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop with Visibility detection
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth lerp toward mouse target
        networkGroup.rotation.y += (targetRotationY - networkGroup.rotation.y) * 0.05;
        networkGroup.rotation.x += (targetRotationX - networkGroup.rotation.x) * 0.05;

        // Subtle continuous idle drift
        networkGroup.rotation.y += 0.001;

        // Animate individual nodes (slight rotation & pulse)
        nodeMeshes.forEach((mesh, idx) => {
          mesh.rotation.y += 0.01;
          mesh.rotation.z += 0.005;
          const scaleOffset = Math.sin(elapsed * 2 + idx) * 0.05;
          mesh.scale.setScalar(nodesData[idx].size * (1 + scaleOffset));
        });

        // Animate traveling data packets
        packets.forEach((p) => {
          p.progress += p.speed;
          if (p.progress >= 1) {
            p.progress = 0;
          }
          const fromPos = nodesData[p.fromIdx].pos;
          const toPos = nodesData[p.toIdx].pos;
          p.mesh.position.lerpVectors(fromPos, toPos, p.progress);
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      ringGeo.dispose();
      packetGeo.dispose();
      lineMat.dispose();
      packetMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] relative pointer-events-none"
      aria-hidden="true"
    >
      {/* Background glow beneath canvas */}
      <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
