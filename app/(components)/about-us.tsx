import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About zorogym</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            At zorogym, we're more than just a gym. We're a community dedicated to helping you achieve your fitness goals and lead a healthier lifestyle. With state-of-the-art
                            equipment, expert trainers, and a supportive atmosphere, we provide everything you need to transform your body and mind.
                        </p>
                        <div className="mt-8 space-y-4">
                            {[
                                "24/7 access to our facilities",
                                "Wide range of group fitness classes",
                                "Personalized training programs",
                                "Nutrition guidance and support",
                                "Clean and safe environment",
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                                    <p className="text-gray-700">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:w-1/2">
                        <div className="relative aspect-w-16 aspect-h-9 lg:aspect-none">
                            <Image src="/inside.jpg" alt="Inside our gym" width={600} height={400} className="rounded-lg shadow-lg object-cover object-center" />
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <div className="relative aspect-w-3 aspect-h-2">
                                <Image src="/group.jpg" alt="Group fitness class" width={300} height={200} className="rounded-lg shadow-md object-cover object-center" />
                            </div>
                            <div className="relative aspect-w-3 aspect-h-2">
                                <Image src="/personal.jpg" alt="Personal training session" width={300} height={200} className="rounded-lg shadow-md object-cover object-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
