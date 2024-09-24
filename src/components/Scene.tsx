"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Html, ScrollControls, useProgress } from "@react-three/drei"
import PhoenixModel from "./PhoenixModel"

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
    return (
        <Canvas>
            <directionalLight position={[-5, -5, 5]} intensity={4} />
            <Suspense fallback={<Loader />}>
                <ScrollControls pages={0} damping={0.2}>
                    <PhoenixModel />
                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}