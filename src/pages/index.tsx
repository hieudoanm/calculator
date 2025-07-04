import { CallToAction } from '@numbers/components/CallToAction';
import { Features } from '@numbers/components/Features';
import { Footer } from '@numbers/components/Footer';
import { Hero } from '@numbers/components/Hero';
import { Navbar } from '@numbers/components/Navbar';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full border-t border-neutral-800" />
      <Hero />
      <div className="w-full border-t border-neutral-800" />
      <Features />
      <div className="w-full border-t border-neutral-800" />
      <CallToAction />
      <div className="w-full border-t border-neutral-800" />
      <Footer />
    </>
  );
};

export default HomePage;
