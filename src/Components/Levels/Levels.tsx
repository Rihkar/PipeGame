type LevelsProps= {
  onLvlClick: (lvl:string)=>void
}

const lvls = ['1', '2', '3', '4', '5', '6'];

const Levels = ({ onLvlClick }:LevelsProps) => (
  <div className="lvl-buttons">
    {lvls.map((lvl) => (
      <button key={lvl} onClick={() => onLvlClick(`new ${lvl}`)}>
        {`Level ${lvl}`}
      </button>
    ))}
  </div>
);

export default Levels;
