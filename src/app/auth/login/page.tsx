"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Users, Mail, Lock, ArrowRight, Eye, EyeOff, AlertCircle } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const isFormValid = formData.email.trim() !== "" && formData.password !== "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFormValid) {
            setError("Please fill in all fields.");
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
                setError("Invalid email or password. Please try again.");
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
                    <h1 className="heading-2 mb-2">Welcome Back</h1>
                    <p className="text-muted">
                        Sign in to continue your Design Thinking journey
                    </p>
                </div>

                {/* Login Form */}
                <div className="card p-8 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        {/* Error Message */}
                        {error && (
                            <div className="p-4 rounded-xl bg-[color-mix(in_srgb,var(--stage-test)_10%,transparent)] border border-[var(--stage-test)] flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-[var(--stage-test)] flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-[var(--stage-test)]">{error}</p>
                            </div>
                        )}

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
                            <div className="flex justify-between items-center mb-2">
                                <label htmlFor="password" className="block text-sm font-semibold text-[var(--foreground)]">
                                    Password
                                </label>
                                <Link
                                    href="/auth/forgot-password"
                                    className="text-sm text-[var(--primary-indigo)] hover:underline font-medium"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="input-group">
                                <Lock className="input-icon w-5 h-5" />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    placeholder="Enter your password"
                                    className="input pl-12 pr-12"
                                    autoComplete="current-password"
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
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[var(--border)]" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-muted font-medium">or continue with</span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className="btn py-3 bg-white border-2 border-[var(--border)] hover:border-[var(--border-strong)] hover:bg-[var(--background-alt)] rounded-xl flex items-center justify-center gap-2.5 font-medium transition-all duration-200"
                            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Google
                        </button>
                        <button
                            type="button"
                            className="btn py-3 bg-[#24292e] hover:bg-[#1a1e22] text-white border-2 border-[#24292e] rounded-xl flex items-center justify-center gap-2.5 font-medium transition-all duration-200"
                            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </button>
                    </div>
                </div>

                {/* Sign Up Link */}
                <p className="text-center mt-8 text-muted">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/signup" className="text-[var(--primary-indigo)] font-semibold hover:underline">
                        Create one for free
                    </Link>
                </p>

                {/* Demo Credentials */}
                <div className="mt-6 p-4 rounded-xl bg-[var(--background-alt)] border border-[var(--border)]">
                    <p className="text-sm text-center text-muted">
                        <span className="font-semibold text-[var(--foreground)]">Demo:</span> Use any email and password to sign in
                    </p>
                </div>
            </div>
        </div>
    );
}
