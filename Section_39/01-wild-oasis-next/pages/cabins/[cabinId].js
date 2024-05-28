import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";

export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin }, revalidate: 0 };
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
