import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component{

    componentDidMount(){
        // callback function invoked after the module is loaded
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({       // returns a promise
                clientId: '817113998350-esqssm6u4cqkdcoga7opq6mj70nt88k7.apps.googleusercontent.com', 
                scope: 'email',
                plugin_name: 'twitch clone (value is arbitrary name)'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)              // automatically updates auth status without delay
            })
        })
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn){ this.props.signIn(this.auth.currentUser.get().getId()) }   // signIn is action creator here
        else {this.props.signOut()}
    }

    onSignInClick = () => {this.auth.signIn()}          // signIn is from gapi function here
    onSignOutClick = () => {this.auth.signOut()}

    renderAuthButton(){
        if (this.props.isSignedIn === null){
            return null
        }
        else if (this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign out
                </button>
            )
        }
        else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign in with Google
                </button>
            )
        }
    }

    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)