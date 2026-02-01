"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Users, Mail, Lock, ArrowRight, Eye, EyeOff, AlertCircle, User, CheckCircle, Circle } from "lucide-react";

export default function SignupPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "STUDENT" as "STUDENT" | "MENTOR",
    });

    const passwordRequirements = [
        { label: "At least 8 characters", met: formData.password.length >= 8 },
        { label: "Contains a number", met: /\d/.test(formData.password) },
        { label: "Contains uppercase letter", met: /[A-Z]/.test(formData.password) },
    ];

    const allRequirementsMet = passwordRequirements.every((req) => req.met);
    const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== "";

    const isFormValid =
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        allRequirementsMet &&
        passwordsMatch;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFormValid) {
            if (!formData.name.trim()) {
                setError("Please enter your full name.");
            } else if (!formData.email.trim()) {
                setError("Please enter your email address.");
            } else if (!allRequirementsMet) {
                setError("Please meet all password requirements.");
            } else if (!passwordsMatch) {
                setError("Passwords do not match.");
            }
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const result = await signIn("credentials", {
                email: formData.email,
                password: formData.password,
                redirect: false,
            });

            if (result?.error) {
                setError("Failed to create account. Please try again.");
            } else {
                router.push("/dashboard");
                router.refresh();
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-indigo)] to-[var(--accent-coral)] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Users className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="heading-2 mb-2">Join the Dojo</h1>
                    <p className="text-muted">
                        Start your Design Thinking journey today
                    </p>
                </div>

                {/* Signup Form */}
                <div className="card p-8 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                        {/* Error Message */}
                        {error && (
                            <div className="p-4 rounded-xl bg-[color-mix(in_srgb,var(--stage-test)_10%,transparent)] border border-[var(--stage-test)] flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-[var(--stage-test)] flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-[var(--stage-test)]">{error}</p>
                            </div>
                        )}

                        {/* Role Selection */}
                        <div>
                            <label className="block text-sm font-semibold mb-3 text-[var(--foreground)]">
                                I want to join as
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, role: "STUDENT" })}
                                    className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${formData.role === "STUDENT"
                                            ? "border-[var(--primary-indigo)] bg-[color-mix(in_srgb,var(--primary-indigo)_8%,transparent)] shadow-md"
                                            : "border-[var(--border)] hover:border-[var(--border-strong)] hover:bg-[var(--background-alt)]"
                                        }`}
                                >
                                    <User className={`w-7 h-7 mx-auto mb-2 transition-colors ${formData.role === "STUDENT" ? "text-[var(--primary-indigo)]" : "text-muted"
                                        }`} />
                                    <div className={`font-semibold transition-colors ${formData.role === "STUDENT" ? "text-[var(--primary-indigo)]" : "text-[var(--foreground)]"
                                        }`}>Student</div>
                                    <div className="text-xs text-muted mt-1">Learn & Build</div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, role: "MENTOR" })}
                                    className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${formData.role === "MENTOR"
                                            ? "border-[var(--accent-coral)] bg-[color-mix(in_srgb,var(--accent-coral)_8%,transparent)] shadow-md"
                                            : "border-[var(--border)] hover:border-[var(--border-strong)] hover:bg-[var(--background-alt)]"
                                        }`}
                                >
                                    <Users className={`w-7 h-7 mx-auto mb-2 transition-colors ${formData.role === "MENTOR" ? "text-[var(--accent-coral)]" : "text-muted"
                                        }`} />
                                    <div className={`font-semibold transition-colors ${formData.role === "MENTOR" ? "text-[var(--accent-coral)]" : "text-[var(--foreground)]"
                                        }`}>Mentor</div>
                                    <div className="text-xs text-muted mt-1">Guide & Teach</div>
                                </button>
                            </div>
                        </div>

                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                                Full Name
                            </label>
                            <div className="input-group">
                                <User className="input-icon w-5 h-5" />
                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    className="input pl-12"
                                    autoComplete="name"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                                Email Address
                            </label>
                            <div className="input-group">
                                <Mail className="input-icon w-5 h-5" />
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="you@example.com"
                                    className="input pl-12"
                                    autoComplete="email"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                                Password
                            </label>
                            <div className="input-group">
                                <Lock className="input-icon w-5 h-5" />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    placeholder="Create a strong password"
                                    className="input pl-12 pr-12"
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="input-toggle"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>

                            {/* Password Requirements */}
                            <div className={`mt-3 space-y-2 transition-all duration-300 ${formData.password ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                                }`}>
                                {passwordRequirements.map((req) => (
                                    <div key={req.label} className="flex items-center gap-2.5 text-sm">
                                        {req.met ? (
                                            <CheckCircle className="w-4 h-4 text-[var(--stage-ideate)]" />
                                        ) : (
                                            <Circle className="w-4 h-4 text-muted" />
                                        )}
                                        <span className={`transition-colors ${req.met ? "text-[var(--stage-ideate)] font-medium" : "text-muted"
                                            }`}>
                                            {req.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                                Confirm Password
                            </label>
                            <div className="input-group">
                                <Lock className="input-icon w-5 h-5" />
                                <input
                                    id="confirmPassword"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    placeholder="Confirm your password"
                                    className="input pl-12"
                                    autoComplete="new-password"
                                />
                            </div>
                            <div className={`mt-2 flex items-center gap-2.5 text-sm transition-all duration-300 ${formData.confirmPassword ? "opacity-100" : "opacity-0"
                                }`}>
                                {passwordsMatch ? (
                                    <CheckCircle className="w-4 h-4 text-[var(--stage-ideate)]" />
                                ) : (
                                    <Circle className="w-4 h-4 text-muted" />
                                )}
                                <span className={`transition-colors ${passwordsMatch ? "text-[var(--stage-ideate)] font-medium" : "text-muted"
                                    }`}>
                                    {passwordsMatch ? "Passwords match" : "Passwords don't match"}
                                </span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`btn w-full py-4 text-base font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${isFormValid
                                    ? "btn-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                    : "bg-[var(--border)] text-muted cursor-not-allowed"
                                }`}
                        >
                            {isLoading ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Creating account...
                                </>
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>

                        {/* Terms */}
                        <p className="text-xs text-muted text-center leading-relaxed">
                            By creating an account, you agree to our{" "}
                            <Link href="/terms" className="text-[var(--primary-indigo)] hover:underline font-medium">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-[var(--primary-indigo)] hover:underline font-medium">
                                Privacy Policy
                            </Link>
                        </p>
                    </form>
                </div>

                {/* Sign In Link */}
                <p className="text-center mt-8 text-muted">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="text-[var(--primary-indigo)] font-semibold hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
