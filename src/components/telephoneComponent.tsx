import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTelephone } from '../redux/actions';

const TelephoneComponent = () => {
  const [telephone, setTelephone] = useState('');
  const dispatch = useDispatch();

  const resetForm = () => {
    setTelephone('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateTelephone(parseInt(telephone)));
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="telephone">Telephone</label>
        <br />
        <input
          type="number"
          id="telephone"
          value={telephone}
          onChange={e => setTelephone(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default TelephoneComponent;