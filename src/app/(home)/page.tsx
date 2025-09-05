"use client";

import Head from "next/head";
// import Image from "next/image";
import MainImage from "../[components]/MainImage";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Casamento Gui & Leticia</title>
      </Head>

      <div className="space-y-5 mt-20">
        <main className="min-h-screen bg-primary text-white text-center p-6">
          <div className="w-full flex flex-col items-center">
            <div className="w-[80%] flex justify-between">
              <p className="underline text-black font-primary text-2xl cursor-pointer">
                16.09.2025
              </p>
              <Link
                className="text-black text-2xl font-primary underline"
                href="/evento"
              >
                ver detalhes do evento
              </Link>
            </div>
            <MainImage />
          </div>
        </main>
      </div>
    </>
  );
}
