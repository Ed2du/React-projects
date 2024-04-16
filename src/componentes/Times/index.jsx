import Colaborador from '../Colaborador';
import './Times.css'

const Times = (props) => {
    return (
        (props.colaboradores.length > 0) &&
         <section className='Section-box' style={{backgroundColor: props.background}}>
            <h1 className='Section-title' style={{borderColor: props.cor}}>
                {props.titulo}
            </h1>
            <div className='Cards-div'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} img={colaborador.img} cargo={colaborador.cargo} bold={props.cor}/>)}
            </div>
        </section>
    )
}

export default Times;