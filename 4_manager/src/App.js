import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component {
    componentDidMount() {
        var firebaseConfig = {
            apiKey: 'AIzaSyCRGvPnEqatVtx6pV0tyqpfFUaMkVvNJ2Y',
            authDomain: 'manager-241307.firebaseapp.com',
            databaseURL: 'https://manager-241307.firebaseio.com',
            projectId: 'manager-241307',
            storageBucket: 'manager-241307.appspot.com',
            messagingSenderId: '639856494204',
            appId: '1:639856494204:web:cbb8da8cc0bc8789'
          };

          firebase.initializeApp(firebaseConfig);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;