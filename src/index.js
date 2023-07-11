import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store/index.js';
import {Provider} from 'react-redux'
import 'normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}> 
            <App />
        </Provider>
    </BrowserRouter>
);
