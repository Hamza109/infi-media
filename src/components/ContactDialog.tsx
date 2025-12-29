import { useState } from "react";
import emailjs from "@emailjs/browser";

import { useContactModal } from "@/context/ContactModalContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactDialog = () => {
  const { open, closeModal } = useContactModal();
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
        closeModal();
      }, 2000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => (v ? undefined : closeModal())}>
      <DialogContent className='max-w-2xl'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold text-[#1f1f37]'>
            Let&apos;s build something memorable.
          </DialogTitle>
          <DialogDescription className='text-sm text-[#5b5f73]'>
            Tell us about your goals and we&apos;ll get back with a tailored
            plan and timeline.
          </DialogDescription>
        </DialogHeader>

        <form className='mt-4 space-y-5' onSubmit={handleSubmit}>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='space-y-2 text-left'>
              <Label htmlFor='dialog-name'>Name</Label>
              <Input
                id='dialog-name'
                name='name'
                placeholder='Your name'
                className='h-11'
                required
              />
            </div>
            <div className='space-y-2 text-left'>
              <Label htmlFor='dialog-email'>Email</Label>
              <Input
                id='dialog-email'
                name='email'
                type='email'
                placeholder='you@example.com'
                className='h-11'
                required
              />
            </div>
          </div>

          <div className='space-y-2 text-left'>
            <Label htmlFor='dialog-details'>Project details</Label>
            <textarea
              id='dialog-details'
              name='details'
              placeholder='Tell us about what you want to create...'
              className='min-h-[120px] w-full rounded-xl border border-[#e6e3f3] bg-white px-4 py-3 text-sm text-[#35384a] shadow-inner shadow-[#e8e3f8]/40 outline-none transition focus:border-[#a931f5] focus:shadow-[0_0_0_3px_rgba(169,49,245,0.18)]'
              required
            />
          </div>

          <div className='flex items-center justify-end gap-3'>
            <Button variant='ghost' type='button' onClick={closeModal}>
              Cancel
            </Button>
            <Button
              type='submit'
              disabled={status === "submitting"}
              className='rounded-full bg-gradient-to-r from-[#a931f5] to-[#5a18e5] px-6 text-base font-semibold text-white shadow-[0_8px_20px_rgba(114,40,233,0.28)] hover:brightness-105 disabled:opacity-60'
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>
          </div>

          {status === "success" && (
            <p className='text-sm font-medium text-green-700'>
              Thanks! We got your request and will reply soon.
            </p>
          )}
          {status === "error" && (
            <p className='text-sm font-medium text-red-700'>
              {errorMessage ||
                "Failed to send message. Please try again later."}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
