import React, { Component } from "react";
import api from '../services/api';
import { Container, Header, AvatarPerfil, NamePerfil, Bioperfil, Stars, Starred, OwnerAvatar, Info, Title, Author } from "./styles";


export default class User extends Component {

    state = {
        stars: [],
    }


    async componentDidMount() {
        const { route } = this.props;
        const { user } = route.params;
        // const response = await api.get(`/users/${'alandrade2'}/starred`);
        const response = await api.get(`/users/${user.login}/starred`);

        this.setState({ stars: response.data });
    }

    render() {
        const { route } = this.props;
        const { user } = route.params;
        const { stars } = this.state;
        return (
            <Container>
                <Header>
                    <AvatarPerfil source={{ uri: user.avatar }}></AvatarPerfil>
                    <NamePerfil>{user.name}</NamePerfil>
                    <Bioperfil>{user.bio}</Bioperfil>
                </Header>
                <Stars
                    data={stars}
                    keyExtractor={(star) => String(star.id)}
                    renderItem={({ item }) => (
                        <Starred>
                            <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                            <Info>
                                <Title>{item.name}</Title>
                                <Author>{item.owner.login}</Author>
                            </Info>
                        </Starred>
                    )}
                />
            </Container>
        );
    }
}

