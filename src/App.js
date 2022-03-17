import "./App.css";
import { useRef } from "react";
import Appbar from "muicss/lib/react/appbar";
import Button from "muicss/lib/react/button";
const data = [
  "airhorn",
  "ding",
  "halleluja",
  "rimshot",
  "trololo",
  "x-files",
  "fart",
  "power-up",
  "mexican-trumpet",
  "wrong-answer",
  "power-rangers",
  "darth-vader-power",
  "lightsaber",
];
function App() {
  const audioEl = useRef(null);
  function play(sound) {
    audioEl.current.src = `sounds/${sound}.mp3`;
    audioEl.current.currentTime = 0;
    audioEl.current.play();
  }
  return (
    <div className="App">
      <Appbar>
        <h1>SoundBoard</h1>
      </Appbar>
      <audio ref={audioEl}></audio>
      {data.map((sound) => (
        <Button
          size="large"
          key={sound}
          color="accent"
          onClick={() => play(sound)}
        >
          {sound}
        </Button>
      ))}
    </div>
  );
}

export default App;
