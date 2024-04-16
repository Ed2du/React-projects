import './Botao.css';

const Botao = (props) => {
    return (
        <button className='button-submit'>
            {props.children}
        </button>
    )
}

export default Botao;