import {
    UpdateNameAction,
    UpdateSurnameAction,
    UpdateAddressAction,
    UpdateTelephoneAction
  } from '../interfaces';

export const updateName = (name: string): UpdateNameAction => ({
    type: 'UPDATE_NAME',
    payload: name
});

export const updateSurname = (surname: string): UpdateSurnameAction => ({
    type: 'UPDATE_SURNAME',
    payload: surname
});

export const updateAddress = (address: string): UpdateAddressAction => ({
    type: 'UPDATE_ADDRESS',
    payload: address
});

export const updateTelephone = (telephone: string): UpdateTelephoneAction => ({
    type: 'UPDATE_TELEPHONE',
    payload: telephone
});
  


