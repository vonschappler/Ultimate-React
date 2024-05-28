import Header from "@/components/Header";
import "@/styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${josefin.className} relative flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased`}
    >
      <Header />

      <div className="grid flex-1 px-8 py-12">
        <main className="mx-auto w-full max-w-7xl">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
