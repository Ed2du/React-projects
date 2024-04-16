import { useState } from 'react';
import './Formulario.css';
import Input from '../Input';
import SelectTexto from '../SelectTexto';
import Botao from '../Botao';

const Form = (props) => {

    // Para enviar as informações sem recarregar a pagina
    const aoEnviar = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            img,
            time
        });
        setImg('');
        setNome('');
        setTime('');
        setCargo('');
    }

    // Para salvar o estado das informações ao muda-lás
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [img, setImg] = useState('');
    const [time, setTime] = useState('');

    return (
        <form
        className='Form-content'
        onSubmit={aoEnviar}>
            <h1
            className='Form-title'>
                Preencha os dados para criar o card do colaborador.
            </h1>

            <Input
            valor={nome}
            aoAlterado={valor => setNome(valor)}
            obrigatorio={true}
            label="Nome"
            placeholder="Digite seu nome"/>

            <Input
            valor={cargo}
            aoAlterado={valor => setCargo(valor)}
            obrigatorio={true}
            label="Cargo"
            placeholder="Digite seu cargo"/>

            <Input
            valor={img}
            aoAlterado={valor => setImg(valor)}
            label="Imagem"
            placeholder="Informe o endereço da imagem"/>

            <SelectTexto
            valor={time}
            aoAlterado={valor => setTime(valor)}
            label="Time"
            itens={props.times}
            obrigatorio={true}/>

            <Botao>
                Criar Card
            </Botao>
        </form>
    );
};

export default Form;