import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
/**Permet d'afficher l'alert avec le message et le style envoyé, le changement de la state se fait dans AlertState et alertReducer
 *le resultat est contenue dans la state 'alert' devenue accessible suite a l'appel de context
 *un setTimeout permet d'enlever le popup apres 5 sec
 */
export const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};
