import React, { Component } from "react";
import { View } from "react-native";
import api from '../services/api';
import { Container, Header } from "./styles";


export default class User extends Component {

    state = { 
        stars: [],
    }


    async componentDidMount() {
        const { route } = this.props;
        const user = route.params;
        const response = await api.get(`/users/${user.login}/starred`);

        this.setState({ stars: response.data });
    }

    render() {
        const { route } = this.props;
        const user = route.params;
        const { stars } = this.state;
        return (
            <Container>
                <Header>
                    <AvatarPerfil source={{ uri: user.avatar }}></AvatarPerfil>
                    <Bioperfil>{ user.bio }</Bioperfil>
                </Header>
            </Container>
        );
    }
}

