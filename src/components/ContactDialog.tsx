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

        <form className='mt-4 space-y-5'>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='space-y-2 text-left'>
              <Label htmlFor='dialog-name'>Name</Label>
              <Input
                id='dialog-name'
                name='name'
                placeholder='Your name'
                className='h-11'
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
            />
          </div>

          <div className='flex items-center justify-end gap-3'>
            <Button variant='ghost' type='button' onClick={closeModal}>
              Cancel
            </Button>
            <Button
              type='submit'
              className='rounded-full bg-gradient-to-r from-[#a931f5] to-[#5a18e5] px-6 text-base font-semibold text-white shadow-[0_8px_20px_rgba(114,40,233,0.28)] hover:brightness-105'
            >
              Send Message
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
