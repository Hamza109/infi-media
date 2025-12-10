import type { ReactNode } from "react";

import ContactDialog from "@/components/ContactDialog";
import { ContactModalProvider } from "@/context/ContactModalContext";

import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ContactModalProvider>
      <div className='min-h-screen bg-[radial-gradient(1200px_at_120px_20px,#f5eafd_0%,#ffffff_40%)] text-slate-800'>
        <Header />
        <main className='flex min-h-[calc(100vh-88px)] flex-col'>
          {children}
        </main>
        <ContactDialog />
      </div>
    </ContactModalProvider>
  );
};

export default Layout;
