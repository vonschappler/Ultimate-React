// import { unstable_noStore as noStore } from 'next/cache';

import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "./CabinCard";

export default async function CabinList({ filter }) {
  // noStore();
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let shownCabins;
  if (filter === "all") shownCabins = cabins;
  if (filter === "small")
    shownCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    shownCabins = cabins.filter(
      (cabin) => cabin.maxCapacity <= 7 && cabin.maxCapacity >= 4,
    );
  if (filter === "large")
    shownCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {shownCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
