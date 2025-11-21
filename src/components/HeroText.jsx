import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
const words = ["Modern", "Interesting", "Scientistic"]
const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};
function HeroText() {
    return (
        <div className="z-10 mt-20
        text-center md:text-left
        rounded-3xl bg-clip-text">
            { /* Desktop Screen */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1 className="text-4xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Welcome to QunatumLab!</motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p className="text-5xl font-medium
                     text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        A 3d Labarotory
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}>
                        <FlipWords
                            words={words}
                            className="font-black text-white text-8xl" />
                    </motion.div>
                    <motion.p className="text-4xl font-medium
                    text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}>
                        Future of physics</motion.p>
                </div>
            </div>
            {/* Mobile Screen */}
            <div className="flex flex-col space-y-6 md:hidden">
                <motion.p className="text-4xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >Welcome to QuantumLab</motion.p>
                <div>
                    <motion.p className="text-5xl font-black
                    text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}>
                        Building</motion.p>
                <motion.div
                words={words}
                className="font-bold text-white text-7xl"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5 }}
                >
                    <FlipWords words={words} />
                </motion.div>
                <motion.p className="text-4xl font-black text-neutral-100"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.8 }}>
                    3D-Engines</motion.p>
            </div>
        </div>
        </div >
    )
}

export default HeroText;