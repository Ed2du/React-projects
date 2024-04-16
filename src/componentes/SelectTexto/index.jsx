import './SelectTexto.css';
import '../Input/Input.css';

const SelectTexto = (props) => {
    return (
        <div className='InputBox'>
            <label className='input-label'>
                {props.label}
            </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} className='input-text' required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default SelectTexto;
