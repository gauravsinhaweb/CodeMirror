import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Main from "./main"

firebase.initializeApp({
  apiKey: "AIzaSyCjF1NGOgCvc4YgRvvLH-pSGaJGsCPudIM",
  authDomain: "codemirror-fe6c6.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          // <span>
          //   <div>Signed In!</div>
          //   <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
          //   <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          //   <img
          //     alt="profile picture"
          //     src={firebase.auth().currentUser.photoURL}
          //   />
          // </span>
          <Main />
        ) : (
          <div>
            <p className="grid place-items-center h-full w-full text-2xl font-bold pt-6">Welcome</p>
            <p className="grid place-items-center h-full w-full text-xl font-bold pt-36">Login</p>
            <div className="m-4 border-2 border-grey-600 py-12 rounded-sm">
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
            <p className="grid place-items-center mb-0 pt-64">Made with ❤️ by Hack Elite</p>
          </div>
        )}
      </div>
    )
  }
}

export default App
