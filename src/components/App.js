import { useState } from "react";
import '../stylesheets/App.css';
import '../stylesheets/main.scss';

import clubsData from "../data/data.json";

function App() {

  const [data, setData] = useState(clubsData);
  const [newNameClub, setNewNameClub] = useState("");
  const [NewWeekdays, setNewWeekdays] = useState("");
  const [NewWeekends, setNewWeekends] = useState("");
  

  
  const handleChangeClub = (ev) => {
    setNewNameClub(ev.currentTarget.value);
  };

  const handleChangeWeekdays = (ev) => {
    setNewWeekdays(ev.currentTarget.value);
  };
  const handleChangeNewWeekends = (ev) => {
    setNewWeekends(ev.currentTarget.value);
  };


  const handleClick = (ev) => {
    ev.preventDefault();

    const newClub = {
      "name": newNameClub, 
      "openOnWeekdays": NewWeekdays, 
      "openOnWeekend": NewWeekends,
    };

    //data.push(newContact);
    setData( [...data, newClub] );

    setNewNameClub('');
    setNewWeekdays('');
    setNewWeekends('');

    console.log(data);
  };




  const htmlClubList = data
    .map((oneClub, index) => (
      <li className="full__clubcontainer" key={index}>
        <p className="club__name">
          <label className="contact__label">Nombre: </label>
          {oneClub.name}
        </p>
        <p className="open__weekdays">
          <label className="contact__label">Abierto entre semana: </label>
          {oneClub.openOnWeekdays}
        </p>
        <p className="contact__mail">
          <label className="contact__label">Abierto en fin de semana: </label>
          {oneClub.openOnWeekend}
        </p>
      </li>
    ));


return (
    <div className="page">
      {/* header */}
      <header className="header">
      <h1 className="header__title">Mis clubs</h1>
      <p className="show__clubs">Mostrar</p>
        <select name="select__clubs">
          <option value="value1">Todos</option>
          <option value="value2" selected>los que abren entre semana</option>
          <option value="value3">los que abren el fin de semana</option>
        </select>
      </header>

      <main>
        {/* LISTA DE CLUBES */}
        <ul className="contact__list">{htmlClubList}</ul>

        {/* AÑADIR NUEVO CLUB */}
        <form className="new-contact__form">
        <h2 className="new-contact__title">Añade un nuevo club</h2>
        <p>Nombre del club</p>
          <input
            className="new-club__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            onChange={handleChangeClub}
            value={newNameClub}
        />
        <p>¿Abre entre semana?</p>
        <input type="checkbox" id="cbox1" onChange={handleChangeWeekdays} value={NewWeekdays} />
        ¿Abre entre semana?
        <input type="checkbox" id="cbox2" value="second_checkbox"/>
        ¿Abre los fines de semana?
          <input
            className="new-club__btn"
            type="submit"
            value="Añadir un nuevo club"
            // onClick={handleClick}
          />
        </form>
      </main>
    </div>
  );
}
 

export default App;
