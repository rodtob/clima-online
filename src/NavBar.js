import React, {useState, setState, useEffect}from 'react';
import mundito from "./assets/mundito.svg";
import Login from './Login'




const NavBar =()=> {

 const [mostrarLogin, setMostrarLogin] = useState(false)
 const [usuarioActivo, setUsuarioActivo] = useState(false)

  const onButtonClick = ()=>{
        setMostrarLogin(!mostrarLogin)
    }

    useEffect(()=>{
            let data = sessionStorage.getItem('usuarioActivo')
          
            if(data){
              setUsuarioActivo(data)
            }
      setMostrarLogin(mostrarLogin)

    },[usuarioActivo, mostrarLogin])
  
    return(
    <React.Fragment>
      <nav className='navBar'>
        <section className='logoNombre'>
          <img src={mundito} alt='logo' className='logo'/>
          <p>CLIMA ONLINE</p>
        </section>
        <p className='login' onClick={onButtonClick}>{usuarioActivo?usuarioActivo:'iniciar sesión'}</p>
      </nav>
      {mostrarLogin?<div className='ContenedorLogin'><Login onChange={(value)=>setMostrarLogin(value)}  /><button className='laX' onClick={onButtonClick}>X</button></div>:null}
      </React.Fragment>
    )
}

export default NavBar