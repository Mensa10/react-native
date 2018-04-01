import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import { Button, Spinner } from './components/common';

const config = {
    apiKey: "AIzaSyDUsvQypIIFVep5oVUyD6kBK4uFbdheUJw",
    authDomain: "auth-react-native-e1133.firebaseapp.com",
    databaseURL: "https://auth-react-native-e1133.firebaseio.com",
    projectId: "auth-react-native-e1133",
    storageBucket: "auth-react-native-e1133.appspot.com",
    messagingSenderId: "705256263924"
  };

class App extends Component {
    state = { loggedIn: null };

    logout = () => {
        firebase.auth().signOut();
    }

    componentWillMount() {
        firebase.initializeApp(config);
        this.logout();

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        })
    }

    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return <Button btnText='Log out' onPress={this.logout} />
            case false:
                return <LoginForm />
            default:
                return <Spinner />
        }
    }

    render() {
        return(
            <View>
                <Header headerText='Auth' />
                {this.renderContent()}
            </View>
        )
    }
}

export default App;