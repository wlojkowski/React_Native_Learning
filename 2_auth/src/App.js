import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC_Y8J9lSMQPZbPrl2UBbK_gLUY3d2UB8M',
            authDomain: 'authentication-76ed7.firebaseapp.com',
            databaseURL: 'https://authentication-76ed7.firebaseio.com',
            projectId: 'authentication-76ed7',
            storageBucket: 'authentication-76ed7.appspot.com',
            messagingSenderId: '996092299087',
            appId: '1:996092299087:web:bed493b6c4ce8def'
          });

          firebase.auth().onAuthStateChanged((user) => {
            if(user) { 
                this.setState({ loggedIn: true });
            }else{
                this.setState({ loggedIn: false });
            }
          });
    }

    renderContent() {
        switch(this.state.loggedIn){
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            <Text>Log Out</Text>
                        </Button>
                    </CardSection>
                    );
            case false:
                return <LoginForm />
            default:
                return (
                <CardSection>
                    <Spinner size="large" />
                </CardSection>);
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;