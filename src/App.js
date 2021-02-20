import sun from './assets/sun.svg'
import {Component} from 'react';


const key = 'ca39e07beb5a688b4912b59a38e08884'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      ciudad: '',
      pais:'',
      temperatura:'',
      humedad:'',
      viento:''
    }
  }

  
  componentDidMount(){
    const getClima = async()=>{
      const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=parana,ar&appid=${key}`)
  
      const respuesta = await apiCall.json()
      console.log(respuesta)
      this.setState({
        ciudad: respuesta.city.name,
        pais: respuesta.city.country,
        temperatura: Math.floor((respuesta.list[0].main.temp)-273.15),
        viento: respuesta.list[0].wind.speed,
        humedad: respuesta.list[0].main.humidity
      })
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
                    <p className="paisciudad">{this.state.pais}</p>
                    <p className="paisciudad">{this.state.ciudad}</p>
                    <p className='dia'>el dia</p>
                    <p className="estado-dia">soleado</p>
                    <p className='temperatura'>{Math.round(this.state.temperatura)}</p>
                    <p className='en-faren'>{((this.state.temperatura * 9/5) + 32 ).toFixed(1)} F</p>

                </section>

                <section className="columnaReporte right" >
                    <img src={sun} className="imagenClima"/>
                    <p className='detalles-reporte'>Probabilidad de precipitaciones</p>
                    <p className='detalles-reporte'>Humedad: {this.state.humedad} %</p>
                    <p className='detalles-reporte'>Viento a: {this.state.viento} km/h </p>
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
