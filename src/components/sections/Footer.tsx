const Footer = () => {
  return (
    <footer className='bg-[#7f22fe] text-white'>
      <div className='mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 sm:px-8 lg:flex-row lg:items-start lg:justify-between'>
        <div className='max-w-md space-y-4'>
          <div className='text-lg font-bold'>INFI-D MEDIA</div>
          <p className='text-sm text-white'>
            Creative storytelling, campaigns, and product visuals crafted to
            help brands stand out with style and clarity.
          </p>
        </div>

        <div className='grid gap-10 sm:grid-cols-2'>
          <div>
            <h3 className='text-sm font-semibold uppercase tracking-[0.12em] text-white'>
              Useful Links
            </h3>
            <ul className='mt-4 space-y-2 text-sm text-white'>
              <li>
                <a className='transition hover:text-white/70' href='#services'>
                  Services
                </a>
              </li>
              <li>
                <a
                  className='transition hover:text-white/70'
                  href='#featured-work'
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  className='transition hover:text-white/70'
                  href='#testimonials'
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a className='transition hover:text-white/70' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-sm font-semibold uppercase tracking-[0.12em] text-white'>
              Other Resources
            </h3>
            <ul className='mt-4 space-y-2 text-sm text-white'>
              <li>
                <a className='transition hover:text-white/70' href='/terms'>
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a className='transition hover:text-white/70' href='/privacy'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className='transition hover:text-white/70' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-6 text-xs text-white sm:flex-row sm:justify-center sm:px-8'>
          <span>© 2025 INFI-D MEDIA — All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
