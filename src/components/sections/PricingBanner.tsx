import { Button } from "@/components/ui/button";
import { useContactModal } from "@/context/ContactModalContext";
import { BadgePercent } from "lucide-react";

const PricingBanner = () => {
  const { openModal } = useContactModal();

  return (
    <section className='bg-[#f7f7fb] px-4 pb-10 pt-6 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-5xl'>
        <div className='relative overflow-hidden rounded-[24px] bg-gradient-to-r from-[#a931f5] via-[#8c40f0] to-[#5a18e5] px-6 py-6 text-white shadow-[0_28px_70px_rgba(114,40,233,0.3)] sm:flex sm:items-center sm:justify-between sm:px-10'>
          <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(400px_at_20%_20%,rgba(255,255,255,0.16),transparent_50%),radial-gradient(320px_at_80%_30%,rgba(255,255,255,0.12),transparent_55%)]' />
          <div className='relative flex items-start gap-4'>
            <span className='mt-1 flex size-12 items-center justify-center rounded-2xl bg-white/20 text-white'>
              <BadgePercent className='size-6' />
            </span>
            <div className='space-y-1'>
              <div className='inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/90'>
                Custom plans
              </div>
              <div className='text-lg font-bold leading-tight'>
                Pricing that flexes with your stage.
              </div>
              <p className='text-sm sm:text-base text-white/90'>
                Tell us your goals and we&apos;ll tailor production, edits, and delivery to your
                pace. No rigid packages—just what moves the needle.
              </p>
            </div>
          </div>
          <Button
            size='lg'
            className='relative mt-5 rounded-full bg-white px-6 text-sm font-semibold text-[#5a18e5] shadow-[0_12px_30px_rgba(255,255,255,0.25)] transition hover:-translate-y-[2px] hover:bg-white/90 sm:mt-0'
            onClick={openModal}
          >
            Get custom quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;
