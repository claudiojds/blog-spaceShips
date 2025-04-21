"use client";
import { useParams } from "next/navigation";
import spaceships from "@/data/spaceships.json";
import Titulo from "@/app/components/titulo/Titulo";
import Navegacao from "@/app/components/Navegacao/Navegacao";
import Image from "next/image";

export default function Page() {
  const params = useParams();

  if (typeof params.categoria !== "string") return null;

  const categoryFormat = params.categoria.replace('_', ' ')

  const categoriasSpacesships = spaceships.filter(
    (ship) => ship.category === categoryFormat
  );

  return (
    <main className="flex flex-col justify-center items-center py-3">
      <div className="flex items-center justify-between w-full px-1">
        <div className="flex gap-0.5 p-2">
          <Image
            src="/arrow-left-white.svg"
            alt="Voltar"
            width={16} 
            height={16}
          />
          <Navegacao
            caminho="/categorias"
            txt="Voltar"
            className="text-1xl rounded-md font-extralight cursor-pointer  hover:text-yellow-300"
          />
        </div>
        <div className="flex-grow text-center">
          <Titulo
            title={categoryFormat}
            // title={''}
            className="text-yellow-300 text-5xl"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between mt-3 gap-5">
        <ul className="flex flex-wrap justify-center items-center w-100vh h-stret p-10 gap-10">
          {categoriasSpacesships.map((ship) => (
            <li key={ship.id}>
              <Navegacao
                caminho={`/espaconaves/${ship.id}`}
                txt={ship.name}
                className="w-58 py-2.5 px-6.5 text-1xl rounded-md font-extralight cursor-pointer bg-transparent border border-solid border-white hover:border-yellow-300 hover:text-yellow-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
