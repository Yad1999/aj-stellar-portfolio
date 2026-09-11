import { useEffect, useState } from "react";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import cloud3 from "../assets/cloud3.png";
import cloud4 from "../assets/cloud4.png";
import cloud5 from "../assets/cloud5.png";

export const CloudBackground = () => {
    const [clouds, setClouds] = useState([]);

    useEffect(() => {
        generateClouds();

        const handleResize = () => {
            generateClouds();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateClouds = () => {
        // Generate a random 4 to 7 clouds total
        const numberOfClouds = Math.floor(Math.random() * 4) + 4;

        const newClouds = [];
        const cloudImages = [cloud1, cloud2, cloud3, cloud4, cloud5];

        for (let i = 0; i < numberOfClouds; i++) {
            newClouds.push({
                id: i,
                size: Math.random() * 70 + 50 + "vw", 
                delay: Math.random() * -60, // Negative delay to start mid-screen
                opacity: Math.random() * 0.5 + 0.3,
                animationDuration: Math.random() * 60 + 40, // Slow movement
                image: cloudImages[Math.floor(Math.random() * cloudImages.length)],
            });
        }
        setClouds(newClouds);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-[#1F3C5C] via-[#314C6F] to-[#6384A2]">
            {clouds.map((cloud) => (
                <div key={cloud.id} className="absolute animate-move-cloud will-change-transform will-change-opacity" style={{
                    width: cloud.size,
                    bottom: "0px",
                    "--cloud-opacity": cloud.opacity,
                    animationDelay: cloud.delay + "s",
                    animationDuration: cloud.animationDuration + "s",
                }}>
                    <img 
                        src={cloud.image} 
                        alt="cloud" 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto drop-shadow-md"
                    />
                </div>
            ))}
        </div>
    );
};
