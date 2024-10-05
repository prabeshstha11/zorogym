"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const classSchedule = [
    {
        day: "Monday",
        classes: [
            { name: "Yoga Flow", time: "07:00 AM", duration: "60 min", instructor: "Emma" },
            { name: "HIIT", time: "12:00 PM", duration: "45 min", instructor: "John" },
            { name: "Spin Class", time: "06:00 PM", duration: "45 min", instructor: "Sarah" },
        ],
    },
    {
        day: "Tuesday",
        classes: [
            { name: "Strength Training", time: "08:00 AM", duration: "60 min", instructor: "Mike" },
            { name: "Pilates", time: "01:00 PM", duration: "45 min", instructor: "Lisa" },
            { name: "Zumba", time: "07:00 PM", duration: "60 min", instructor: "Carlos" },
        ],
    },
    {
        day: "Wednesday",
        classes: [
            { name: "CrossFit", time: "06:30 AM", duration: "60 min", instructor: "Alex" },
            { name: "Yoga Flow", time: "12:00 PM", duration: "60 min", instructor: "Emma" },
            { name: "Boxing", time: "06:30 PM", duration: "45 min", instructor: "Tony" },
        ],
    },
    {
        day: "Thursday",
        classes: [
            { name: "HIIT", time: "07:00 AM", duration: "45 min", instructor: "John" },
            { name: "Pilates", time: "01:00 PM", duration: "45 min", instructor: "Lisa" },
            { name: "Spin Class", time: "06:00 PM", duration: "45 min", instructor: "Sarah" },
        ],
    },
    {
        day: "Friday",
        classes: [
            { name: "Strength Training", time: "08:00 AM", duration: "60 min", instructor: "Mike" },
            { name: "Yoga Flow", time: "12:00 PM", duration: "60 min", instructor: "Emma" },
            { name: "Zumba", time: "07:00 PM", duration: "60 min", instructor: "Carlos" },
        ],
    },
    {
        day: "Saturday",
        classes: [
            { name: "CrossFit", time: "09:00 AM", duration: "60 min", instructor: "Alex" },
            { name: "Boxing", time: "11:00 AM", duration: "45 min", instructor: "Tony" },
            { name: "Yoga Flow", time: "04:00 PM", duration: "60 min", instructor: "Emma" },
        ],
    },
    {
        day: "Sunday",
        classes: [
            { name: "Spin Class", time: "10:00 AM", duration: "45 min", instructor: "Sarah" },
            { name: "Pilates", time: "12:00 PM", duration: "45 min", instructor: "Lisa" },
            { name: "HIIT", time: "04:00 PM", duration: "45 min", instructor: "John" },
        ],
    },
];

export default function ClassSchedule() {
    const [selectedDay, setSelectedDay] = useState("Monday");

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">Class Schedule</h2>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {classSchedule.map((day) => (
                        <Button key={day.day} onClick={() => setSelectedDay(day.day)} variant={selectedDay === day.day ? "default" : "outline"} className="mb-2">
                            {day.day}
                        </Button>
                    ))}
                </div>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <ul className="divide-y divide-gray-200">
                        {classSchedule
                            .find((day) => day.day === selectedDay)
                            ?.classes.map((classItem, index) => (
                                <li key={index} className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <Calendar className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg font-medium text-gray-900">{classItem.name}</h3>
                                                <p className="text-sm text-gray-500">Instructor: {classItem.instructor}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-5 w-5 text-gray-400 mr-2" aria-hidden="true" />
                                            <div className="text-sm text-gray-900">{classItem.time}</div>
                                            <div className="ml-2 text-sm text-gray-500">({classItem.duration})</div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="mt-8 text-center">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                        Book a Class
                    </Button>
                </div>
            </div>
        </section>
    );
}
