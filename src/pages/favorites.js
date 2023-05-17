import React, { useState, useEffect } from "react";
import { Container, Form, Input, SubmitButton, List, Name, ViewPerson, Avatar, ViewDetail, ProfileButton, ProfileButtonText } from '../style/mainStyles';
import { Keyboard, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Person(props) {

    const [characterList, setCharacterList] = useState([]);
    const [newCharacter, setNewCharacter] = useState('');

    const [loading, setLoading] = useState(false);


    useEffect(() => {

        listSearch();
    }, [])


    async function listSearch() {
        try {
            const response = await AsyncStorage.getItem("characters")
            const previous = response ? JSON.parse(response) : [];
            setCharacterList(previous)

        } catch (error) {
            console.error(error)
        }
    }




    async function handleListCharacters() {
        const response = await AsyncStorage.getItem("characters")
        const previous = response ? JSON.parse(response) : [];


        setLoading(true)
        if (!newCharacter) {
            setCharacterList(previous)
        } else {

            const filterChar = previous.filter(function (e) {
                return e.name == newCharacter
            })
            setCharacterList(filterChar)
        }
        setLoading(false)
        Keyboard.dismiss();
    }



    return (
        <Container>
            <Form>
                <Input autoCorrect={false}
                    autoCapitalize='none'
                    placeholder='Listar personagens'
                    value={newCharacter}
                    onChangeText={text => setNewCharacter(text)}
                />
                <SubmitButton loading={loading} onPress={() => handleListCharacters()}>
                    {loading ? (<ActivityIndicator color='#fff' />) : (<Icon name='search' size={20} color='#fff' />)}
                </SubmitButton>
            </Form>
            <List
                data={characterList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ViewPerson>
                        <ViewDetail>

                            <Avatar source={{ uri: item.image }} />
                            <ProfileButton onPress={() => props.navigation.navigate('perfil', { item: item })}>
                                <ProfileButtonText>Ver Perfil</ProfileButtonText>
                            </ProfileButton>
                        </ViewDetail>
                        <ViewDetail>
                            <Name>
                                {item.name}
                            </Name>
                            <Name>
                                {item.status} - {item.species}
                            </Name>
                            <Name>
                                {item.origin}
                            </Name>
                            <Name>
                                {item.gender} - {item.favorite ? (<Icon name='favorite' size={20} color='red' />) : (<Icon name='favorite' size={20} color='white' />)}
                            </Name>


                        </ViewDetail>
                    </ViewPerson>

                )}


            />
        </Container>
    );
}

