import React, { Component } from 'react';
import { Card, Cardsection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChnage(text) {
    console.log(text);
    this.props.emailChanged(text);
  }
  render () {
    return (
      <Card>
        <Cardsection>
          <Input label="Email"
            secureTextEntry ='false'
            placeh="email@domain.com"
            onChangeText={this.onEmailChnage.bind(this)}
            />
        </Cardsection>

        <Cardsection>
          <Input label="Password"
            secureTextEntry ='true'
            placeh="password"
            />
        </Cardsection>

        <Cardsection>
          <Button>
              Login
          </Button>
        </Cardsection>
      </Card>
    );
  }
}

export default connect(null, { emailChanged }) (LoginForm);
