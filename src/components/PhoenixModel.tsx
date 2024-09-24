"use clinet"

import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

useGLTF.preload('/cartoon_cat.glb');

export default function PhoenixModel() {
    const group = useRef<Group>(null);
    const { animations, scene } = useGLTF('/cartoon_cat.glb');
    const { actions } = useAnimations(animations, scene)
    const scroll = useScroll()

    useEffect(() => {
        actions['waiting'].play()
    }, [])

    useFrame(() => {
        // actions['waiting'].time = (actions['waiting']?.getClip().duration * scroll.offset) / 4
    })
    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}
