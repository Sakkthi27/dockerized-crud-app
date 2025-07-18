import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemForm from './ItemForm';

const API_URL = "http://localhost:3000/items";

function App() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const res = await axios.get(API_URL);
    setItems(res.data);
  };

  const handleAdd = async (item) => {
    await axios.post(API_URL, item);
    getItems();
  };

  const handleUpdate = async (id, updatedItem) => {
    await axios.put(`${API_URL}/${id}`, updatedItem);
    getItems();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    getItems();
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h2>CRUD App</h2>
      <ItemForm onAdd={handleAdd} />
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <b>{item.name}</b>: {item.description}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
            <button onClick={() => handleUpdate(item._id, { name: item.name + "!", description: item.description })}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
