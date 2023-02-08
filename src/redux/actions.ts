import {
    UpdateNameAction,
    UpdateAddressAction,
    UpdateTelephoneAction
  } from '../interfaces';

export const updateName = (name: string, surname: string): UpdateNameAction => ({
    type: 'UPDATE_NAME',
    payload: {
        name, surname 
    }
});

export const updateAddress = (address: string): UpdateAddressAction => ({
    type: 'UPDATE_ADDRESS',
    payload: address
});

export const updateTelephone = (telephone: number): UpdateTelephoneAction => ({
    type: 'UPDATE_TELEPHONE',
    payload: telephone
});