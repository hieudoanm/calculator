import { CallToAction } from '@numbers/components/landing/CallToAction';
import { Features } from '@numbers/components/landing/Features';
import { Footer } from '@numbers/components/landing/Footer';
import { Hero } from '@numbers/components/landing/Hero';
import { Navbar } from '@numbers/components/shared/Navbar';
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
