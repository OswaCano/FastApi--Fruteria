import React from 'react';
import './App.css';
import FruitList from './components/Fruits';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className='logo'>Frutería La manzana Feliz</h1>
            </header>
            <main>
                <FruitList />
            </main>
        </div>
    );
};

export default App;
