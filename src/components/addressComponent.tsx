import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAddress } from '../redux/actions';

const AddressComponent = () => {
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();

  const resetForm = () => {
    setAddress('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateAddress(address));
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="address">Address</label>
        <br />
        <input
          type="text"
          id="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AddressComponent;