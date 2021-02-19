import sun from './assets/sun.svg'


function App() {
  return (
    <div className="App">
      <navbar className='navBar'>
        <p>logo</p>
        <p>login</p>
      </navbar>
     <h1 className='titulo'> Servicio del Clima</h1>

    <article className='row'>

            <section className='cards'>

              <h3>Seleccioná la zona</h3>
              <article className="contBuscar">
              <label className="left">País</label>
              <input placeholder="Seleccioná un país" />
              <label className="left">Ciudad</label>
              <input placeholder="Seleccioná una ciudad" />
              <input type='submit' value="Buscar"/>
              </article>
            </section>


            <section className='cards'>
              <h3>Reporte</h3>
              <article className='contReporte'>

                <section className="left">
                    <p>Pais</p>
                    <p>Ciudad</p>
                    <p>Dia</p>
                    <p>soleado</p>
                    <p>temperatura</p>
                    <p>en farenhait</p>

                </section>

                <section className='right' >
                    <img src={sun} className="imagenClima"/>
                    <p>Probabilidad de precipitaciones</p>
                    <p>Humedad: </p>
                    <p>Viento a: </p>
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

    </div>
  );
}

export default App;
