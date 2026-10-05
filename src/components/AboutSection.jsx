import { Briefcase, Code, User, Cog } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Final Year Computer Science Student & Passionate Full-Stack Developer
                        </h3>

                        <p className="text-muted-foreground">
                            Since I was a little old child, from creative storytelling and singing to music,
                            I've always been a creatively driven person. As I grew older, I combined lifelong
                            storytelling with modern technology to build unique projects that solve
                            real-world problems.
                        </p>

                        <p className="text-muted-foreground">
                            Whether I'm engineering full-stack mobile and web applications,
                            building award-winning AI integrations and e-commerce platforms,
                            or experimenting with indie game development, I am driven
                            by work where technical problem-solving meets genuine human impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            {/* Put in link to CV in href and put the cv file in the project!*/}
                            <a href="/work/resume.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-text-semibold text-lg">Full-Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Engineering responsive, accessible full-stack mobile and web applications
                                        using modern frameworks, cloud architectures, and interactive tooling.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-text-semibold text-lg">Agentic AI Tooling & Workflows</h4>
                                    <p className="text-muted-foreground">
                                        Leveraging next-generation agentic IDEs, multi-model setups,
                                        and LLM toolchains (Claude Code, Gemini) to accelerate
                                        development lifecycles and build intelligent systems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Cog className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-text-semibold text-lg">Experimental & Creative Development</h4>
                                    <p className="text-muted-foreground">
                                        Exploring the intersection of creativity and technology
                                        through indie game development and building award-winning,
                                        AI-powered applications.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};