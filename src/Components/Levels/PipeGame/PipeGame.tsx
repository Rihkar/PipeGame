type PipeGameProps ={
    sendCommand:(command:string) =>void,
    pipes: string,
    verify:string
}
const PipeGame = ({ sendCommand, pipes, verify }:PipeGameProps) => {
  const pipesToMap = pipes.slice(4).trim().split('\n');

  return (
    <div className="pipe-game">
      <div className="all-pipes">
        {pipesToMap.map((pipesXline, pipesXlineIndex) => (
          <div key={Math.random()} className="pipes-x-line">
            {pipesXline.split('').map((pipesXlineEl, pipesXlineElIndex) => (
              <div
                key={Math.random()}
                onClick={() => {
                  sendCommand(`rotate ${pipesXlineElIndex} ${pipesXlineIndex} `);
                }}
              >
                {pipesXlineEl}
              </div>
            ))}
          </div>
        ))}
      </div>

      {pipes && (
      <button onClick={() => { sendCommand('verify'); }}>
        {verify}
      </button>
      )}

    </div>

  );
};

export default PipeGame;
