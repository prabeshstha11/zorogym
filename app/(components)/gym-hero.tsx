import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell, Users, Calendar } from "lucide-react";

export default function GymHero() {
    return (
        <section className="relative bg-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image src="/background.jpg" alt="Gym background" width={1920} height={1080} className="w-full h-full object-cover object-center" priority />
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
                <div className="max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">Transform Your Body, Transform Your Life</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl mb-8">
                        Join zorogym and start your fitness journey today. Expert trainers, state-of-the-art equipment, and a supportive community await you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                            Start Free Trial
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-gray-900"
                        >
                            View Membership Plans
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="flex items-center">
                            <Dumbbell className="h-8 w-8 mr-3 text-green-500" />
                            <span className="text-lg">Modern Equipment</span>
                        </div>
                        <div className="flex items-center">
                            <Users className="h-8 w-8 mr-3 text-green-500" />
                            <span className="text-lg">Expert Trainers</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="h-8 w-8 mr-3 text-green-500" />
                            <span className="text-lg">Flexible Classes</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 hidden lg:block">
                <Image src="/placeholder.svg?height=400&width=400" alt="Fitness enthusiast" width={400} height={400} className="opacity-70" />
            </div>
        </section>
    );
}
