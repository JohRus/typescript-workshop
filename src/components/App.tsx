import * as React from 'react';
import Sok from './Sok';
import Idrettsanlegg from './Idrettsanlegg';
import { idrettsanleggViewModel } from '../types/idrettsanlegg';
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
                <Idrettsanlegg idrettsanlegg={this.state.idrettsanlegg}/>
            </main>
        );
    }
}

export default App;