import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function SnowParticles() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = () => { };

    return (
        <>
            {init && (
                <Particles
                    id="snow"
                    particlesLoaded={particlesLoaded}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: -1,
                        pointerEvents: "none",
                    }}
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        particles: {
                            number: {
                                value: 160,
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                            },
                            color: {
                                value: ["#00FF99", "#00c6ff", "#38BDF8"],
                            },
                            shape: {
                                type: "circle",
                            },
                            opacity: {
                                value: 1,
                                animation: {
                                    enable: true,
                                    speed: 1,
                                    minimumValue: 0.3,
                                    sync: false,
                                },
                            },
                            size: {
                                value: 1.5,
                                random: true,
                            },
                            move: {
                                enable: true,
                                speed: 0.2,
                                direction: "none",
                                straight: false,
                                outModes: {
                                    default: "out",
                                },
                            },
                        },
                        detectRetina: true,
                    }}

                />
            )}
        </>
    );
}
