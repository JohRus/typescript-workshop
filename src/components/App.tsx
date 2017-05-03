import React from 'react';
import Sok from './Sok';
import Idrettsanlegg from './Idrettsanlegg';

class App extends React.Component<undefined, undefined> {
    constructor() {
        super();
    }

    render() {
        return (
            <main className="app">
                <Sok />
                <Idrettsanlegg />
            </main>
        );
    }
}

export default App;
