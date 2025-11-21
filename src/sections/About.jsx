import Card from "../components/Card"
import CopyEmailButton from "../components/CopyEmailButton";
import Orbitals from "../components/Orbitals";
import { Globe } from "../components/globe";
import { useRef } from "react";

function About() {
    const grid2Container = useRef();
    return (
        <section className="c-space section-spacing">
            <h2 className="text-heading">About Us</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6
            md:auto-rows-[18rem] mt-12">
                <div className="flex items-end grid-default-color
                grid-1">
                    <img src="assets/coding-pov.png"
                    className="absolute scale-[1.75] -right-20 -top-
                    [1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                    />
                    <div className="z-10">
                        <p className="headtext">Hi, we are Nexus Team</p>
                        <p className="subtext">
                            Over the last 3 years, We developed our physics
                            3d platform for students.
                            Our team is from a lot of countries in the world.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none
                    -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"
                    />
                </div>
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container} className="flex items-center justify-center
                    w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                            PHYSICS IS LIFE
                        </p>
                        <Card
                        containerRef={grid2Container}
                        style={{rotate:"75deg", top:"30%",
                            left:"20%"
                        }} text="FORCE"/>
                        <Card
                        containerRef={grid2Container}
                        style={{rotate:"-30deg", top:"60%",
                            left:"45%"
                        }} text="MECHANICS"/>
                        <Card
                        containerRef={grid2Container} 
                            style={{rotate:"90deg", bottom:"30%",
                            left:"70%"
                        }} text="BLENDER"/>
                        <Card
                        containerRef={grid2Container}
                         style={{rotate:"-45deg", top:"55%",
                            left:"0%"
                        }} text="OPTIMISE"/>
                        <Card
                        containerRef={grid2Container} 
                        style={{rotate:"20deg", top:"10%",
                            left:"38%"
                        }} text="THERMODYNAMICS"/>
                    </div>
                </div>
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">
                            Timezone
                        </p>
                        <p className="subtext">We are based in West of Kazakhstan and we work with
                            a lot of countries
                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center
                    justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            Do you want to start work in our team?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
                <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Tech Stack</p>
                        <p className="subtext">Our team using a lot of variaties of
                            languages, technologies and frameworks that makes us more
                            scalable and flexible
                        </p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full
                    h-full start-[50%] md:scale-125">
                        <Orbitals />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About