import React from 'react'
import PopUp from './Components/PopUp/PopUp'
import Cookies from './assets/images/Saly-27.png'
import Alarm from './assets/images/Frame.png'
import './sass/main.scss';

function App() {
  const cookiesTxt = "Utilizamos cookies para mejorar la experiencia del usuario, la analítica y el marketing."
  const alarmTxt = "¡Se cerrará la sesión inmediatamente!"

  return (
    <div className="App">
      <PopUp image={Cookies} text={cookiesTxt} btnStyle={"danger"} txtBtn={"¡Eso está bien!"} />
      <PopUp image={Alarm} text={alarmTxt} btnStyle={"dark"} txtBtn={"Ampliar sesión"} />
    </div>
  )
}

export default App
