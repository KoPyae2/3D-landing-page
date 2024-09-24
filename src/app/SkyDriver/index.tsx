"use client";


import { View } from "@react-three/drei";
import Scene from "./Scene";
/**
 * Props for `SkyDive`.
 */

/**
 * Component for "SkyDive" Slices.
 */
const SkyDive = (): JSX.Element => {
  return (
    <section
      className="skydive h-screen"
    >
      {/* <h2 className="sr-only">{slice.primary.sentence}</h2> */}
      <View className="h-screen w-screen">
        <Scene
          sentence='Drive Into Better Health'
        />
      </View>
    </section>
  );
};

export default SkyDive;