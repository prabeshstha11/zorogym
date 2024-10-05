"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Baltoromeo",
        role: "Motivational Speaker",
        image: "/baltoromeo.jpg",
        quote: "Training at this gym has transformed my confidence and strength. The supportive community and diverse classes keep me motivated every day!",
    },
    {
        name: "Trafalgar Law",
        role: "Fitness Strategist",
        image: "/trafalgar-law.jpg",
        quote: "This gym offers a strategic approach to fitness. The trainers are knowledgeable and help me maximize my potential in every workout.",
    },
    {
        name: "Portugas D. Ace",
        role: "Fire Safety Trainer",
        image: "/portugas-d-ace.jpg",
        quote: "I've never felt more energized and strong! The workouts are intense but rewarding, and the atmosphere is unbeatable. It's a fire that fuels my spirit!",
    },
    {
        name: "Coby",
        role: "Aspiring Martial Artist",
        image: "/coby.jpg",
        quote: "As someone who's just starting my fitness journey, Zoro's Gym feels like home. The trainers are patient and encourage growth at every level!",
    },
    {
        name: "Sugar",
        role: "Wellness Coach",
        image: "/sugar.jpg",
        quote: "The variety of classes here is amazing! From high-intensity workouts to calming yoga sessions, there's something for everyone, and I've loved every moment!",
    },
    {
        name: "Momonosuke",
        role: "Youth Fitness Advocate",
        image: "/momonosuke.jpg",
        quote: "Training at this gym has been an adventure! I've learned to push my limits and embrace challenges with the incgreenible support of the trainers and community.",
    },
];

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">What Our Members Say</h2>
                <div className="relative max-w-3xl mx-auto">
                    <Card className="bg-white shadow-lg">
                        <CardContent className="p-8">
                            <Quote className="h-8 w-8 text-gray-400 mb-4" />
                            <p className="text-xl text-gray-600 mb-6">{testimonials[currentTestimonial].quote}</p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-4">
                                    <Image src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} width={50} height={50} className="rounded-full" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                                    <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
                        <Button variant="outline" size="icon" className="rounded-full bg-white shadow-md" onClick={prevTestimonial}>
                            <ChevronLeft className="h-6 w-6" />
                            <span className="sr-only">Previous testimonial</span>
                        </Button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
                        <Button variant="outline" size="icon" className="rounded-full bg-white shadow-md" onClick={nextTestimonial}>
                            <ChevronRight className="h-6 w-6" />
                            <span className="sr-only">Next testimonial</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
