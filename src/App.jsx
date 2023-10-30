import { useState, useEffect } from 'react';
import { Header } from './componentes/Header';
import { Footer } from './componentes/Footer';
import axios from 'axios'

export const App = () => {

  const [lista , setLista] = useState ('');
  /* const [title, setTitle] = useState ('');
  const [author, setAuthor]  = useState(''); */

  const [dataForm, setDataForm] = useState({ 
    title: '',
    author: '',
  });

/* Añadiendo botón */

const handle = (e) => {
  console.log(e);
  e.preventDefault();

  const addPost = async () => {
    const response = await axios.post('http://localhost:3000/posts', dataForm);
    setLista ([...lista, response.data]);
    console.log(response.data);
  };
  addPost();  
};

const handleChange = (e) => {
  setDataForm ({
    ...dataForm,
    [e.target.name]: e.target.value,
    title: 'El principito'
    //name indica la propiedad en la que se va a guardar. Aparece en return como atributo.
    //Value es el contenido que voy a guardar.
    //El valor que ingreso en dicho campo, se va a guardar en la propiedad que tenga el nombre del campo.
  });
};

//1RA FORMA: UTILIZANDO FETCH PARA LEER INFORMACIÓN:
/* useEffect(() => {

  const readPosts = async () => {
    const response = await fetch ('http://localhost:3000/posts');
    const data = await response.json();
    setLista(data);
  };
  readPosts();

  }, []); 
 */
/* 
  use Effect Se aplica cuando se cargan componentes */

  //2DA FORMA: UTILIZANDO AXIOS

  useEffect(() => {

    const readPosts = async () => {
      const response = await axios.get('http://localhost:3000/posts');
      setLista(response.data);
      console.log(response.data);
    };
    readPosts();
  
    }, []); 

  return (
    <section>
      holi a todos
      <Header/>
      <Footer/>
      <form onSubmit={handle}>

        <div>
          <label htmlFor="">Ingresar title</label>
          <input type="text" value={dataForm.title} onChange={handleChange} name= {'title'}/>
        </div>

        <div>
          <label htmlFor="">Ingresar author</label>
          <input type="text" value={dataForm.author} onChange={handleChange} name={'author'}/>
        </div>

        <div>
          <button type='submit' onClick={handle}>Enviar</button>         
        </div>       
      </form>
      <section>
        <header>
          <h2>Listado de información</h2>

        {lista.length > 0 ? (

        lista.map((listas) =>

        <li key={listas.id}> {listas.title} - {listas.author} </li>)

        ) : (
        <p> No hay elementos </p>         
        )}
        </header>
      </section>
           
    </section>
  )
}

//1RA FORMA: UTILIZANDO FETCH

/* return (
  <section>
    holi a todos
    <Header/>
    <Footer/>
    <form onSubmit={handle}>

      <div>
        <label htmlFor="">Ingresar title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>

      <div>
        <label htmlFor="">Ingresar author</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      </div>

      <div>
        <button type='submit' disabled= {!title || !author} onClick={handle}>Enviar</button>         
      </div>       
    </form>
    <section>
      <header>
        <h2>Listado de información</h2>

      {lista.length > 0 ? (

      lista.map((listas) =>

      <li key={listas.id}> {listas.title} - {listas.author} </li>)

      ) : (
      <p> No hay elementos </p>         
      )}
      </header>
    </section>
         
  </section>

)

} */
