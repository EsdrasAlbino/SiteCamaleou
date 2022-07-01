import Mecanica from './Components/mecanica.js'
import './App.css';
import { FaGithub, FaYoutube } from 'react-icons/fa'
import { IoIosColorPalette } from 'react-icons/io'
import Mono from './Image/mono.png'
import ImagemMapa from './Image/ImagemMapa.png'
import ImageHistoria from './Image/CenarioCamaelou.png'


function App() {
  return (
    <div >
      <header className="App-header">
        <img src={FaGithub} className="Jogo-logo" alt="logo" />
      </header>
      <body class="color-background">
        <div >
          <h1>A Expressão das Cores</h1>
          <p>Usamos cores para expressar diversos sentimentos dos jogadores.</p>
          <img src={ImagemMapa} class="position"/>
        </div>
        <div >
          <h1>História</h1>
          <p>Mono é morador de uma vila que se afundou na tristeza e depressão, entretanto, Mono percebe algo diferente no céu, uma luz, enquanto tudo ao seu redor é preto e branco.</p>
          <img src={ImageHistoria} class="position1"/>
        </div>
        <div >
          <h1>Personagem</h1>
          <p>MONO</p>
          <img src={Mono} class="position"/>
        </div>
        <div>
          <h1>Mecânicas</h1>
          <div id="estilo-mecanica">
            <Mecanica icon={IoIosColorPalette} nome="Cores" descricao="A medida que o jogador avança de fase, o mundo vai ganhando cor."/>
            <Mecanica nome="Hook Cachecol" descricao="O cachecol, seu primeiro item, tem função de Hook em objetos."/>
            <Mecanica nome="Coletar Itens" descricao="O personagem tem a possibilidade de pegar itens e spells pelo mapa"/>
          </div>
        </div>
      </body>
      <footer class="footer-color">
        <a id="estilo-time">Time de Produção</a>
        <span>-</span>
        <div>
          <a class="icon-position" ><FaGithub/></a>
          <a class="icon-position"><FaYoutube/></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
