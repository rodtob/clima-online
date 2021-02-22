import React, {useState, setState, useEffect}from 'react';
import mundito from "./assets/mundito.svg";
import Login from './Login'




const NavBar =( {usuario})=> {

 const [mostrarLogin, setMostrarLogin] = useState(false)


  const onButtonClick = ()=>{
        setMostrarLogin(!mostrarLogin)
    }

    useEffect(()=>{
      setMostrarLogin(mostrarLogin)
    },[])
  
    return(
    <React.Fragment>
      <nav className='navBar'>
        <section className='logoNombre'>
          <img src={mundito} alt='logo' className='logo'/>
          <p>CLIMA ONLINE</p>
        </section>
        <p className='login' onClick={onButtonClick}>{usuario?usuario:'iniciar sesión'}</p>
      </nav>
      {mostrarLogin?<div className='ContenedorLogin'><Login/><button className='laX' onClick={onButtonClick}>X</button></div>:null}
      </React.Fragment>
    )
}

export default NavBar