import Link from 'next/link';
import { FC } from 'react';

export const CallToAction: FC = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-y-4 text-center md:gap-y-8">
        <h3 className="text-2xl font-bold sm:text-3xl">Need fast and reliable calculations?</h3>
        <p className="text-neutral-500">
          Use our powerful calculator right in your browser — no downloads, no sign-up, just results.
        </p>
        <div>
          <Link href="/base">
            <button
              type="button"
              className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-900 px-6 py-3">
              Launch App
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
