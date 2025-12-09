import React from "react";
import { Link } from "react-router";

export default function Finalizar() {

  return (
    <div className="flex items-center justify-center min-h-screen ">
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">

    <div class="mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round"
           class="lucide lucide-circle-check-big w-24 h-24 text-green-500 mx-auto">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <path d="m9 11 3 3L22 4"></path>
      </svg>
    </div>

    <h1 class="text-3xl font-bold text-gray-800 mb-4">Pedido Confirmado!</h1>

    <p class="text-gray-600 mb-6">
      Seu pedido foi realizado com sucesso. Você receberá um e-mail com os detalhes e o código de rastreamento.
    </p>

    <div class="bg-orange-50 rounded-lg p-4 mb-6">
      <p class="text-sm text-gray-600 mb-2">Número do Pedido</p>
      <p class="text-2xl font-bold text-blue-300">ARQ-81338</p>
    </div>

    <Link to="/Parcerias"><button class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
      Fazer Novo Pedido
    </button></Link>

  </div>
</div>
    );
}