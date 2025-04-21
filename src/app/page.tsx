import Titulo from "./components/titulo/Titulo";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center w-100vh h-stret p-5 gap-10">
        <Titulo
          title="Conheça as Naves do Universo Star Wars"
          className="text-yellow-300 text-5xl"
        />
       <div className="felx flex-col">
        <p className="felx flex-col">
          <strong>As Naves do Universo Star Wars: Poder, Estilo e História nas Estrelas</strong>
          <p>
          O universo de Star Wars é vasto, épico e cheio de batalhas intergalácticas que marcaram gerações. E nada representa melhor essa grandiosidade do que suas icônicas naves espaciais. De caças ágeis a cruzadores colossais, cada nave carrega história, personalidade e um papel fundamental nas guerras da galáxia muito, muito distante.
          </p>
        </p>
        <br />
        <p className="felx flex-col">
          <strong>Caças Estelares: Velocidade e Precisão</strong>
          <p>
          Entre as mais conhecidas estão os caças estelares, como o X-Wing, símbolo da Aliança Rebelde, e o temido TIE Fighter, usado pelo Império Galáctico. Essas naves são rápidas, mortais e projetadas para combates diretos, geralmente com um piloto e armamento leve, mas preciso. Suas batalhas em meio a campos de asteroides ou corredores de Estrelas da Morte são algumas das cenas mais eletrizantes da saga.
          </p>
        </p>
        <br />
        <p className="felx flex-col">
          <strong>Naves de Transporte e Suporte</strong>
          <p>
          Naves como a lendária Millennium Falcon, pilotada por Han Solo e Chewbacca, misturam velocidade com robustez. Apesar de parecer uma simples nave de carga, ela provou ser uma das mais versáteis e resistentes da galáxia. Já naves como o U-Wing e o Lambda Shuttle são mais voltadas para transporte de tropas ou missões táticas, mas ainda assim desempenham papéis cruciais nas batalhas.
          </p>
        </p>
        <br />
        <p className="felx flex-col">
          <strong>Cruzadores e Destróieres: Gigantes do Espaço</strong>
          <p>
          Se o Império é conhecido por sua força opressora, isso se reflete nos imensos Star Destroyers, naves gigantescas capazes de dominar planetas inteiros com sua presença. Do outro lado, a Nova República e outras facções também utilizam cruzadores e fragatas pesadas para manter a balança de poder.
          </p>
        </p>
        <br />
       </div>
      </main>
    </div>
  );
}
