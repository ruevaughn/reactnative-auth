import React, { Component } from 'react';
import { Button, Card, CardSection } from './common';
import { Input } from './common'

class LoginForm extends Component {
  state = { email: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection />

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
