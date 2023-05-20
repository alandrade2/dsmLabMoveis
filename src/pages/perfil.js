
import React, { useState, useEffect } from "react";

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, AvatarPerfil, NamePerfil, AlivePerfil, TitlePerfil, TextPerfil, SubmitButtonText, SubmitButton } from '../style/perfilStyles';

import AsyncStorage from '@react-native-async-storage/async-storage';


function Perfil(props) {
    const [character, setCharacter] = useState([]);
    const [image, setImage] = useState('');
    const [location, setLocation] = useState('');
    const [idChar, setIdChar] = useState('');
    const [favorite, setFavorite] = useState(false);


    useEffect(() => {
        listCharacters();
    }, [])


    function listCharacters() {
        const { route } = props;
        const { item } = route.params;

        const imagem = item.image ? item.image : '../assets/no-foto.jpg';
        const local = item.location.name ? item.location.name : 'unknow';

        setFavorite(item.favorite)
        setIdChar(item.id)
        setLocation(local)
        setImage(imagem)
        setCharacter(item)
    }


    async function removeColection() {
        // Remover uma coleção inteira
        const res = await AsyncStorage.removeItem("characters")
    }



    async function handleFavorite() {

        try {
            const response = await AsyncStorage.getItem("characters")
            const previous = response ? JSON.parse(response) : [];
            if (previous) {
                setFavorite(previous.favorite)
            }

            if (!favorite) {
                character.favorite = true;
                const CharData = {
                    id: character.id,
                    name: character.name,
                    image: character.image,
                    gender: character.gender,
                    status: character.status,
                    species: character.species,
                    location: character.location.name,
                    type: character.type,
                    favorite: character.favorite,
                    origin: character.origin.name,
                }

                const data = [...previous, CharData]
                await AsyncStorage.setItem("characters", JSON.stringify(data))
            } else {
                const removeChar = previous.filter(function (e) {
                    return e.id !== character.id
                })
                await AsyncStorage.setItem("characters", JSON.stringify(removeChar))
            }
            const istate = !favorite
            setFavorite(istate)

            const newData = await AsyncStorage.getItem("characters")

        } catch (error) {
            console.error(error)
        }



    }


    return (
        <Container>
            <Header>
                <AvatarPerfil source={{ uri: image }}></AvatarPerfil>
                <NamePerfil>{character.name}</NamePerfil>
                <TextPerfil>{character.gender}</TextPerfil>
                <AlivePerfil>
                    {character.status !== 'Alive' ? (<Icon name='face' size={20} color='red' />) : <Icon name='face' size={20} color='white' />} {character.status}  - {character.species}
                </AlivePerfil>
                <TitlePerfil>Last known location:</TitlePerfil>
                <TextPerfil>{location}</TextPerfil>
                <TitlePerfil>Type:</TitlePerfil>
                <TextPerfil>{character.type}</TextPerfil>
            </Header>
            <SubmitButton onPress={handleFavorite}>
                {favorite ? (<Icon name='favorite' size={40} color='red' />) : <Icon name='favorite' size={40} color='white' />}
                <SubmitButtonText>{favorite ? 'UnFollow' : 'follow'}</SubmitButtonText>
            </SubmitButton>
        </Container>

    )
}

export default Perfil;