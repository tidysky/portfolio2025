// Shark1.jsx
import React, { useRef, useEffect, forwardRef, useImperativeHandle, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Shark2 = forwardRef(
  (
    {
      position = [-6, -4, 8],
      rotation = [0, -10, 1],
      scale = 0.09,
      ...props
    },
    ref
  ) => {
    const group = useRef();
    const rotationGroup = useRef();
    const { nodes, materials, animations } = useGLTF("3D/shark2.glb");
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

    // ScrollTrigger 动画
  useEffect(() => {
      
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".secondScreen",
      start: "top 50%", 
      end: "bottom 20% ",      
      scrub: true,
     toggleActions: "play reverse play reverse", 
    },
  });

  tl.to(currentPosition.current, {
    x: -2.5,
    y: -2,
    z: -1.7,
    ease: "power2.inOut",
    duration: 1,
  })
    .to(currentRotation.current, {
      x: 0,
      y: -10,
      z: 0,
      
      duration: 1,
    }, "<"); // "<" 表示和上一个动画同时开始（同步位置和旋转）

  // 再游出去（后半段 progress 0.5~1）
  tl.to(currentPosition.current, {
    x: 50,
    y: 15,
    z: -30,
    ease: "power2.inOut",
    duration: 1,
  })
    .to(currentRotation.current, {
      x: 0,
      y: -11,
      z: 0,
      
      duration: 1,
    }, "<"); // "<" 保持同步


      // // 旋转动画
      // gsap.to(currentRotation.current, {
      //   x: 0,
      //   y: -10,
      //   z: 0,
      //   ease: "power2.inOut",
      //   scrollTrigger: {
      //     trigger: ".secondScreen",
      //     start: "top 50%",
      //     end: "top top",
      //     scrub: true,
      //     markers: true,
      //     onUpdate: () => {
      //       if (timeoutRef.current) clearTimeout(timeoutRef.current);
      //       setIsScrolling(true);
      //       timeoutRef.current = setTimeout(() => setIsScrolling(false), 150);
      //     },
      //   },
      // });



    }, []);

    // 每帧更新位置和旋转
    useFrame(() => {
      if (group.current) {
        // 平滑位置
        group.current.position.lerp(currentPosition.current, 0.1);
      }
      if (rotationGroup.current) {
        // 平滑旋转
        targetQuaternion.current.setFromEuler(currentRotation.current);
        rotationGroup.current.quaternion.slerp(targetQuaternion.current, 0.1);
      }
    });

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
useGLTF.preload("3D/shark2.glb");
