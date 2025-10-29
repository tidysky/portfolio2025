  // Shark1.jsx
  import React, { useRef, useEffect, forwardRef, useImperativeHandle, useState } from "react";
  import { useGLTF, useAnimations } from "@react-three/drei";
  import { useFrame } from "@react-three/fiber";
  import * as THREE from "three";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  export const MobileShark = forwardRef(
    (
      {
        position = [0, 0, 0],
        rotation = [-0.5, -1.7, 0],
        scale = 0.15,
        ...props
      },
      ref
    ) => {
      const group = useRef();
      const rotationGroup = useRef();
      const { nodes, materials, animations } = useGLTF("3D/shark1.glb");
      const { actions } = useAnimations(animations, group);

      useImperativeHandle(ref, () => group.current);

      const [isHovering, setIsHovering] = useState(false);
      const [isScrolling, setIsScrolling] = useState(false);
      const timeoutRef = useRef(null);
      const currentActionRef = useRef(null);

      // 位置和旋转目标
      const currentPosition = useRef(new THREE.Vector3(...position));
      const currentRotation = useRef(new THREE.Euler(...rotation, "YXZ")); // 🔑 Euler 顺序YXZ
      const targetQuaternion = useRef(new THREE.Quaternion());

      // 初始化 group 和 rotationGroup
      useEffect(() => {
        if (group.current) {
          group.current.position.copy(currentPosition.current);
        }
        if (rotationGroup.current) {
          targetQuaternion.current.setFromEuler(currentRotation.current);
          rotationGroup.current.quaternion.copy(targetQuaternion.current);
        }
      }, []);

      // 动画名称
      const swimSlow = "rig|rig|swim_slow";
      const swimFast = "rig|rig|swim_fast";
      const attack = "rig|rig|attack";

      // 控制动画播放
      useEffect(() => {
        if (!actions) return;

        let nextActionName;
        if (isHovering) nextActionName = attack;
        else if (isScrolling) nextActionName = swimFast;
        else nextActionName = swimSlow;

        const nextAction = actions[nextActionName];
        const currentAction = currentActionRef.current;

        if (nextAction && currentAction?.getClip().name !== nextActionName) {
          if (currentAction) nextAction.reset().crossFadeFrom(currentAction, 0.5, true).play();
          else nextAction.reset().play();
          currentActionRef.current = nextAction;
        }

        if (nextAction) nextAction.setLoop(THREE.LoopRepeat, Infinity);
      }, [isScrolling, isHovering, actions]);

      return (
        <group
          ref={group}
          scale={scale}
          {...props}
          dispose={null}
          onPointerOver={() => setIsHovering(true)}
          onPointerOut={() => setIsHovering(false)}
        >
          {/* 🔑 独立旋转组，控制 X 轴抬头 */}
          <group
            ref={rotationGroup}
            onUpdate={(self) => (self.rotation.order = "YXZ")}
          >
            <group name="Scene">
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
        </group>
      );
    }
  );

  // 预加载 GLTF
  useGLTF.preload("3D/shark1.glb");
