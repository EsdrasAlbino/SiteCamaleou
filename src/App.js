import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Jogo-logo" alt="logo" />
      </header>
      <div>
        <h1>A Expressão das Cores</h1>
        <p>Usamos cores para expressar diversos sentimentos dos jogadores.</p>
        <img src={logo}></img>
      </div>
      <div>
        <h1>História</h1>
        <p>Mono é morador de uma vila que se afundou na tristeza e depressão, entretanto, Mono percebe algo diferente no céu, uma luz, enquanto tudo ao seu redor é preto e branco.</p>
        <img src={logo}></img>
      </div>
      <div>
        <h1>Personagem</h1>
        <p>MONO</p>
        <img src={logo}></img>
      </div>
      <div>
        <h1>Mecânicas</h1>

      </div>
      <footer>
        <a>Time de Produção</a>
      </footer>
    </div>
  );
}

export default App;
