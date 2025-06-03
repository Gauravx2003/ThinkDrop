"use client";

import React, { useState, useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
//import { handleFormSubmit } from "@/lib/action/pitch";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createPitch } from "@/lib/action/pitch";


const StartForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
  //const { toast } = useToast();
  const router = useRouter();

  

   const handleFormSubmit = async (prevState: any, formData: FormData) => {
    
    console.log("Enter Fucntion handler");
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

  const [state, formAction, isPending] = useActionState(handleFormSubmit,
    {error: '', status: 'INITIAL'}
  );  

  return (
    
    <form  action={formAction} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input placeholder:text-black-300 "
          required
          placeholder="Startup Title"
        />

        {errors.title && <p className="startup-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea placeholder:text-black-300"
          required
          placeholder="Startup Description"
        />

        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup Category (Tech, Health, Education...)"
        />

        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        />

        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>

      {/* hidden input to capture pitch */}
  <input type="hidden" name="pitch" value={pitch} />

      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>

        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          //id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {errors.pitch && <p className="startup-form_error">{errors.pitch} Hello</p>}
      </div>

      <Button
        type="submit"
        className="startup-form_btn text-white"
        //disabled={isPending}
      >
        {/* {isPending ? "Submitting..." : "Submit Your Pitch"} */}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default StartForm;