import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import './App.css';
import MainContainer from './components/MainContainer'

const store = configureStore();

function App() {
  return (
    <Provider store = { store } >
      <div className="App">
        <MainContainer/>
      </div>
    </Provider>
  );
}

export default App;
