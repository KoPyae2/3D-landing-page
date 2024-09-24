import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

useGLTF.preload('/robot_playground.glb');

export default function RobotModel() {
    const group = useRef<Group>(null);
    const { animations, scene } = useGLTF('/robot_playground.glb');

    const { actions } = useAnimations(animations, scene)
    const scroll = useScroll()
    useEffect(() => {
        actions['Experiment'].play().paused = true
    }, [])

    useFrame(() => {
        actions['Experiment'].time = (actions['Experiment']?.getClip().duration * scroll.offset) / 4
    })
    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}
