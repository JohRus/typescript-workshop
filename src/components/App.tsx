import React from 'react';
import Sok from './Sok';
import Idrettsanleggliste from './Idrettsanleggliste';
import { idrettsanleggViewModel } from '../models/idrettsanlegg';
import Header from './Header';

interface AppState {
    idrettsanlegg: idrettsanleggViewModel[]
}

class App extends React.Component<undefined, AppState> {
    constructor() {
        super();
        this.state = {
            idrettsanlegg: []
        };
        this.lagre = this.lagre.bind(this);
    }

    lagre(idrettsanlegg: idrettsanleggViewModel[]): void {
        this.setState({
            idrettsanlegg: idrettsanlegg
        });
    }

    render() {
        return (
            <main className="app">
                <Header />
                <Sok lagre={this.lagre} />
                <Idrettsanleggliste idrettsanlegg={this.state.idrettsanlegg}/>
            </main>
        );
    }
}

export default App;