import logo from "@/assets/icons/logo.png";
import { navigationLinks } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/context/ContactModalContext";
import { Play } from "lucide-react";

const Header = () => {
  const { openModal } = useContactModal();
  return (
    <header className='sticky top-0 z-20 border-b border-black/5 bg-white/90 backdrop-blur-md'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-8'>
        <a
          className='inline-flex items-center'
          href='/'
          aria-label='Infi-D Media'
        >
          <img
            src={logo}
            alt='Infi-D Media'
            className='h-[52px] w-auto origin-left scale-[1.14] object-contain md:scale-[1.78]'
          />
        </a>

        <div className='flex items-center gap-4 md:gap-6'>
          <nav className='hidden md:block' aria-label='Primary'>
            <ul className='flex items-center gap-6 text-[15px] font-medium text-slate-600'>
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className='transition-all hover:-translate-y-0.5 hover:text-slate-800 focus-visible:-translate-y-0.5 focus-visible:text-slate-800'
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            size='lg'
            className='rounded-full bg-gradient-to-r from-[#A931F5] to-[#5A18E5] px-5 py-2 text-base font-semibold text-white shadow-[0_10px_30px_rgba(114,40,233,0.28)] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A931F5]'
            onClick={openModal}
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
