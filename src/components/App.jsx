import React from 'react';
import Sok from './Sok';
import Idrettsanleggliste from './Idrettsanleggliste';
import Header from './Header';

const App = () => (
    <main className="app">
        <Header />
        <Sok />
        <Idrettsanleggliste />
    </main>
);

export default App;
