"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <Dumbbell className="h-8 w-8 text-green-600" />
                            <span className="ml-2 text-xl font-bold text-gray-800">zorogym</span>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <div className="flex space-x-4">
                            <NavLink href="/classes">Classes</NavLink>
                            <NavLink href="/trainers">Trainers</NavLink>
                            <NavLink href="/membership">Membership</NavLink>
                            <NavLink href="/contact">Contact</NavLink>
                        </div>
                        <div className="ml-6">
                            <Button className="bg-green-600 hover:bg-green-700 text-white">Join Now</Button>
                        </div>
                    </div>
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isMenuOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <MobileNavLink href="/classes">Classes</MobileNavLink>
                        <MobileNavLink href="/trainers">Trainers</MobileNavLink>
                        <MobileNavLink href="/membership">Membership</MobileNavLink>
                        <MobileNavLink href="/contact">Contact</MobileNavLink>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <Button className="ml-4 bg-green-600 hover:bg-green-700 text-white w-auto">Join Now</Button>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            {children}
        </Link>
    );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            {children}
        </Link>
    );
}
