import React from 'react';
import mundito from "./assets/mundito.svg";
import Login from './Login'
import {Component} from 'react'



class NavBar  extends Component{

  constructor(props){
    super(props)
    this.state ={
      mostrarLogin: false,
      usuarioActivo: 'INICIAR SESIÓN'
    }
    this.onButtonClick = ()=>{
      this.setState(prevState => ({
        mostrarLogin: !prevState.mostrarLogin
      }));
    }
  }
  componentDidMount(){
    if(sessionStorage.usuarioActivo){
      this.setState({usuarioActivo:sessionStorage.getItem('usuarioActivo')})
    }
  }
render(){
    return(
    <React.Fragment>
      <nav className='navBar'>
        <section className='logoNombre'>
          <img src={mundito} alt='logo' className='logo'/>
          <p>CLIMA ONLINE</p>
        </section>
        <p className='login' onClick={this.onButtonClick}>{this.state.usuarioActivo}</p>
      </nav>
      {this.state.mostrarLogin?<div className='ContenedorLogin'><Login/><button className='laX' onClick={this.onButtonClick}>X</button></div>:null}
      </React.Fragment>
    )
}
}
export default NavBar