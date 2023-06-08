import React from "react";
const Formulaire = (props) => {
  return (
    <div>
      <form className="formLogin">
        <h1 className="titreLogin">Interface de modération</h1>
        <label className="labelLogin labelLogin1">
          Email <br />
        </label>
        <input type="email" className="inputLogin" placeholder=" JohnDoe@texas.com" />
      
        <label className="labelLogin ">
          Mot de passe <br />
        </label>
        <input type="password"  className="inputLogin" placeholder=" Votre Mot de passe"/>

        <button type="submit" className="btnLogin">Se connencter</button>
      </form>
    </div>
  );
};

export default Formulaire;
