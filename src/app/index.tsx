import Head from "next/head"
import Countdown from "./[components]/Countdown"

export default function Home() {
  return (
    <>
      <Head>
        <title>Casamento Gui & Leticia</title>
      </Head>
      <main className="min-h-screen bg-primary text-white text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Gui ❤️ Leticia</h1>
        <p className="text-xl mb-2">16 de Setembro de 2025</p>
        <Countdown targetDate="2025-09-16" />
        <div className="mt-12">
          <a href="/local" className="underline text-lg">Ver local da cerimônia</a>
        </div>
      </main>
    </>
  )
}
