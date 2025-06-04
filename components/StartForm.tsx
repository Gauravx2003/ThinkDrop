"use client";

import React, { useState, useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send, Lightbulb, Zap, Image as ImageIcon, Tag, FileText } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createPitch } from "@/lib/action/pitch";

const StartForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    console.log("Enter Function handler");
    console.log(formData.get("category"));

    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        Category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formSchema.parseAsync(formValues);

      console.log("Form data is:", formValues);

      const result = await createPitch(prevState, formData, pitch);

      if (result.status == "SUCCESS") {
        toast("SUCCESS");
        router.push(`/startup/${result._id}`);
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErorrs = error.flatten().fieldErrors;
        setErrors(fieldErorrs as unknown as Record<string, string>);
        toast("Please Check Your Inputs Again");
        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      toast("Unexpected Error");
      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Lightbulb className="size-8 text-yellow-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                CREATE YOUR
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                STARTUP IDEA
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/80 font-medium max-w-3xl mx-auto leading-relaxed">
            🚀 Share your vision • 💡 Inspire others • 🌟 Make it happen
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-full">
                  <Zap className="size-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Pitch Your Idea</h2>
              </div>
              <p className="text-white/90 text-lg">Fill in the details below to share your startup with the world</p>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <form action={formAction} className="space-y-8">
                {/* Title Field */}
                <div className="group">
                  <label htmlFor="title" className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                    <FileText className="size-5 text-purple-600" />
                    Title
                  </label>
                  <div className="relative">
                    <Input
                      id="title"
                      name="title"
                      className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 pl-4 pr-4 placeholder:text-gray-400 bg-gray-50 focus:bg-white group-hover:border-purple-300"
                      required
                      placeholder="Enter your startup title..."
                    />
                  </div>
                  {errors.title && (
                    <p className="mt-2 text-red-500 text-sm font-medium flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {errors.title}
                    </p>
                  )}
                </div>

                {/* Description Field */}
                <div className="group">
                  <label htmlFor="description" className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                    <FileText className="size-5 text-purple-600" />
                    Description
                  </label>
                  <div className="relative">
                    <Textarea
                      id="description"
                      name="description"
                      className="min-h-[120px] text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 p-4 placeholder:text-gray-400 bg-gray-50 focus:bg-white group-hover:border-purple-300 resize-none"
                      required
                      placeholder="Describe your startup in a few sentences..."
                    />
                  </div>
                  {errors.description && (
                    <p className="mt-2 text-red-500 text-sm font-medium flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Category Field */}
                <div className="group">
                  <label htmlFor="category" className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                    <Tag className="size-5 text-purple-600" />
                    Category
                  </label>
                  <div className="relative">
                    <Input
                      id="category"
                      name="category"
                      className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 pl-4 pr-4 placeholder:text-gray-400 bg-gray-50 focus:bg-white group-hover:border-purple-300"
                      required
                      placeholder="e.g., Tech, Health, Education, Finance..."
                    />
                  </div>
                  {errors.category && (
                    <p className="mt-2 text-red-500 text-sm font-medium flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {errors.category}
                    </p>
                  )}
                </div>

                {/* Image URL Field */}
                <div className="group">
                  <label htmlFor="link" className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                    <ImageIcon className="size-5 text-purple-600" />
                    Image URL
                  </label>
                  <div className="relative">
                    <Input
                      id="link"
                      name="link"
                      className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 pl-4 pr-4 placeholder:text-gray-400 bg-gray-50 focus:bg-white group-hover:border-purple-300"
                      required
                      placeholder="https://example.com/your-image.jpg"
                    />
                  </div>
                  {errors.link && (
                    <p className="mt-2 text-red-500 text-sm font-medium flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {errors.link}
                    </p>
                  )}
                </div>

                {/* Hidden pitch input */}
                <input type="hidden" name="pitch" value={pitch} />

                {/* Pitch Editor */}
                <div className="group">
                  <label htmlFor="pitch" className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                    <Lightbulb className="size-5 text-purple-600" />
                    Detailed Pitch
                  </label>
                  <div className="border-2 border-gray-200 rounded-xl overflow-hidden group-hover:border-purple-300 transition-all duration-300 bg-gray-50 focus-within:bg-white focus-within:border-purple-500">
                    <MDEditor
                      value={pitch}
                      onChange={(value) => setPitch(value as string)}
                      preview="edit"
                      height={300}
                      style={{ 
                        borderRadius: 0, 
                        border: 'none',
                        backgroundColor: 'transparent'
                      }}
                      textareaProps={{
                        placeholder: "Write a detailed pitch about your startup idea. What problem does it solve? What makes it unique? How will it make an impact?",
                        style: {
                          fontSize: '16px',
                          lineHeight: '1.5',
                          padding: '16px'
                        }
                      }}
                      previewOptions={{
                        disallowedElements: ["style"],
                      }}
                    />
                  </div>
                  {errors.pitch && (
                    <p className="mt-2 text-red-500 text-sm font-medium flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {errors.pitch}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full h-16 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <div className="flex items-center justify-center gap-3">
                      {isPending ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Submitting Your Pitch...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Your Pitch</span>
                          <Send className="size-6 group-hover:translate-x-1 transition-transform duration-300" />
                          <Zap className="size-4" />
                        </>
                      )}
                    </div>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartForm;