import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentDidMount() {
        firebase.initializeApp({
            <app-specs-from-firebase>
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
