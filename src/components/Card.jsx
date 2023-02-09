import React ,{ useState, useEffect } from "react";


function Card({ task }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("render");
  }, [counter]);

  const [solCounter, setSolCounter] = useState(0.1);
  useEffect(() => {
    console.log("render");
  }, [solCounter]);


  return (
    <div className="border-2 border-black rounded-md mx-auto p-2">
      <img
        className="rounded-md mx-1 border-2 border-black"
        src={task.Image}
        width="200"
      />
      <div className="bg-purple-300 rounded-md p-2  ring-2 ring-purple-600 my-2 ">
      <p className="font-bold  mx-1 my-1 text-center">{task.tilte}</p>
      <p className="font-light mx-2 my-1 text-center">{task.description}</p>
      <p  className="font-light mx-5 my-1 text-center">Valor {solCounter} SOL</p>
      <div className="mx-3">
      <button className="bg-slate-200 hover:bg-red-400 p-1 mx-1 rounded-md ring-2 ring-red-500"
      onClick={() => setSolCounter (counter * solCounter)}>
        Comprar
      </button>
      <button
        className="bg-red-600  hover:bg-red-400 px-1 mx-1 rounded-md "
        onClick={() => setCounter(counter - 1)}
      >
       -
      </button>
      <span className=" bg-slate-200 py-1 px-2 rounded-md ring-2 ring-blue-500">{counter}</span>
      <button
        className="bg-red-600  hover:bg-red-400 px-1 mx-1 rounded-md"
        onClick={() => setCounter(counter + 1)}
        
      >
       +
      </button>
      </div>
      </div>
    </div>
  );
}

export default Card;
