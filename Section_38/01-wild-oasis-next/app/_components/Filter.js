"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex border border-solid border-primary-700 ">
      <Button handleClick={() => handleFilter("all")} active={"all" === active}>
        All cabins
      </Button>
      <Button
        handleClick={() => handleFilter("small")}
        active={"small" === active}
      >
        1&mdash;3 guests
      </Button>
      <Button
        handleClick={() => handleFilter("medium")}
        active={"medium" === active}
      >
        4&mdash;7 guests
      </Button>
      <Button
        handleClick={() => handleFilter("large")}
        active={"large" === active}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}
