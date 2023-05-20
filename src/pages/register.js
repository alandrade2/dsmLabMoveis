import React, { Component } from 'react';
// import { Keyboard, ActivityIndicator } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Form, Input, ProfileButton, ProfileButtonText } from '../style/styles';

export default class Register extends Component {

    state = {
        name: '',
        email: '',
        nick: '',
        curso: '',
        cpf: '',
        telefone: '',
        logado: false,
        loading: false
    };

    handleAddUser = async () => {
        const { users } = this.state;

    }

    render() {
        const { name, telefone, cpf, email, nick, curso, logado } = this.state

        return (
            <Container >
                <Form>
                    <Input autoCorrect={false}
                        autoCapitalize='none'
                        placeholder='nome'
                        value={name}
                        onChangeText={text => this.setState({ name: text })}
                        returnKeyType='send'
                        onSubmitEditing={this.handleAddUser}
                    />
                    <Input autoCorrect={false}
                        autoCapitalize='none'
                        placeholder='telefone'
                        value={telefone}
                        onChangeText={text => this.setState({ telefone: text })}
                        returnKeyType='send'
                        onSubmitEditing={this.handleAddUser}
                    />
                    <Input autoCorrect={false}
                        autoCapitalize='none'
                        placeholder='cpf'
                        value={cpf}
                        onChangeText={text => this.setState({ cpf: text })}
                        returnKeyType='send'
                        onSubmitEditing={this.handleAddUser}
                    />
                    <Input autoCorrect={false}
                        autoCapitalize='none'
                        placeholder='Email'
                        value={email}
                        onChangeText={text => this.setState({ email: text })}
                        returnKeyType='send'
                        onSubmitEditing={this.handleAddUser}
                    />
                    <Input autoCorrect={false}
                        autoCapitalize='none'
                        placeholder='curso'
                        value={curso}
                        onChangeText={text => this.setState({ curso: text })}
                        returnKeyType='send'
                        onSubmitEditing={this.handleAddUser}
                    />
                    <Input autoCorrect={false}
                        autoCapitalize='none'
                        placeholder='usuario'
                        value={nick}
                        onChangeText={text => this.setState({ nick: text })}
                        returnKeyType='send'
                        onSubmitEditing={this.handleAddUser}
                    />

                    <ProfileButton onSubmitEditing={() => {
                        // this.props.navigation.navigate('user', { user: item })
                        this.handleAddUser
                    }}>
                        <ProfileButtonText>Cadastrar</ProfileButtonText>
                    </ProfileButton>
                </Form>

            </Container>
        );
    }
}
