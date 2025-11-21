import {motion,  useScroll, useSpring } from "motion/react";
import React from "react";

function ParallaxBackground() {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, {damping:50})
    return (
        <section className="absolute inset-0 bg-black/40">
            <div className="relative h-screen overflow-y-hidden">
                {/* Background Space */}
                <div className="absolute inset-0 w-full h-screen -z-50"
                    style={{
                        backgroundImage: "url(/assets/sky.jpg)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }} />
            </div>
        </section>
    )
}

export default ParallaxBackground;