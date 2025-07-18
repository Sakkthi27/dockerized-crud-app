import React, { useState } from 'react';

function ItemForm({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add</button>
    </form>
  );
}

export default ItemForm;
