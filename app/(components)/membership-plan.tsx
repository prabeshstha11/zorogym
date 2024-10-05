import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Basic",
        price: "$29.99",
        duration: "per month",
        description: "Perfect for beginners",
        features: ["Access to gym equipment", "Locker room access", "1 group class per week", "Fitness assessment"],
    },
    {
        name: "Pro",
        price: "$59.99",
        duration: "per month",
        description: "Ideal for regular gym-goers",
        features: ["All Basic features", "Unlimited group classes", "1 personal training session/month", "Nutrition consultation", "Access to sauna"],
    },
    {
        name: "Elite",
        price: "$99.99",
        duration: "per month",
        description: "For the serious fitness enthusiast",
        features: [
            "All Pro features",
            "4 personal training sessions/month",
            "Monthly body composition analysis",
            "Priority class booking",
            "Guest passes (2 per month)",
            "Access to all gym locations",
        ],
    },
];

export default function MembershipPlans() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">Membership Plans</h2>
                <p className="text-xl text-gray-600 text-center mb-12">Choose the perfect plan for your fitness journey</p>
                <div className="grid gap-8 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <Card key={index} className={`flex flex-col ${index === 1 ? "border-primary shadow-lg" : ""}`}>
                            <CardHeader>
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                                <div className="text-gray-500 mb-6">{plan.duration}</div>
                                <ul className="space-y-2">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <Check className="h-5 w-5 text-green-500 mr-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className={`w-full hover:bg-green-500 ${index === 1 ? "bg-green-600" : ""}`} variant={index === 1 ? "default" : "outline"}>
                                    Choose Plan
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
