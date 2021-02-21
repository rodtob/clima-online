const CardLeft  = ({pais, ciudad, dia, descripcion, temperatura}) =>{
    return(                
    
    <section className="columnaReporte left">
        <p className="paisciudad">{pais}</p>
        <p className="paisciudad">{ciudad}</p>
        <p className='dia'>{dia}</p>
        <p className="estado-dia">{descripcion}</p>   
    <section className='grados'>
        <p className='temperatura'>{Math.round(temperatura)}</p>
        <p>°C</p>
    </section>
        <p className='en-faren'>{((temperatura * 9/5) + 32 ).toFixed(1)} °F</p>

    </section>
)
}

export default CardLeft