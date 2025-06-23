"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import api from "@/lib/axios";

// Form validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateField = (name: keyof ContactFormData, value: string) => {
    try {
      contactFormSchema.shape[name].parse(value);
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.errors[0]?.message || "Invalid input";
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
      }
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name in formData) {
      setFormData((prev) => ({ ...prev, [name]: value }));
      validateField(name as keyof ContactFormData, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
      validationResult.error.errors.forEach((error) => {
        const path = error.path[0] as keyof ContactFormData;
        newErrors[path] = error.message;
      });
      setErrors(newErrors);
      toast({
        title: "Validation Error",
        description: "Please check your input and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.post("/contact", formData);

      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2.5">
            <Label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className={`h-12 px-4 rounded-lg border-2 transition-colors duration-200 
                ${
                  errors.name
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 dark:border-gray-700 focus:border-violet-500 focus:ring-violet-500"
                } 
                bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                placeholder:text-gray-400 dark:placeholder:text-gray-500`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p
                id="name-error"
                className="text-sm text-red-500 mt-1.5 font-medium">
                {errors.name}
              </p>
            )}
          </div>
          <div className="space-y-2.5">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={`h-12 px-4 rounded-lg border-2 transition-colors duration-200 
                ${
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 dark:border-gray-700 focus:border-violet-500 focus:ring-violet-500"
                } 
                bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                placeholder:text-gray-400 dark:placeholder:text-gray-500`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="text-sm text-red-500 mt-1.5 font-medium">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2.5">
          <Label
            htmlFor="subject"
            className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            placeholder="How can we help you?"
            value={formData.subject}
            onChange={handleChange}
            required
            className={`h-12 px-4 rounded-lg border-2 transition-colors duration-200 
              ${
                errors.subject
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-200 dark:border-gray-700 focus:border-violet-500 focus:ring-violet-500"
              } 
              bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
              placeholder:text-gray-400 dark:placeholder:text-gray-500`}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <p
              id="subject-error"
              className="text-sm text-red-500 mt-1.5 font-medium">
              {errors.subject}
            </p>
          )}
        </div>

        <div className="space-y-2.5">
          <Label
            htmlFor="message"
            className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            className={`min-h-[180px] px-4 py-3 rounded-lg border-2 transition-colors duration-200 
              ${
                errors.message
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-200 dark:border-gray-700 focus:border-violet-500 focus:ring-violet-500"
              } 
              bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              resize-none`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p
              id="message-error"
              className="text-sm text-red-500 mt-1.5 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="h-12 px-8 rounded-lg bg-violet-600 hover:bg-violet-700 
              text-white font-medium transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
              w-full md:w-auto shadow-lg hover:shadow-xl
              flex items-center justify-center gap-2"
            disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
