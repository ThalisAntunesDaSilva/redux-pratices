import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

//Um reducer sempre tem um initial state passando o atualizando via redux e a funcão redutora
//

const initialState = {
    newValue: 'Atualizado via redux'
};




export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_VALUE:
            return state.newValue = action.newValue
            default:
                 return state;
    };
   
}

