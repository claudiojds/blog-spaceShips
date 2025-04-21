import Titulo from "@/app/components/titulo/Titulo";
import Navegacao from "@/app/components/Navegacao/Navegacao";
import spaceships from "@/data/spaceships.json";

export default function categorias() {
  const cateriasSet = new Set(spaceships.map( ship => ship.category));
  const categoriasArray = Array.from(cateriasSet)

  return (
    <main className="flex flex-col items-center">
    <Titulo
      title="Todas Categorias"
      className="text-yellow-300 text-5xl"
    />
    <ul className="flex flex-wrap justify-center items-center w-100vh h-stret p-10 gap-10">
      {categoriasArray.map((categoria) => (
        <li 
          key={categoria}
        >
          <Navegacao
            caminho={`/categorias/${categoria.replace(' ', '_')}`}
            txt={categoria} 
            className="w-58 py-2.5 px-6.5 text-1xl rounded-md font-extralight cursor-pointer bg-transparent border border-solid border-white hover:border-yellow-300 hover:text-yellow-300"
          />
        </li>
      ))}
    </ul>
  </main>
  );
}

