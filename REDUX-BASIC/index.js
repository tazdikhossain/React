const redux = require("redux");

console.log(redux);


// State
const initState = {
    name: "Tazdik",
    age: 30
}
//reducer
const rootReducer = (state =initState, action) => {
    if (action.type === "INCREMENT") {
        return {
            ...state,
            age: state.age + 1
        }
    }
    if (action.type === "DECREMENT") {
        return {
            ...state,
            age: state.age - action.value
        }
    }
    return state;
  };

//store
const store = redux.createStore(rootReducer);
//console,log(store);
console.log(store.getState());

//Subscribe
store.subscribe(() => {
    console.log("Store Changed", store.getState());
})

//Dispatching Action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" , value:2});
// console.log(store.getState());


