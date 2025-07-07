import { FC } from 'react';

export const Features: FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center md:px-8">
        <h3 className="text-3xl font-semibold sm:text-4xl">Why Use Our Calculator?</h3>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-500">
          Perform quick, accurate calculations right in your browser. No sign-up. No distractions. Just results.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
            <h4 className="text-lg font-semibold">⚡ Instant Results</h4>
            <p className="mt-2 text-sm text-neutral-500">Get answers as you type — no delays, no loading screens.</p>
          </div>
          <div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
            <h4 className="text-lg font-semibold">🔒 100% Local</h4>
            <p className="mt-2 text-sm text-neutral-500">
              All calculations happen in your browser. No data is sent anywhere.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
            <h4 className="text-lg font-semibold">🧮 Versatile Functions</h4>
            <p className="mt-2 text-sm text-neutral-500">
              From basic arithmetic to advanced functions — it’s all built in and easy to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
