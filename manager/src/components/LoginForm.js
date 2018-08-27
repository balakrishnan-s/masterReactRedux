import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Cardsection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    console.log(text);
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    console.log(text);
    this.props.passwordChanged(text);
  }
  onButtonpress(){
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }
  render() {
    return (
      <Card>
        <Cardsection>
          <Input
            label="Email"
            secureTextEntry='false'
            placeh="email@domain.com"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </Cardsection>

        <Cardsection>
          <Input
            label="Password"
            secureTextEntry='true'
            placeh="password"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </Cardsection>

        <Cardsection>
          <Button onPress= {this.onButtonpress.bind(this)}>
              Login
          </Button>
        </Cardsection>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};
export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
  })(LoginForm);
