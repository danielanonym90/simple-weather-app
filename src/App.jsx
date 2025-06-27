import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherResult, setWeatherResult] = useState("");

  const openWeathermap = async () => {
    const apiKey = "fe1f91d4f7dfd388a43a05f2664e4fd3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

    try {
      const request = await fetch(url);

      if (request.ok) {
        const responseBack = await request.json();
        const climaFormatado = `Clima em ${responseBack.name}: ${responseBack.main.temp}°C, ${responseBack.weather[0].description}`;
        setWeatherResult(climaFormatado);
      } else {
        throw new Error("Request Failed");
      }
    } catch (erro) {
      console.log(erro);
    }
  };

  const resultado = () => {
    return openWeathermap();
  };

  return (
    <div id="mainContent">
      <h1>Consulte o clima da sua cidade abaixo:</h1>
      <h1 id="resultText">Resultado: {weatherResult}</h1>
      <input
        type="text"
        id="inputCity"
        placeholder="Digite uma cidade..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={openWeathermap}>Enviar</button>
    </div>
  );
}

export default App;
