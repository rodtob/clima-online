import sun from './assets/sun.svg'
import {Component} from 'react';


const key = 'ca39e07beb5a688b4912b59a38e08884'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

  
  componentDidMount(){
    const getClima = async()=>{
      const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Liverpool,uk&appid=${key}`)
  
      const respuesta = await apiCall.json()
      console.log(respuesta)
    }
    
    getClima()
  }


render() {
  return (
    <div className="App">
      <nav className='navBar'>
        <p>logo</p>
        <p>login</p>
      </nav>
     <main className="main"> 
     <h1 className='titulo'> SERVICIO DEL CLIMA</h1>

    <article className='row'>

            <section className='cards'>

              <h3 className="titulo--section">Seleccioná la zona</h3>
              <article className="contBuscar">
              <label className="label left">País</label>
              <input className="elinput" type='text' placeholder="Seleccioná un país" />
              <label className="label left">Ciudad</label>
              <input className="elinput" type="text" placeholder="Seleccioná una ciudad" />
              <input className="submit" type='submit' value="BUSCAR"/>
              </article>
            </section>


            <section className='cards'>
              <h3 className="titulo--section">Reporte</h3>
              <article className='contReporte'>

                <section className="columnaReporte left">
                    <p className="paisciudad">Pais</p>
                    <p className="paisciudad">Ciudad</p>
                    <p className='dia'>viernes</p>
                    <p className="estado-dia">soleado</p>
                    <p className='temperatura'>22</p>
                    <p className='en-faren'>75</p>

                </section>

                <section className="columnaReporte right" >
                    <img src={sun} className="imagenClima"/>
                    <p className='detalles-reporte'>Probabilidad de precipitaciones</p>
                    <p className='detalles-reporte'>Humedad: </p>
                    <p className='detalles-reporte'>Viento a: </p>
                </section>
            </article>


        </section>
    </article>

     <section className='row'>
       <article>
         <h4>Lunes</h4>
         <img className="imagenClima" src={sun}/>
        </article>
        <article>
         <h4>Lunes</h4>
         <img className="imagenClima" src={sun}/>
        </article>
        <article>
         <h4>Lunes</h4>
         <img className="imagenClima" src={sun}/>
        </article>
        <article>
         <h4>Lunes</h4>
         <img className="imagenClima" src={sun}/>
        </article>
        <article>
         <h4>Lunes</h4>
         <img className="imagenClima" src={sun}/>
        </article>
     </section>
     </main>
     <footer className="navBar footer">
       <p>Copyrigth 2021 All rights register</p>
       <p>RToblli</p>
     </footer>

    </div>
  );
}
}

export default App;
