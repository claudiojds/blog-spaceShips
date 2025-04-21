// import Btn from "@/app/components/btnMain/Btn";
import Titulo from "@/app/components/titulo/Titulo";
import Navegacao from "@/app/components/Navegacao/Navegacao";
import spaceships from "@/data/spaceships.json";

export default function espaconaves() {
  // const handleClick = (caminho: string) => {
  //     window.open(caminho, "_blank")
  // }

  return (
    <main className="flex flex-col items-center">
      <Titulo
        title="Todas as Espaçonaves"
        className="text-yellow-300 text-5xl"
      />
      <ul className="flex flex-wrap justify-center items-center w-100vh h-stret p-10 gap-10">
        {spaceships.map((ship) => (
          <li 
            key={ship.id}
          >
            <Navegacao
              caminho={`/espaconaves/${ship.id}`}
              txt={ship.name} 
              className="w-58 py-2.5 px-6.5 text-1xl rounded-md font-extralight cursor-pointer bg-transparent border border-solid border-white hover:border-yellow-300 hover:text-yellow-300"
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
