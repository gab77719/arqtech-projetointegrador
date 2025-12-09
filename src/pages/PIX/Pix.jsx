import { useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import QR from "../../assets/QR.png";
import "./Pix.css";
import { Link } from "react-router";

export default function Pix() {
    const [copied, setCopied] = useState(false);
    const pixCode = "00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-abcd-ef1234567890";

    const handleCopy = () => {
        navigator.clipboard.writeText(pixCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return(
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            
            <p className="text-center text-2xl font-semibold mb-10">
                Pague via Pix para concluir sua compra
            </p>

            {/* QR Code */}
            <div className="bg-white p-4 rounded-xl border-4 border-blue-400 shadow-lg mb-8">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-qr-code w-32 h-32 text-gray-400 mx-auto mb-3"
                        >
                            <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                            <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                            <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                            <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                            <path d="M21 21v.01"></path>
                            <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                            <path d="M3 12h.01"></path>
                            <path d="M12 3h.01"></path>
                            <path d="M12 16v.01"></path>
                            <path d="M16 12h1"></path>
                            <path d="M21 12v.01"></path>
                            <path d="M12 21v-1"></path>
                        </svg>

                        <p className="text-sm text-gray-500">QR Code PIX</p>
                        <p className="text-xs text-gray-400 mt-1">Escaneie para pagar</p>
                    </div>
                </div>
            </div>

            {/* Texto acima dos botões */}
            <h3 className="font-semibold text-white mb-4 text-center">
                Ou copie o código PIX:
            </h3>
            
            {/* Botões centralizados */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
                <button
                    onClick={handleCopy}
                    className={`border px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform 
                        flex items-center justify-center space-x-2 w-full sm:w-auto
                        ${copied 
                            ? 'bg-green-500 text-white border-green-500 scale-105' 
                            : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95'
                        }`}
                >
                    {copied ? (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span>Copiado!</span>
                        </>
                    ) : (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>
                            <span>Copiar Código</span>
                        </>
                    )}
                </button>

                <Link to="/Finalizar" className="w-full sm:w-auto">
                    <button className="border border-blue-600 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-full">
                        Pagamento Realizado
                    </button>
                </Link>
            </div>

        </div>
    )
}