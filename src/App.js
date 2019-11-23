import React,{Component} from 'react';
import './index.css';

import router from './router';

class App extends Component {
    render() {
        return (
            <>
                {router}
            </>
        );
    }
}

export default App;