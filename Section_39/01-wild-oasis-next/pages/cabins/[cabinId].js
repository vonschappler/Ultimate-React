import { useRouter } from "next/router";

export default function Cabin() {
  const router = useRouter();
  return <div>Cabin #{router.query.cabinId}</div>;
}
