import React from "react";
import Header from "./components/botones";
import List from "./components/List";
function App() {
  return (
    <div className='bg-gray-600 min-h-screen' >
      <div className="container-xl p-5 ">
      <Header className=''/>
      <hr/>
      <div className=" ">
        <List />
        </div>
      </div>
    </div>
  );
}

export default App;
