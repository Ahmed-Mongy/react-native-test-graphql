import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { Form, Input, Label, Item } from "native-base";
export default class AuthForm extends Component {

    state = {
        email: "",
        password: ""
    }

    submitForm = () => {

    }
    render() {
        return (
            <Form>
                <Item floatingLabel >
                    <Label>Email</Label>
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        keyboardType={"email-address"}
                    />
                </Item>

                <Item floatingLabel >
                    <Label>Password</Label>
                    <Input
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry
                    />
                </Item>
                <Button
                    title={this.props.type}
                    onPress={this.submitForm}
                />
            </Form>
        )
    }
}
