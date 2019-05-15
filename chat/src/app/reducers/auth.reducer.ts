import { Action } from '@ngrx/store';



export interface State {
  loggedIn: boolean;
  userName: string;
}

const initialState: State = {
  loggedIn: true,
  userName: 'DefinitelyNotJeff'
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
