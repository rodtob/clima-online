

const CardDia=({temperatura, enfaren, eldia, imagen})=>{
    return(
        <article className='undia'>
            <h4 className='undia--title'>{eldia}</h4>
            <img className="imagenClima" src={imagen}/>
            <p>{temperatura} °C</p>
            <p>{((temperatura * 9/5) + 32 ).toFixed(1)} °F</p>
        </article>)
}

export default CardDia