import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const details = formData.get("details") as string;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage(
        "Email service configuration is missing. Please contact support."
      );
      return;
    }

    try {
      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, {
        from_name: name,
        from_email: email,
        message: details,
      });

      setStatus("success");
      form.reset();
      window.setTimeout(() => {
        setStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id='contact'
      className='bg-[#f7f7fb] px-4 py-16 sm:px-6 lg:px-8'
      aria-labelledby='contact-title'
    >
      <div className='mx-auto flex max-w-5xl flex-col gap-8'>
        <div className='rounded-2xl border border-[#e8e6f3] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(113,63,191,0.08)] sm:px-10'>
          <div className='space-y-2 text-center'>
            <h2
              id='contact-title'
              className='text-2xl font-semibold text-[#1f1f37] sm:text-2xl'
            >
              Let&apos;s build something memorable.
            </h2>
            <p className='text-base  leading-6 text-[#5b5f73] sm:text-base sm:leading-7'>
              Share a bit about your brand, your goals, and the type of content
              you want to create. We&apos;ll get <br /> back with a tailored
              plan and timeline.
            </p>
          </div>

          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='text-left space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  placeholder='Your name'
                  className='h-12'
                  required
                />
              </div>
              <div className='text-left space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='you@example.com'
                  className='h-12'
                  required
                />
              </div>
            </div>

            <div className='text-left space-y-2'>
              <Label htmlFor='details'>Project details</Label>
              <textarea
                id='details'
                name='details'
                placeholder='Tell us about what you want to create...'
                className='min-h-[140px] w-full rounded-xl border border-[#e6e3f3] bg-white px-4 py-3 text-sm text-[#35384a] shadow-inner shadow-[#e8e3f8]/40 outline-none transition focus:border-[#a931f5] focus:shadow-[0_0_0_3px_rgba(169,49,245,0.18)]'
                required
              />
            </div>

            <Button
              type='submit'
              size='lg'
              disabled={status === "submitting"}
              className='h-12 rounded-full bg-gradient-to-r from-[#a931f5] to-[#5a18e5] px-6 text-base font-semibold text-white shadow-[0_10px_25px_rgba(114,40,233,0.28)] hover:brightness-105 disabled:opacity-60'
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p className='text-sm font-medium text-green-700 text-center'>
                Thanks! We got your request and will reply soon.
              </p>
            )}
            {status === "error" && (
              <p className='text-sm font-medium text-red-700 text-center'>
                {errorMessage ||
                  "Failed to send message. Please try again later."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
