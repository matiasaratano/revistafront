import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Header from './components/Header';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  const [id, setId] = useState('0');
  const [name, setName] = useState('');
  const [url_image, setUrl] = useState('');
  const [price, setPrice] = useState('0');
  const [discount, setDiscount] = useState('0');
  const [category, setCategory] = useState('0');

  useEffect(() => {
    Axios.get('http://localhost:3001/getUsers').then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post('http://localhost:3001/createUser', {
      id,
      name,
      url_image,
      price,
      discount,
      category,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          id,
          name,
          url_image,
          price,
          discount,
          category,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        <Header></Header>
        <div className="contenedor">
          {listOfUsers.map((user) => {
            return (
              <div className="card itemCard">
                <div className="contenedorImg">
                  <img className="img" src={user.url_image} alt="imagen" />
                </div>

                <div>
                  <h3 className="titulo">{user.name}</h3>
                </div>

                <div>
                  <p>Tel: {user.price}</p>
                </div>

                <div className="ButtonBuy">
                  <div>+ INFO</div>
                </div>
              </div>

              /* 
            <div>
              <h1>ID: {user.id}</h1>
              <h1>NAME: {user.name}</h1>
              <h1>URL_IMAGE: {user.url_image}</h1>
              <h1>PRICE: {user.price}</h1>
              <h1>DISCOUNT: {user.discount}</h1>
              <h1>CATEGORY: {user.category}</h1>
            </div>
            */
            );
          })}
        </div>
      </div>
      <div className="div-add">
        <input
          type="number"
          placeholder="ID..."
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="URL..."
          onChange={(event) => {
            setUrl(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Price..."
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Discount..."
          onChange={(event) => {
            setDiscount(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Category..."
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default App;
