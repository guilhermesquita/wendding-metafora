"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { confirmPresence, getUsers } from "../_action/actions";
import { notFoundError } from "../_action/errors/errorConfirm";

const MainImage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState<null | "notFound" | "unknown">(null);

  useEffect(() => {
    const teste = async () => {
      const te = await getUsers();
      console.log(te);
    };

    teste();
  }, []);

  const handleConfirm = () => {
    setIsOpen(true);
  };

  const handleVerify = async () => {
    if (otp.length < 6) return;

    const codeToSend = otp.trim().toUpperCase();

    try {
      await confirmPresence(codeToSend);
      setConfirmed(true);

      setTimeout(() => {
        setIsOpen(false);
        setOtp("");
        setConfirmed(false);
      }, 3000);
    } catch (err) {
      if (err instanceof notFoundError) {
        console.log("Código não encontrado");
        setConfirmed(true);
        setError("notFound");
      } else {
        console.error("Erro inesperado:", err);
        setError("unknown");
      }

      setTimeout(() => {
        setIsOpen(false);
        setOtp("");
        setConfirmed(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="relative h-[400px] w-[80%] mx-auto px-5 py-8 group bg-black overflow-hidden shadow-xl cursor-pointer">
        <Image
          src="/mainImage.jpg"
          alt="Standard Plan Card"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 w-full h-full bg-[#641913] opacity-5 transition-all duration-500 group-hover:opacity-30" />
        <div className="absolute inset-0 w-full h-full backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100" />

        <div className="relative z-10 h-full flex flex-col">
          <div className="mt-auto">
            <button
              className="w-[250px] bg-[#7A0505] py-3 rounded cursor-pointer font-secondary text-white"
              onClick={handleConfirm}
            >
              Confirme sua presença
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
          {!confirmed ? (
            <div className="bg-white rounded-lg p-6 w-[100%] sm:w-[90%] md:w-[70%] lg:w-[48%] shadow-lg">
              <h2 className="text-lg sm:text-xl md:text-2xl text-black font-bold mb-4 text-center">
                Digite o seu código
              </h2>

              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={
                  <span className="mx-1 sm:mx-2 text-lg sm:text-xl">-</span>
                }
                containerStyle="flex justify-center gap-2 sm:gap-3 overflow-hidden"
                skipDefaultStyles
                inputType="text"
                renderInput={(props) => (
                  <input
                    {...props}
                    className="
        w-8 h-10 
        sm:w-10 sm:h-12 
        md:w-12 md:h-14 
        border border-gray-300 text-black rounded-md 
        text-center text-sm sm:text-base md:text-lg 
        focus:outline-none focus:border-red-500
      "
                  />
                )}
              />

              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
                <button
                  onClick={() => {
                    setOtp("");
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 cursor-pointer w-full sm:w-auto"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleVerify}
                  disabled={otp.length < 6}
                  className="px-4 py-2 rounded bg-[#7A0505] text-white hover:bg-red-900 cursor-pointer w-full sm:w-auto"
                >
                  Confirmar
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-6 w-[40%] shadow-lg flex flex-col items-center">
              {(() => {
                const messages = {
                  notFound: {
                    title: "Código digitado não existe!",
                    description: "Reescreva o seu código",
                  },
                  unknown: {
                    title: "Erro ao fazer a confirmação!",
                    description: "Se puder, verifique sua conexão!",
                  },
                  null: {
                    title: "Presença confirmada 🎉",
                    description:
                      "Obrigado por confirmar! Esperamos você nesse dia viu!",
                  },
                };

                const { title, description } =
                  messages[error as keyof typeof messages];

                return (
                  <>
                    <h2 className="text-xl text-black font-bold mb-4 text-center">
                      {title}
                    </h2>
                    <p className="text-gray-700 text-center">{description}</p>
                  </>
                );
              })()}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MainImage;
