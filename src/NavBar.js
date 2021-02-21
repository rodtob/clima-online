import mundito from "./assets/mundito.svg";

const NavBar =() =>{
    return(
      <nav className='navBar'>
        <section className='logoNombre'>
          <img src={mundito} alt='logo' className='logo'/>
          <p>CLIMA ONLINE</p>
        </section>
        <p className='login'>login</p>
      </nav>
    )
}

export default NavBar