import { useState } from "react";
import '../stylesheets/App.css';
import '../stylesheets/main.scss';

import clubsData from "../data/data.json";

function App() {

  const [data, setData] = useState(clubsData);
  const [newNameClub, setNewNameClub] = useState("");
  const [NewWeekdays, setNewWeekdays] = useState("");
  const [NewWeekends, setNewWeekends] = useState("");
  const [filter, setFilter] = useState("");

   
  const handleChangeClub = (ev) => {
    setNewNameClub(ev.currentTarget.value);
  };

  const handleChangeWeekdays = (ev) => {
    setNewWeekdays(ev.currentTarget.value);
  };
  const handleChangeWeekends = (ev) => {
    setNewWeekends(ev.currentTarget.value);
  };


  const handleClickNewClub = (ev) => {
    ev.preventDefault();

    const newClub = {
      "name": newNameClub,
      "openOnWeekdays": NewWeekdays,
      "openOnWeekend": NewWeekends,
    };

    setData([...data, newClub]);

    setNewNameClub('');
    setNewWeekdays('');
    setNewWeekends('');

    console.log(data);
  };

  const htmlClubListWeekends = data.filter(item => openOnWeekend);
  const htmlClubListWeekdays = data.filter(item => openOnWeekdays);
  
  const htmlClubList = data
    .map((oneClub, index) => (
      <li className="full__clubcontainer" key={index}>
        <p className="club__name">
          <label className="contact__label">Nombre: </label>
          {oneClub.name}
        </p>
        <p className="open__weekdays">
          <label className="contact__label">Abierto entre semana: </label>
          {oneClub.openOnWeekdays ? "Sí" : "No"}
        </p>
        <p className="contact__mail">
          <label className="contact__label">Abierto en fin de semana: </label>
          {oneClub.openOnWeekend ? "Sí" : "No"}
        </p>
      </li>
    ));


return (
    <div className="page">
      {/* header */}
      <header className="header">
      <h1 className="header__title">Mis clubs</h1>
      <p className="show__clubs">Mostrar</p>
      <select className="select__clubs">
          <option value="all" selected>Todos</option>
          <option value="onWeekdays">los que abren entre semana</option>
          <option value="onWeekends">los que abren el fin de semana</option>
        </select>
      </header>

      <main>
        {/* LISTA DE CLUBES */}
        <ul className="contact__list">{htmlClubList} </ul>

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
        <input type="checkbox" id="cbox1" onClick={handleChangeWeekdays} value={NewWeekdays ? "Sí" : "No"} />
        ¿Abre entre semana?
        <input type="checkbox" id="cbox2" onClick={handleChangeWeekends} value={NewWeekends ? "Sí" : "No"}/>
        ¿Abre los fines de semana?
          <input
            className="new-club__btn"
            type="submit"
            value="Añadir un nuevo club"
            onClick={handleClickNewClub}
          />
        </form>
      </main>
    </div>
  );
}
 

export default App;
