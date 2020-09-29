import React from 'react';
import {block} from 'bem-cn';
import './App.css';

const cn = block('container');

function App() {
  return (
    <div className={cn()}>
      <h1>Hello!!!</h1>
    </div>
  );
}

export default App;
