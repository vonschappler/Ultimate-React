import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";

export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return {
    props: {
      cabin,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 10, // In seconds
  };
}

export default function Cabin({ cabin }) {
  return (
    <>
      <Head>
        <title>The Wild Oasis // Cabin #{cabin.name}</title>
      </Head>
      <div className="max-w-6-xl mx-auto mt-8">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}
