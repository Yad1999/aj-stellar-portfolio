import { Facebook, Instagram, Linkedin, Mail, Map, MapPin, Phone, Send, Youtube } from "lucide-react";
import { cn } from '@/lib/utils';
// 2:31:05
export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {
            
        }, 1500)
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3-xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="text-center">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>
                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-text-semibold text-lg">Email</h4>
                                    <a 
                                        href="mailto:anreydelacruz@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        anreydelacruz@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-text-semibold text-lg">Phone</h4>
                                    <a 
                                        href="tel:+16479079187"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +1 (647) 907-9187
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-text-semibold text-lg">Location</h4>
                                    <p
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Toronto, ON, Canada
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="text-2xl font-semibold mb-6"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a 
                                    href="https://www.linkedin.com/in/anrey-jazriel-dela-cruz-311034187/" 
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Linkedin />
                                </a>
                                <a 
                                    href="https://www.instagram.com/thinkofanamel8er/" 
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Instagram />
                                </a>
                                <a 
                                    href="https://www.youtube.com/@ADCintsru" 
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Youtube />
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};