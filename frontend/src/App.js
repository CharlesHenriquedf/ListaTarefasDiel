import './App.css';
import React, { useState, useEffect } from 'react';
import { post, request, update, deleteTask, requestDia } from './services/api';

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState({
    titulo: '',
    descrição: '',
    dia: '',
    mes: '',
    ano: '',
    hora: '',
    duração: ''
  });
  const [controll, setControll] = useState(false)

  useEffect(() => {
    request('/')
      .then(response => {
        setList(response);
        }
      );
    });

  const handleChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
  };

  const postItem = async (e) => {
    e.preventDefault();
    const data = await post('/', input);
    setInput({
      titulo: '',
      descrição: '',
      dia: '',
      mes: '',
      ano: '',
      hora: '',
      duração: ''
    });
  };

  const updateTask = async (url, task) => {
    setInput({
      titulo: `${task.titulo}`,
      descrição: `${task.descrição}`,
      dia: `${task.dia}`,
      mes: `${task.mes}`,
      ano: `${task.ano}`,
      hora: `${task.descrição}`,
      duração: `${task.descrição}`,
      url: url,
    });
   setControll(true)
  };

  const updateItem = async (e) => {
    e.preventDefault();
    const data = await update(input.url, input);
    setInput({
      titulo: '',
      descrição: '',
      dia: '',
      mes: '',
      ano: '',
      hora: '',
      duração: ''
    });
  };

  return (
    <>
      <div id="div-page">
      <div className='div-form'>
      <div className='form-task'>
        <label>
            Título
            <input
              type="text"
              onChange={ (e) => handleChange(e) }
              name="titulo"
              value={input.titulo}
            />
            <button
            type="button"
            onClick={ (e) => alert(input.titulo) }
            id="button-add"
            className="button-form"
          >
            BUSCAR
          </button>
          </label>
          <label>
            Dia
            <input
              type="text"
              onChange={ (e) => handleChange(e) }
              name="dia"
              value={input.dia}
            />
               <button
            type="button"
            onClick={ (e) => request(`/${input.dia}`) }
            id="button-add"
            className="button-form"
          >
            BUSCAR
          </button>
          </label>
          <label>
            Hora
            <input
              type="text"
              onChange={ (e) => handleChange(e) }
              name="hora"
              value={input.hora}
            />
               <button
            type="button"
            onClick={ (e) => alert(input.hora) }
            id="button-add"
            className="button-form"
          >
            BUSCAR
          </button>
          </label>
         
        </div>
      </div>
      <div className='div-form'>
        <div className='form-task'>
          <label>
            Título
            <input
              type="text"
              onChange={ (e) => handleChange(e) }
              name="titulo"
              value={input.titulo}
            />
          </label>
          <label>
            Descrição
            <input
              type="text"
              onChange={ (e) => handleChange(e) }
              name="descrição"
              value={input.descrição}
            />
          </label>
          <label>
            Dia
            <input
              type="text"
              onChange={ (e) => handleChange(e) }
              name="dia"
              value={input.dia}
            />
          </label>
          <label>
            Mês
            <input
              type="text"
              onChange={ (e) => handleChange(e) }
              name="mes"
              value={input.mes}
            />
          </label>
          <label>
            Ano
            <input
              type="text"
              onChange={ (e) => handleChange(e) }
              name="ano"
              value={input.ano}
            />
          </label>
          <label>
            Hora
            <input
              type="text"
              onChange={ (e) => handleChange(e) }
              name="hora"
              value={input.hora}
            />
          </label>
          <label>
            Duração
            <input
              type="text"
              onChange={ (e) => handleChange(e) }
              name="duração"
              value={input.duração}
            />
          </label>
          {
            controll === false &&
            <button
            type="button"
            onClick={ (e) => postItem(e) }
            id="button-add"
            className="button-form"
          >
            SALVAR
          </button>
          }
          {
            controll === true &&
            <button
            type="button"
            onClick={ (e) => updateItem(e) }
            id="button-update"
            className="button-form"
          >
            ATUALIZAR
          </button>
          }
        </div>
      </div>
    </div>
    {false}
    <div className="item-task">
      {list.map(item => (
        <div key={item._id} className="task">
          <h1>Tarefa</h1>
          <div className="content-task">
            <h3>{item.titulo}</h3>
            <p>Descrição: {item.descrição}</p>
            <p>Dia: {item.dia}</p>
            <p>Mês: {item.mes}</p>
            <p>Ano: {item.ano}</p>
            <p>Hora: {item.hora}</p>
            <p>Duraçaõ: {item.duração}</p>
            </div>
          <button
            type="button"
            onClick={ () => deleteTask(`/${item._id}`) }
            className="button-form"
            id="delete-btn"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={ () => updateTask(`/${item._id}`, item) }
            className="button-form"
            id="update-btn"
          >
            Edit
          </button>
        </div>
      ))}
      </div>
    </>
  )
}


export default App;
