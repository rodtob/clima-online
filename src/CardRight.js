const CardRight = ({icono, pop, humedad, viento }) =>{
    return(
    <section className="columnaReporte right" >
        <img src={`http://openweathermap.org/img/wn/${icono}@2x.png`} className="imagenClima"/>
    <   p className='detalles-reporte'>Probabilidad de precipitaciones: {pop*100}%</p>
    <   p className='detalles-reporte'>Humedad: {humedad} %</p>
    <   p className='detalles-reporte'>Viento a: {viento} km/h </p>
    </section>

    )
}

export default CardRight