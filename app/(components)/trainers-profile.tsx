import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const trainers = [
    {
        name: "Monkey D. Luffy",
        specialty: "Adventure & Team Building",
        bio: "Luffy is a dynamic fitness coach known for his infectious enthusiasm and energy. He believes in pushing boundaries and encouraging clients to embrace challenges in their fitness journey. His engaging group classes focus on teamwork and fun, making every workout an adventure.",
        image: "/luffy.jpg",
    },
    {
        name: "Nami",
        specialty: "Core Strength & Flexibility",
        bio: "Nami is a dedicated trainer specializing in core strength and flexibility. Her classes emphasize proper technique and effective workout strategies, ensuring clients build a strong foundation for overall fitness. With a keen eye for detail, she tailors her approach to meet individual needs.",
        image: "/nami.jpg",
    },
    {
        name: "Nico Robin",
        specialty: "Mind-Body Connection & Recovery",
        bio: "Robin is a wellness coach focused on enhancing the mind-body connection through yoga and recovery practices. She guides clients in developing mindfulness and resilience while promoting relaxation techniques to aid recovery. Her calming presence helps create a serene workout environment.",
        image: "/robin.jpg",
    },
    {
        name: "Sanji",
        specialty: "Nutritional Guidance & High-Intensity Training",
        bio: "Sanji is a passionate personal trainer who combines high-intensity training with nutritional guidance. His unique approach focuses on fueling the body for optimal performance. With a commitment to helping clients achieve their fitness goals, he offers personalized meal plans alongside intense workouts.",
        image: "/sanji.jpg",
    },
];

export default function TrainersProfiles() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">Meet Our Expert Trainers</h2>
                <p className="text-xl text-gray-600 text-center mb-12">Our certified trainers are here to help you achieve your fitness goals</p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {trainers.map((trainer, index) => (
                        <Card key={index} className="flex flex-col h-full">
                            <CardHeader>
                                <div className="relative w-full h-64 mb-4">
                                    <Image src={trainer.image} alt={trainer.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
                                </div>
                                <CardTitle>{trainer.name}</CardTitle>
                                <CardDescription>{trainer.specialty}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-gray-600">{trainer.bio}</p>
                            </CardContent>
                            {/* <CardFooter className="flex justify-center space-x-4">
                                <Button variant="ghost" size="icon" asChild>
                                    <a href={trainer.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                                        <Instagram className="h-5 w-5" />
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                </Button>
                                <Button variant="ghost" size="icon" asChild>
                                    <a href={trainer.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                                        <Twitter className="h-5 w-5" />
                                        <span className="sr-only">Twitter</span>
                                    </a>
                                </Button>
                                <Button variant="ghost" size="icon" asChild>
                                    <a href={trainer.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="h-5 w-5" />
                                        <span className="sr-only">LinkedIn</span>
                                    </a>
                                </Button>
                            </CardFooter> */}
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
