export interface State {
    name: string;
    surname: string;
    address: string;
    telephone: number | null;
  }
  
  export interface UpdateNameAction {
    type: 'UPDATE_NAME';
    payload: {
        name: string;
        surname: string;
    }
  }
  
  export interface UpdateAddressAction {
    type: 'UPDATE_ADDRESS';
    payload: string;
  }
  
  export interface UpdateTelephoneAction {
    type: 'UPDATE_TELEPHONE';
    payload: number;
  }
  
  export type Action =
    | UpdateNameAction
    | UpdateAddressAction
    | UpdateTelephoneAction;
  