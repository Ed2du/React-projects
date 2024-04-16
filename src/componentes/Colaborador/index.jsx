import './Colaborador.css'

const Colaborador = ({nome, cargo, img, bold}) => {
    return (
        <div className='card'>
            <div className='bold-part' style={{backgroundColor: bold}}>
                <img src={img} alt="Imagem do colaborador" className='Img-card'/>
            </div>
            <div className='normal-part'>
                <h1 className='Card-title'>
                    {nome}
                </h1>
                <h3 className='Card-description'>
                    {cargo}
                </h3>
            </div>
        </div>
    )
}

export default Colaborador