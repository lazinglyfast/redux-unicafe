import ReactDOM from 'react-dom/client'
import { createStore } from "redux"
import unicafeReducer from "./reducers/unicafeReducer"

const store = createStore(unicafeReducer)
store.dispatch({ type: "ZERO" })

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
  const state = store.getState()
  return (
    <>
      <div> good: {state.good} </div>
      <div> ok: {state.ok} </div>
      <div> bad: {state.bad} </div>
      <div>
        <button type="button" onClick={() => store.dispatch({ type: "GOOD" })}>good</button>
        <button type="button" onClick={() => store.dispatch({ type: "OK" })}>ok</button>
        <button type="button" onClick={() => store.dispatch({ type: "BAD" })}>bad</button>
        <button type="button" onClick={() => store.dispatch({ type: "ZERO" })}>reset stats</button>
      </div>
    </>
  )
}

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
