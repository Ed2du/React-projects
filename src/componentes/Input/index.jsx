import './Input.css';

const Input = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className='InputBox'>

            <label className='input-label'>
                {props.label}
            </label>

            <input 
            value={props.valor}
            onChange={aoDigitado}
            required={props.obrigatorio}
            className='input-text'
            placeholder={props.placeholder}/>

        </div>
    )
};

export default Input;