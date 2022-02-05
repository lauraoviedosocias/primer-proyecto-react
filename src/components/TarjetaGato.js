import "./TarjetaGato.css"

const TarjetaGato = ({nombre, descripcion, imagen}) => {

    return (

        <div className="card">
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <img src={imagen}/>


        </div>


    )
}

export default TarjetaGato;