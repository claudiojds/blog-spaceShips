"use client";
import Navegacao from "@/app/components/Navegacao/Navegacao";
import Titulo from "@/app/components/titulo/Titulo";
import spaceships from "@/data/spaceships.json";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  if (!id || typeof id !== "string") return null;

  const ship = spaceships.find((ship) => ship.id === +id);
  if (!ship) return null;

  return (
    <main className="flex flex-col justify-center items-center py-3">
      <Titulo title={ship.name} className="text-yellow-300 text-3xl" />
      <div className="flex flex-col justify-center items-center w-100vh h-stret p-10 gap-3">
        <div className="flex flex-wrap gap-5 p-1">
          <p>
            <strong>Modelo: </strong>
            {ship.model}
          </p>

          <p>
            <strong>Categoria: </strong>
            {ship.model}
          </p>
        </div>
        <div>
          <p>{ship.description}</p>
        </div>

        <Image
          src={ship.imageUrl}
          alt={`img-${ship.name}`}
          width={750}
          height={432}
          className="border border-gray-600"
        />
      </div>
      <div className="flex flex-col items-center justify-between mt-3 gap-5">
        <Navegacao
          caminho="/espaconaves"
          txt="Todas as Espaçonaves"
          className=" py-2.5 px-6.5 text-1xl rounded-md font-extralight cursor-pointer bg-transparent border border-solid border-white hover:border-yellow-300 hover:text-yellow-300"
        />

        {/*Habilitando e dasabilitando botão*/}
        <div className="flex gap-5">
          <Navegacao
            caminho={+ship.id !== 1 ? `/espaconaves/${ship.id - 1}` : "#"}
            txt="Anterior"
            className={`py-2.5 px-6.5 text-1xl rounded-md font-extralight bg-transparent border border-solid ${
              +ship.id === 1
                ? "border-gray-500 text-gray-500 cursor-not-allowed"
                : "border-white hover:border-yellow-300 hover:text-yellow-300"
            }`}
          />

          <Navegacao
            caminho={
              +ship.id !== spaceships.length
                ? `/espaconaves/${ship.id + 1}`
                : "#"
            }
            txt="Próximo"
            className={`py-2.5 px-6.5 text-1xl rounded-md font-extralight bg-transparent border border-solid ${
              +ship.id === spaceships.length
                ? "border-gray-500 text-gray-500 cursor-not-allowed"
                : "border-white hover:border-yellow-300 hover:text-yellow-300"
            }`}
          />
        </div>

        {/*Tornando o botão visivel e invisivel*/}
        {/* <div className="flex gap-5">
          {+ship.id !== 1 && (
            <Navegacao
              caminho={`/espaconaves/${ship.id - 1}`}
              txt="Anterior"
              className=" py-2.5 px-6.5 text-1xl rounded-md font-extralight cursor-pointer bg-transparent border border-solid border-white hover:border-yellow-300 hover:text-yellow-300"
            />
          )}

          {+ship.id !== spaceships.length &&(
            <Navegacao
              caminho={`/espaconaves/${ship.id + 1}`}
              txt="Proxíma"
              className=" py-2.5 px-6.5 text-1xl rounded-md font-extralight cursor-pointer bg-transparent border border-solid border-white hover:border-yellow-300 hover:text-yellow-300"
            />
          )}
        </div> */}
      </div>
    </main>
  );
}
