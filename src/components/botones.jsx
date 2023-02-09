function Header() {
  return (
    <header className="flex justify-between"> <img
          src="https://media.discordapp.net/attachments/1011302441154789466/1073275808644345907/Logotipo_Tienda_De_Moda_Minimalista_Blanco_y_Negro__1_-removebg-preview.png?width=375&height=375"
          width="200"
          className="-my-10"
         
        ></img>
      <div className="  my-10">
       
        <ul className="  ">
          <a
            className="bg-transparent hover:bg-purple-400 rounded-md ring-2 ring-purple-700 px-7 py-2 m-2 gap-2"
            href="#"
          >
            🔔
          </a>

          <a
            className="bg-transparent  text-slate-100 font-bold hover:bg-purple-400 rounded-md  ring-2 ring-purple-700 px-7 py-2 m-2 gap-2"
            href="#"
          >
            Rifas
          </a>
          <a
            className="bg-transparent text-slate-100 font-bold hover:bg-purple-400 rounded-md  ring-2 ring-purple-700 px-7 py-2 m-2 gap-2"
            href="#"
          >
            Crate Acounnt
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Header;
