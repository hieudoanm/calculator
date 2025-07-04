import { FC } from 'react';

export const CallToAction: FC = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-2xl font-bold sm:text-3xl">Need fast and reliable calculations?</h3>
        <p className="mt-4 text-neutral-500">
          Use our powerful calculator right in your browser — no downloads, no sign-up, just results.
        </p>
      </div>
    </section>
  );
};
