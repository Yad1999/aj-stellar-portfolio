import { useEffect, useState } from "react";

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
        // Generate a random 5 to 8 clouds total
        const numberOfClouds = Math.floor(Math.random() * 4) + 4;

        const newClouds = [];
        const colors = ["#F9F4E8", "#F4EBDE"];

        for (let i = 0; i < numberOfClouds; i++) {
            newClouds.push({
                id: i,
                size: Math.random() * 250 + 150, // Massive clouds (150px to 400px)
                y: Math.random() * 80 + 5,
                delay: Math.random() * -60, // Negative delay to start mid-screen
                opacity: Math.random() * 0.5 + 0.3,
                animationDuration: Math.random() * 60 + 40, // Slow movement
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }
        setClouds(newClouds);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-[#1F3C5C] via-[#314C6F] to-[#6384A2]">
            {clouds.map((cloud) => (
                <div key={cloud.id} className="absolute animate-move-cloud" style={{
                    width: cloud.size + "px",
                    height: cloud.size * 0.7 + "px",
                    top: cloud.y + "%",
                    opacity: cloud.opacity,
                    animationDelay: cloud.delay + "s",
                    animationDuration: cloud.animationDuration + "s",
                    color: cloud.color,
                }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                        <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1332 20.1764 10.1917 17.8643 10.0152C17.3828 6.64366 14.4849 4 11 4C7.13401 4 4 7.13401 4 11C4 11.2335 4.01142 11.4644 4.03362 11.6917C2.26127 12.3556 1 14.0366 1 16C1 18.2091 2.79086 20 5 20H17.5Z" />
                    </svg>
                </div>
            ))}
        </div>
    );
};
