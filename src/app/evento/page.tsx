import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="text-black p-5 space-y-6">
      {/* Título */}
      <h1 className="text-3xl font-bold">Detalhes do Casamento</h1>

      <Link
        className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
        href="https://lista.havan.com.br/Convidado/ItensListaPresente/857422" target="_blank"
      >
        <Image
          src="/IMG_9767.jpg"
          alt={"sasa"}
          className="absolute inset-0 h-full w-full object-cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <h3 className="z-10 mt-3 text-3xl font-bold text-white text-title-medium">
          Lista de presente
        </h3>
        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 text-caption">
          clique aqui e tenha acesso a nossa lista
        </div>
      </Link>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          📍 Localização do Casamento
        </h2>
        <p className="mb-2">
          Casa Colonial, R. Ovídio Gomes Monteiro, 2020 - Alvorada, Manaus - AM,
          69042-110
        </p>
        <iframe
          className="w-full h-64 rounded-lg pointer-events-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.073859769523!2d-60.045942625029184!3d-3.0749482969007422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c10667df1f491%3A0x7057582b61a7b5fd!2sCasa%20Colonial%20Festas%20%26%20Eventos!5e0!3m2!1sen!2sbr!4v1754966370981!5m2!1sen!2sbr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ pointerEvents: "none" }}
        ></iframe>
      </section>

      {/* QR Code para Pix */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          💳 Contribuição para nossa Lua de Mel{" "}
        </h2>
        <p>
          Chave Pix:{" "}
          <span className="font-mono font-bold">
            guilhermer_mesquita@hotmail.com
          </span>
        </p>
        <div className="mt-3 flex justify-center">
          <Image
            src="/qrcode_pix.jpeg"
            alt="QR Code Pix"
            width={200}
            height={200}
            className="border rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
