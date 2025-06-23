"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import Image from "next/image";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [signUpComplete, setSignUpComplete] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      await signUp(email, password);
      setSignUpComplete(true);
    } catch (error: any) {
      setErrorMessage(error.message || "An error occurred during sign up");
    } finally {
      setIsLoading(false);
    }
  };

  if (signUpComplete) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background dark:bg-gray-900 p-4">
        <Card className="w-full max-w-md bg-card text-card-foreground dark:bg-gray-800 dark:text-white text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Check Your Email</CardTitle>
            <CardDescription className="text-muted-foreground">
              We have sent a verification link to{" "}
              <span className="font-semibold">{email}</span>.<br />
              Please check your inbox and click the link to verify your account.
              <br />
              Once verified, you can{" "}
              <a
                href="/login"
                className="text-primary dark:invert hover:underline">
                log in
              </a>
              .
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md bg-card text-card-foreground dark:bg-gray-800 dark:text-white">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <div className="flex h-12 w-12 items-center justify-center bg-transparent">
              <Image
                src="/logo.png"
                alt="AdminDo Logo"
                width={48}
                height={48}
              />
            </div>
          </div>
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign up for AdminDo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-foreground dark:text-gray-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-input text-foreground border-input dark:bg-gray-900 dark:text-white dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-foreground dark:text-gray-200">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="bg-input text-foreground border-input dark:bg-gray-900 dark:text-white dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="text-foreground dark:text-gray-200">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                className="bg-input text-foreground border-input dark:bg-gray-900 dark:text-white dark:border-gray-700"
              />
            </div>
            {errorMessage && (
              <p className="text-sm text-destructive">{errorMessage}</p>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Have an account?{" "}
            <a
              href="/login"
              className="text-primary dark:invert hover:underline">
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
