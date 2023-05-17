import React from "react";
import { useNavigation } from '@react-navigation/native';

import { ButtonMenu, Container as ContainerFotoMenu, ContainerMenu, MenuButtonText, LogoMenu } from '../style/styles';
import Page from '../assets/logo1.jpg';

function Menu() {
    const navigation = useNavigation();

    function logOut() {
        navigation.navigate('Welcome')
    }

    function personNavigate() {
        navigation.navigate('person')
    }

    function favoritesNavigate() {
        navigation.navigate('favorites')
    }


    return (
        <ContainerMenu>
            <ContainerFotoMenu>
                <LogoMenu source={Page}>

                </LogoMenu>
            </ContainerFotoMenu>
            <ButtonMenu>
                <MenuButtonText onPress={personNavigate}>Personagens</MenuButtonText>
            </ButtonMenu>
            <ButtonMenu>
                <MenuButtonText onPress={favoritesNavigate} >Favoritos</MenuButtonText>
            </ButtonMenu>
            {/* <ButtonMenu>
                <MenuButtonText>Locais</MenuButtonText>
            </ButtonMenu>
            <ButtonMenu>
                <MenuButtonText>episódios</MenuButtonText>
            </ButtonMenu> */}
            <ButtonMenu >
                <MenuButtonText onPress={logOut}>log out</MenuButtonText>
            </ButtonMenu>
        </ContainerMenu>
    )
}

export default Menu;