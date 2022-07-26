import './Styles/reset.scss';
import './App.scss';
import { useState } from 'react';
import Levels from './Components/Levels/Levels';
import PipeGame from './Components/Levels/PipeGame/PipeGame';

const pipeGameData = new WebSocket('wss://hometask.eg1236.com/game-pipes/');

const App = () => {
  const [pipes, setPipes] = useState('');
  const [verify, setVerify] = useState('verify');

  pipeGameData.onmessage = (event) => {
    if (event.data.includes('map')) {
      setPipes(event.data);
    }

    if (event.data === 'verify: Incorrect.') {
      setVerify('Incorrect');

      setTimeout(() => {
        setVerify('verify');
      }, 3000);
    } else if (event.data.includes('Correct!')) {
      setVerify('Correct');
    }
  };

  const sendCommand = (command:string) => {
    pipeGameData.send(command);
    pipeGameData.send('map');
  };

  return (
    <div>

      <Levels
        onLvlClick={(lvl) => sendCommand(lvl)}
      />
      <PipeGame
        sendCommand={(command) => sendCommand(command)}
        pipes={pipes}
        verify={verify}
      />

    </div>
  );
};
export default App;
