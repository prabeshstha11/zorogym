"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log("Form submitted:", formData);
        // Reset form after submission
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Have questions about our gym or membership options? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </div>
                </div>
                <div className="mx-auto w-full max-w-[550px] mt-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Name
                            </label>
                            <Input id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Email
                            </label>
                            <Input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Message
                            </label>
                            <Textarea id="message" name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} required />
                        </div>
                        <Button type="submit" className="w-full bg-green-600">
                            Send Message
                        </Button>
                    </form>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-muted-foreground">
                        Prefer to talk? Call us at{" "}
                        <a href="tel:+11234567890" className="font-semibold text-primary hover:underline">
                            +1 (123) 456-7890
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
