import { Suspense } from "react";

import CabinList from "@/app/_components/CabinList";
import Spinner from "./loading";
import Filter from "@/app/_components/Filter";

// this is not necessary because seachParams is not knwon in built time, so the page is automatically dynamically rendered
// export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const { capacity } = searchParams;
  const filter = capacity ?? "all";
  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        Our Luxury Cabins
      </h1>
      <p className="mb-10 text-lg text-primary-200">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <div className="mb-8 flex justify-end">
        <Filter />
      </div>
      <Suspense fallback={<Spinner key={filter} />}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
