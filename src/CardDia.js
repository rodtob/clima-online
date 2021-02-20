

const CardDia=({temperatura, enfaren, eldia, imagen})=>{
    return(
        <article className='undia'>
            <h4 className='undia--title'>{eldia}</h4>
            <img className="imagenClima" src={imagen}/>
            <p>{temperatura}</p>
            <p>{enfaren}</p>
        </article>)
}

export default CardDia