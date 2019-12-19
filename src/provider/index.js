import React, {createContext, useContext, useReducer} from 'react'

const InitialState = {}

const Store = createContext()
const UseStateValue = () => useContext(Store)

const StateProvider = ({reducers, initialState, children}) => (
  <Store.Provider value={useReducer(reducers, initialState)}>
    {children}
  </Store.Provider>
)

export {
  InitialState,
  Store,
  StateProvider,
  UseStateValue,
}
