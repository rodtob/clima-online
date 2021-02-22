import {Component} from 'react'
import NavBar from './NavBar'
import CardLeft from './CardLeft'
import CardRight from './CardRight'
import CardDia from './CardDia'
import Footer from './Footer'


const key = 'ca39e07beb5a688b4912b59a38e08884'

const semana= ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']

const fecha = new Date();
const eldia = fecha.getDay();
let semanaActual= []

const saberSemana =(eldia)=>{
  for (eldia; eldia < 11; eldia++) {
    semanaActual.push(semana[(eldia+1) % 7]);
  }
}

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      ciudad: '',
      pais:'',
      temperatura:0,
      humedad:0,
      viento:0,
      pop: 0,
      dia: semana[eldia],
      descripcion: '-----',
      icono: '01d',
      semana:''
    }
      saberSemana(eldia)
      this.getClima = async(e)=>{

        let pais = e.target.elements.pais.value
        let ciudad= e.target.elements.ciudad.value

        e.preventDefault()
        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${pais}&appid=${key}&lang=sp`)
        
        
        const respuesta = await apiCall.json()
  
        const [,,,,,,, primero,,,,,,,,segundo,,,,,,,,tercero,,,,,,,,cuarto,,,,,,,,quinto] = respuesta.list
        this.setState({
          ciudad: respuesta.city.name,
          pais: respuesta.city.country,
          temperatura: Math.floor((respuesta.list[0].main.temp)-273.15),
          viento: respuesta.list[0].wind.speed,
          humedad: respuesta.list[0].main.humidity,
          pop: respuesta.list[0].pop,
          descripcion: respuesta.list[0].weather[0].description,
          icono: respuesta.list[0].weather[0].icon,
          semana: [primero, segundo, tercero, cuarto, quinto]
        })
      }
        
    }

      componentDidMount(){
        let data =localStorage.getItem('uTiempo')
        if (data){
          console.log('hay usuario')
          let dataparse =JSON.parse(data)
          this.setState({ciudad:dataparse.ciudad,
             pais:dataparse.pais, 
             temperatura:dataparse.temperatura,
             viento: dataparse.viento,
             humedad:dataparse.humedad,
             pop:dataparse.pop,
             descripcion:dataparse.descripcion,
             icon:dataparse.icon,
             semana:dataparse.semana
            })
          
        }else{
          console.log('no hay usuario')
        }
      }

      componentDidUpdate(prevState){
        if(prevState !== this.state) {
          localStorage.setItem('uTiempo', JSON.stringify(this.state))
        }
      }



render() {
  return (
    <div className="App">
        <NavBar/>
     <main className="main"> 
     <h1 className='titulo'> SERVICIO DEL CLIMA</h1>

          <article className='row'>

                  <section onSubmit={this.getClima} className='cards'>

                    <h3 className="titulo--section">Seleccioná la zona</h3>
                    <form onSubmit={this.getClima}  className="contBuscar">
                      <label className="label left">País</label>
                      <input className="elinput" required name='pais' type='text' placeholder="Seleccioná un país" />
                      <label className="label left">Ciudad</label>
                      <input className="elinput" required name='ciudad' type="text" placeholder="Seleccioná una ciudad" />
                      <input className="submit" type='submit' value="BUSCAR"/>
                    </form>
                  </section>


                  <section className='cards'>
                    <h3 className="titulo--section">Reporte</h3>
                      <article className='contReporte'>

                        <CardLeft pais ={this.state.pais} ciudad={this.state.ciudad} dia={this.state.dia}
                        descripcion={this.state.descripcion} temperatura={this.state.temperatura}/>

                        <CardRight pop={this.state.pop} humedad={this.state.humedad} viento={this.state.viento} icono={this.state.icono} />

                      </article>


                  </section>
          </article>

            <section className='row'>

              {
                semanaActual.slice(0,5).map((eldia,i) => {
                    return (
                      <CardDia eldia={eldia} imagen={typeof( this.state.semana[i]) != 'undefined'?`http://openweathermap.org/img/wn/${this.state.semana[i].weather[0].icon}@2x.png`:'http://openweathermap.org/img/wn/01d@2x.png'} key={i} temperatura={ typeof( this.state.semana[i]) != 'undefined'?
                        Math.floor((this.state.semana[i].main.temp)-273.15):'0'} />
                      )
                })
                } 
            
            </section>
     </main>
     <Footer/>

    </div>
  );
}
}

export default App;
