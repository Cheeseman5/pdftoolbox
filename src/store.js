import { configureStore } from "@reduxjs/toolkit";


const initialState = {
    documents: [],
    activeDocuments: [],
    activePages: []
}

function toolboxReducer(state = initialState, action) {
    const stateStr = JSON.stringify(state, undefined, 4);
    const actionStr = JSON.stringify(action, undefined, 4);
    console.log(`store::toolboxReducer.state: ${stateStr}`);
    console.log(`store::toolboxReducer.action: ${actionStr}`);
    return state;
}

const store = configureStore({
    reducer: {
        toolbox: toolboxReducer
    }
});

export default store;