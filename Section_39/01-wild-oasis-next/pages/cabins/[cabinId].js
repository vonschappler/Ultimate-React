import Head from "next/head";
import { useRouter } from "next/router";

export default function Cabin() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>The Wild Oasis // Cabin #{router.query.cabinId}</title>
      </Head>
      <div>Cabin #{router.query.cabinId}</div>
    </>
  );
}
