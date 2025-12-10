import { Button } from "@/components/ui/button";
import { useContactModal } from "@/context/ContactModalContext";

const PricingBanner = () => {
  const { openModal } = useContactModal();

  return (
    <section className='bg-[#f7f7fb] px-4 pb-8 pt-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-5xl'>
        <div className='rounded-[20px] bg-gradient-to-r from-[#a931f5] via-[#8c40f0] to-[#5a18e5] px-6 py-5 text-white shadow-[0_25px_65px_rgba(114,40,233,0.28)] sm:flex sm:items-center sm:justify-between sm:px-10'>
          <div className='space-y-1'>
            <div className='text-sm font-semibold uppercase tracking-[0.08em]'>
              Custom pricing for every brand
            </div>
            <p className='text-sm sm:text-base'>
              We don&apos;t show fixed packages. Tell us about your goals and
              we&apos;ll send a tailored quote that fits your stage and pace.
            </p>
          </div>
          <Button
            size='lg'
            className='mt-4 rounded-full bg-white px-6 text-sm font-semibold text-[#5a18e5] hover:bg-white/90 sm:mt-0'
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
