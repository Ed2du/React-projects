import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Formulario';
import Times from './componentes/Times';
import TimesText from './componentes/TimesText';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278' ,
    },
    
    {
      nome: 'Front-end',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA' ,
    },
    
    {
      nome: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157' ,
    },
    
    {
      nome: 'DevOps',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69' ,
    },
    
    {
      nome: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF' ,
    },

    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05' ,
    },

    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29' ,
    }

  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaborador);
  }

  return (
    <div className="App">
      <Banner/>
      <Form times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoColaboradorAdicionado(colaborador)}/>
      <TimesText/>
      {times.map(time => 
      <Times key={time.nome}
      titulo={time.nome}
      background={time.corPrimaria}
      cor={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
