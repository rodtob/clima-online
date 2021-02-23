import React,{useState, useEffect} from 'react'
import NavBar from './NavBar'
import CardLeft from './CardLeft'
import CardRight from './CardRight'
import CardDia from './CardDia'
import Footer from './Footer'

import swal from 'sweetalert'


const key = 'e9049373eb5752e491d66bbedd958627'

const dias_semana= ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']

const fecha = new Date();
const eldia = fecha.getDay();
let semanaActual= []

const saberSemana =(eldia)=>{
  for (eldia; eldia < 11; eldia++) {
    semanaActual.push(dias_semana[(eldia+1) % 7]);
  }
}

const App = () => {

  const [ciudad, setCiudad] = useState(false)
  const [pais, setPais] = useState(false)
  const [temperatura, setTemperatura] = useState(0)
  const [humedad, setHumedad] = useState(0)
  const [viento, setViento] = useState(0)
  const [pop, setPop] = useState(0)
  const [dia, setDia] = useState(dias_semana[eldia])
  const [descripcion, setDescripcion] = useState('-----')
  const [icono, setIcono] = useState('01d')
  const [semana, setSemana] = useState('')

    
      saberSemana(eldia)
     

      const getClima = (e)=>{
        e.preventDefault()
        setPais(e.target.elements.pais.value)
        setCiudad(e.target.elements.ciudad.value)
      }


      useEffect(()=>{
            let data = localStorage.getItem('ultimoClima')
            let dataParse = JSON.parse(data)
           
            if(dataParse){
              setPais(dataParse.pais)
              setCiudad(dataParse.ciudad)
          }
            
          },[])


        
        useEffect(async()=>{
        
          if(pais){

              
                const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${pais}&appid=${key}&lang=sp`)
                
                try{

                  const respuesta = await apiCall.json()
                  
                  
                  
                  const [,,,,,,, primero,,,,,,,,segundo,,,,,,,,tercero,,,,,,,,cuarto,,,,,,,,quinto] = respuesta.list
                  
                  
                  localStorage.setItem('ultimoClima', JSON.stringify({pais, ciudad}))
                  
                  setCiudad(respuesta.city.name)
                  setPais(respuesta.city.country)
                  setTemperatura(Math.floor((respuesta.list[0].main.temp)-273.15))
                  setViento(respuesta.list[0].wind.speed)
                  setHumedad(respuesta.list[0].main.humidity)
                  setPop(respuesta.list[0].pop)
                  setDescripcion(respuesta.list[0].weather[0].description)
                  setIcono(respuesta.list[0].weather[0].icon)
                  setSemana([primero, segundo, tercero, cuarto, quinto])
                } catch(err){
                  swal({title:'Esa ciudad no existe', icono:'error', button:'aceptar'})
                }
                }}, [pais, ciudad] )



  return (
    <div className="App">
        <NavBar/>
     <main className="main"> 
     <h1 className='titulo'> SERVICIO DEL CLIMA</h1>

          <article className='row'>

                  <section className='cards'>

                    <h3 className="titulo--section">Seleccioná la zona</h3>
                    <form onSubmit={getClima}   className="contBuscar">
                      <label className="label left">País</label>
                      <input className="elinput" required name='pais' pattern="[a-zA-Z0-9\s]+" type='text' placeholder="Seleccioná un país" />
                      <label className="label left">Ciudad</label>
                      <input className="elinput" required name='ciudad' pattern="[a-zA-Z0-9\s]+" type="text" placeholder="Seleccioná una ciudad" />
                      <input className="submit" type='submit' value="BUSCAR"/>
                    </form>
                  </section>


                  <section className='cards'>
                    <h3 className="titulo--section">Reporte</h3>
                      <article className='contReporte'>

                        <CardLeft pais ={pais} ciudad={ciudad} dia={dia}
                        descripcion={descripcion} temperatura={temperatura}/>

                        <CardRight pop={pop} humedad={humedad} viento={viento} icono={icono} />

                      </article>


                  </section>
          </article>

           <section className='row'>

              {
                semanaActual.slice(0,5).map((eldia,i) => {
                    return (
                      <CardDia eldia={eldia} imagen={typeof( semana[i]) != 'undefined'?`http://openweathermap.org/img/wn/${semana[i].weather[0].icon}@2x.png`:'http://openweathermap.org/img/wn/01d@2x.png'} key={i} temperatura={ typeof( semana[i]) != 'undefined'?
                        Math.floor((semana[i].main.temp)-273.15):'0'} />
                      )
                })
                } 
            
            </section>
     </main>
     <Footer/>

    </div>
  );
}


export default App;
