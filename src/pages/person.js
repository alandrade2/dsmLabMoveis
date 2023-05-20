import React, { useCallback, useState } from "react";
import { Container, Form, Input, SubmitButton, List, Name, ViewPerson, Avatar, DirectButton, TextStatus, StatusView, ViewDetail, Submitsearch, ProfileButton, ProfileButtonText } from '../style/mainStyles';
import { Keyboard, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from "../services/api";



export default function Person(props) {

  const [characterList, setCharacterList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [newCharacter, setNewCharacter] = useState('');
  const [information, setInformation] = useState('');
  const [count, setCount] = useState('');

  const [loading, setLoading] = useState(false);

  useFocusEffect(useCallback(() => {
    listSearch();
    getFavoriteList();

  }, []))


  async function getFavoriteList() {
    const response = await AsyncStorage.getItem("characters")
    const previous = response ? JSON.parse(response) : [];
    setFavoriteList(previous)

  }


  async function listSearch() {
    let resp = [];
    let infoNew = [];
    let results = [];

    try {
      setLoading(true)
      if (newCharacter != '') {
        resp = await api.listSearch("character", "name", newCharacter);
      } else {
        resp = await api.listAll("character");
      }

      results = resp.results;
      infoNew = resp.info;

      // inserir favorito no json
      EntryFavorite(results);
      setInformation(infoNew);

      const total = "page 1 / " + infoNew.pages
      setCount(total);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }

  }


  // Funcion para inserção do favorite
  async function EntryFavorite(list) {

    var newDataList = [];
    for (item of list) {
      item.favorite = false
      favoriteList.filter(function (e) {
        if (e.id === item.id) {
          item.favorite = true
        }
      })
      newDataList.push(item)
    }
    setCharacterList(newDataList);

  }




  function handleListCharacters() {
    listSearch()

    Keyboard.dismiss();
  }




  async function nextPages() {
    let resp = [];
    let infoNext = [];
    let results = [];

    const next = information.next

    if (next !== null) {
      const proc = next.substring(32);
      resp = await api.listAllPages(proc);
      const pages = proc.substring(proc.indexOf("page=") + 5);
      const total = "page " + pages + " / " + information.pages
      setCount(total);

      results = resp.results;
      EntryFavorite(results);
      infoNext = resp.info;
      setInformation(infoNext);


    }
  }

  async function previousPages() {
    let resp = [];
    let infoPrev = [];
    let results = [];

    const previous = information.prev

    if (previous !== null) {
      const proc = previous.substring(32);

      resp = await api.listAllPages(proc);
      const pages = proc.substring(proc.indexOf("page=") + 5);
      const total = "page " + pages + " / " + information.pages
      setCount(total);

      results = resp.results;
      EntryFavorite(results);
      infoPrev = resp.info;
      setInformation(infoPrev);

    }
  }


  return (
    <Container>
      <Form>
        <Input autoCorrect={false}
          autoCapitalize='none'
          placeholder='Listar personagens'
          value={newCharacter}
          onChangeText={text => setNewCharacter(text)}
          returnKeyType='send'
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
                {item.origin.name}
              </Name>
              <Name>
                {item.gender} - {item.favorite ? (<Icon name='favorite' size={20} color='red' />) : (<Icon name='favorite' size={20} color='white' />)}
              </Name>


            </ViewDetail>
          </ViewPerson>

        )}


      />
      <StatusView>
        <Submitsearch onPress={() => previousPages()}>
          <Icon name='arrow-left' size={40} color='#fff' />
        </Submitsearch >
        <ViewDetail>
          <TextStatus>{count} </TextStatus>
        </ViewDetail>
        <Submitsearch onPress={() => nextPages()}>
          <Icon name='arrow-right' size={40} color='#fff' />
        </Submitsearch>
      </StatusView>
    </Container>
  );
}

