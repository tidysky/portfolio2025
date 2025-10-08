// Shark3.jsx
import React, { useRef, forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

export const Shark3 = forwardRef((props, ref) => {
  const group = useRef();
  const rotationGroup = useRef(); // 🔑 独立旋转组
  const { nodes, materials } = useGLTF("3D/shark3.glb");

  React.useImperativeHandle(ref, () => group.current);

  const { posX, posY, posZ, rotX, rotY, rotZ, scale } = useControls("Shark3", {
    posX: { value: 0, min: -20, max: 20, step: 0.1 },
    posY: { value: 0, min: -20, max: 20, step: 0.1 },
    posZ: { value: 0, min: -20, max: 20, step: 0.1 },
    rotX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    scale: { value: 0.05, min: 0, max: 5, step: 0.01 },
  });

  // 每帧更新旋转，保证 Euler 顺序正确
  useEffect(() => {
    if (rotationGroup.current) {
      rotationGroup.current.rotation.order = "YXZ";
      rotationGroup.current.rotation.set(rotX, rotY, rotZ);
    }
  });

  return (
    <group
      ref={group}
      position={[posX, posY, posZ]}
      scale={scale}
      {...props}
      dispose={null}
    >
      {/* 🔑 独立旋转组 */}
      <group ref={rotationGroup} onUpdate={(self) => (self.rotation.order = "YXZ")}>
        <group name="rig">
          <group name="shark_robot_sketchfab">
            <skinnedMesh
              name="shark_robot_sketchfab001"
              geometry={nodes.shark_robot_sketchfab001.geometry}
              material={materials["Material.006"]}
              skeleton={nodes.shark_robot_sketchfab001.skeleton}
            />
            <skinnedMesh
              name="shark_robot_sketchfab001_1"
              geometry={nodes.shark_robot_sketchfab001_1.geometry}
              material={materials["Material.008"]}
              skeleton={nodes.shark_robot_sketchfab001_1.skeleton}
            />
            <skinnedMesh
              name="shark_robot_sketchfab001_2"
              geometry={nodes.shark_robot_sketchfab001_2.geometry}
              material={materials["Material.009"]}
              skeleton={nodes.shark_robot_sketchfab001_2.skeleton}
            />
            <skinnedMesh
              name="shark_robot_sketchfab001_3"
              geometry={nodes.shark_robot_sketchfab001_3.geometry}
              material={materials["Material.010"]}
              skeleton={nodes.shark_robot_sketchfab001_3.skeleton}
            />
            <skinnedMesh
              name="shark_robot_sketchfab001_4"
              geometry={nodes.shark_robot_sketchfab001_4.geometry}
              material={materials["Material.011"]}
              skeleton={nodes.shark_robot_sketchfab001_4.skeleton}
            />
            <skinnedMesh
              name="shark_robot_sketchfab001_5"
              geometry={nodes.shark_robot_sketchfab001_5.geometry}
              material={materials["Material.012"]}
              skeleton={nodes.shark_robot_sketchfab001_5.skeleton}
            />
          </group>
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("3D/shark3.glb");
