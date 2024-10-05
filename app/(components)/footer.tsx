import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold">zorogym</h3>
                        <p className="text-sm text-muted-foreground">Empowering your fitness journey since 2010</p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/classes" className="text-sm text-muted-foreground hover:text-primary">
                                    Classes
                                </Link>
                            </li>
                            <li>
                                <Link href="/membership" className="text-sm text-muted-foreground hover:text-primary">
                                    Membership
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <p className="text-sm text-muted-foreground">123 Crytale, Grandline, GT 12345</p>
                        <p className="text-sm text-muted-foreground">Phone: (123) 456-7890</p>
                        <p className="text-sm text-muted-foreground">Email: zoro@strawhat.op</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-muted-foreground">© {currentYear} zorogym. All rights reserved.</p>
                    </div>
                    <div className="mt-4 text-center">
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary mr-4">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
