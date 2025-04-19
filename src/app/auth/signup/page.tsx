"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const validateForm = () => {
        const errors: { [key: string]: string } = {};
        let isValid = true;

        if (!name.trim()) {
            errors.name = "Name is required";
            isValid = false;
        }

        if (!validateEmail(email)) {
            errors.email = "Please enter a valid email address";
            isValid = false;
        }

        if (!mobile.trim()) {
            errors.mobile = "Mobile number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(mobile.trim())) {
            errors.mobile = "Please enter a valid 10-digit mobile number";
            isValid = false;
        }

        if (password.length < 6) {
            errors.password = "Password must be at least 6 characters";
            isValid = false;
        }

        if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setFormErrors({});

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // For now, just log the form data
            console.log({
                name,
                email,
                mobile,
                password,
            });

            // Uncomment this when ready to connect to backend
            /*
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    mobile,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }
            */

            // For now just redirect
            router.push("/auth/signin?registered=true");
        } catch (error: any) {
            setError(error.message || "An error occurred during registration");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            {/* Navigation with Logo */}
            <div className="absolute top-0 left-0 p-8">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo.svg"
                        alt="SnipStash Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <span className="text-2xl font-bold text-blue-600">
                        SnipStash
                    </span>
                </Link>
            </div>

            {/* Main content */}
            <div className="sm:mx-auto sm:w-full sm:max-w-md mt-16">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Create your account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {error && (
                        <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <Input
                            label="Full Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoComplete="name"
                            error={formErrors.name}
                            placeholder="Enter your full name"
                        />

                        <Input
                            label="Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                            error={formErrors.email}
                            placeholder="you@example.com"
                        />

                        <Input
                            label="Mobile Number"
                            type="tel"
                            value={mobile}
                            onChange={(e) =>
                                setMobile(
                                    e.target.value
                                        .replace(/\D/g, "")
                                        .slice(0, 10)
                                )
                            }
                            required
                            autoComplete="tel"
                            error={formErrors.mobile}
                            placeholder="10-digit mobile number"
                        />

                        <Input
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                            error={formErrors.password}
                            showPasswordToggle={true}
                            placeholder="Create a strong password"
                        />

                        <Input
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                            error={formErrors.confirmPassword}
                            showPasswordToggle={true}
                            placeholder="Confirm your password"
                        />

                        <div className="pt-2">
                            <Button
                                type="submit"
                                fullWidth
                                disabled={isLoading}
                            >
                                {isLoading ? "Creating account..." : "Sign up"}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Already have an account?
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <Link
                                href="/auth/signin"
                                className="text-blue-600 hover:text-blue-500 font-medium"
                            >
                                Sign in here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
