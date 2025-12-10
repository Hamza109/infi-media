import FeaturedWork from "@/components/featured/FeaturedWork";
import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout/Layout";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import PricingBanner from "@/components/sections/PricingBanner";
import Testimonials from "@/components/sections/Testimonials";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhyTrust from "@/components/sections/WhyTrust";
import "./App.css";

const App = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedWork />
      <WhatWeDo />
      <WhyTrust />
      <Testimonials />
      <PricingBanner />
      {/* <Contact /> */}
      <Footer />
    </Layout>
  );
};

export default App;
