import { APP_NAME } from '@numbers/constants';

export const Hero = () => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-4xl font-extrabold text-neutral-100 sm:text-5xl">{APP_NAME}</h2>
        <p className="mt-6 text-lg text-neutral-500">A fast, clean, and reliable calculator — right in your browser.</p>
      </div>
    </section>
  );
};
