import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateName } from '../redux/actions';

const NameComponent = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const dispatch = useDispatch();

  const resetForm = () => {
    setName('');
    setSurname('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateName(name, surname));
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <br />
        <input
          type="surname"
          id="surname"
          value={surname}
          onChange={e => setSurname(e.target.value)}
          required
        />
      </div>
      <br />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NameComponent;