import React, { Fragment, useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');
  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className='text-center my-5'>Input Todo</h1>
      <form className='d-flex' onSubmit={onFormSubmit}>
        <input
          type='text'
          className='form-control'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn btn-success ml-1'>Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;