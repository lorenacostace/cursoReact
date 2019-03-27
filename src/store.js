import {combineReducers, createStore} from "redux";

const initialState = {
    characters: []
};

//Actions
export const actions = {
    addChar: (ch) => {
        return{
            type: "ADD_CHAR",
            payload: ch
        }
    },

    setChars: (characters) => {
        return{
            type: "SET_CHAR",
            payload: { characters: characters } //Lista en la que estan todos los personajes
        };
    }
};

// Reducers. Por parametro recibe el estado que por defecto esta vacio y seria la lista de personajes, y la accion.
function CharReducer(state = [], action){

    //Se hace el switch sobre el tipo
    switch (action.type) {
        case "ADD_CHAR":
            let newst = [...state];
            let ch = { ...action.payload, id: newst.length + 1};
            newst.push(ch);
            return newst;
        case "SET_CHAR":
            return action.payload.characters;
        default:
            return state;
    }
}

const appReducer = combineReducers({characters: CharReducer});

// Store
export const store = createStore(appReducer, initialState);

//Debug
window.store = store;
window.actions = actions;
