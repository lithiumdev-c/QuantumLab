import { OrbitingCircles } from "./OrbitingCircles";

export function Orbitals() {
    const skills = [
        "blender",
        "cpp",
        "c",
        "react",
        "maya",
        "linux",
        "r",
        "cs",
        "git-icon",
        "python",
    ]
    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
            <OrbitingCircles iconSize={40}>
                {skills.map((skills, index) => (
                    <Icon key={index} src={`assets/logos/${skills}.svg`} />
                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                {skills.reverse().map((skills, index) => (
                    <Icon key={index} src={`assets/logos/${skills}.svg`} />
                ))}
            </OrbitingCircles>
        </div>
    )
}

const Icon = ({ src }) => (
    <img src={src} alt="icon" className=" duration-200 rounded-sm
     hover:scale-110" />
)

export default Orbitals;
