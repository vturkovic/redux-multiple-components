export interface State {
    name: string;
    surname: string;
    address: string;
    telephone: string;
  }
  
  export interface UpdateNameAction {
    type: 'UPDATE_NAME';
    payload: string;
  }
  
  export interface UpdateSurnameAction {
    type: 'UPDATE_SURNAME';
    payload: string;
  }
  
  export interface UpdateAddressAction {
    type: 'UPDATE_ADDRESS';
    payload: string;
  }
  
  export interface UpdateTelephoneAction {
    type: 'UPDATE_TELEPHONE';
    payload: string;
  }
  
  export type Action =
    | UpdateNameAction
    | UpdateSurnameAction
    | UpdateAddressAction
    | UpdateTelephoneAction;
  