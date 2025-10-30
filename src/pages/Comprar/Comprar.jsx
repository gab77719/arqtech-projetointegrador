import "./Comprar.css";
import { Link } from "react-router";
import Cabecalho from "../../components/Cabecalho";
import Produto3 from "../../assets/produto3.png";

export default function Comprar() {
  return (
    <>
      <header>
        <Cabecalho />
      </header>
      <div className="min-h-screen  text-white p-30 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-8 flex items-center justify-center">
              <img
                src={Produto3}
                alt="Serra Mármore Makita"
                className="w-full h-auto max-w-md object-contain"
              />
            </div>

            <div className="border border-gray-700 rounded-lg p-8">
              <h1 className="text-2xl font-bold mb-2">Serra Mármore 110MM 4</h1>
              <p className="text-gray-400 mb-6">3/8mm 127V Makita - 57122</p>

              <div className="mb-8">
                <span className="text-red-600 font-bold text-4xl">Makita</span>
              </div>

              <div className="mb-8">
                <p className="text-3xl font-bold">R$ 436,00</p>
              </div>

              <div className="flex gap-4">
                 <Link to="/Pagamentos"><button className="flex-1 bg-transparent border border-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition">
                  Comprar
                </button></Link>
                <Link><button className="flex-1 bg-transparent border border-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
                  Adicionar ao carrinho
                </button></Link>
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Segmentos:</h2>
                <p className="text-gray-300 leading-relaxed">
                  Construção Civil / Marmoraria /<br />
                  Aplicações:
                  <br />
                  Alvenaria / Ardósia / Azulejo e<br />
                  cerâmica / Concreto / Fibra de
                  <br />
                  vidro / Fibrocimento / Granito /<br />
                  Madeira / Marmoglass /<br />
                  Mármore / Metal / Porcelanato /<br />
                  PVC / Tijolo Maciço / Vidro /
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Itens que acompanham:
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Mangueira, registro, plug, cano
                  <br />
                  de água, chave e chave allen.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">
              DESCRIÇÃO 
            </h2>

            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <strong>DESCRIÇÃO:</strong> Serra Marmore 110MM 4 3/8mm 127V
                Makita MO4008 Leve e compacta e motor de alta potência. Dupla
                isolação.
              </p>

              <p>
                <strong>ESPECIFICAÇÕES TÉCNICAS</strong>
                <br />
                Potência: 1.300W Rotações por minuto: 13.800 Corte 90°: 32mm
                Diâmetro do disco: 110mm Dimensões(C x L x A): 291 x 195 x 164mm
                Peso: 2,6 kg
              </p>

              <p>
                <strong>ITENS QUE ACOMPANHAM</strong> Chave fixa e chave allen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
