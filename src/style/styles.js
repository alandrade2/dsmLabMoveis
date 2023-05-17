
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
flex: 1;
padding: 30px;
`;

export const ContainerFotoMenu = styled.View`
flex: 1;

`;

export const ContainerMenu = styled.View`
flex: 2;
padding: 30px;
background: #eee;
`;


export const Form = styled.View`
flex: 1;
flex-direction: column;
/* padding-botton: 20px; */
border-bottom-width: 1px;
border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
   placeholderTextColor: '#999'
})`
    height: 50px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    margin-bottom: 15px;
    border: 1px solid #eee;
    color: #000;
    font-size: 18px;
 `;

export const ProfileButton = styled(RectButton)`
   margin-top: 10px;
   align-self: stretch;
   border-radius: 5px;
   background: #38a69d;
   justify-content: center;
   align-items: center;
   height: 36px;
`;

export const ProfileButtonText = styled.Text`
   font-size: 14px;   
   color: #fff;
   font-weight: bold;
   text-transform: uppercase;
`;

export const ButtonMenu = styled(RectButton)`
margin-top: 10px;
align-self: stretch;
border-radius: 10px;
background: #38a69d;
justify-content: center;
align-items: center;
height: 50px;
margin-bottom: 40px;
`;

export const MenuButtonText = styled.Text`
   font-size: 20px;   
   color: #fff;
   font-weight: bold;
   text-transform: uppercase;
`;

export const SubmitButton = styled(RectButton)`
   justify-content: center;
   align-items: center;
   background: #38a69d;
   border-radius:  4px;
   margin-left: 10px;
   padding: 0 12px;
   opacity: ${props => props.loading ? 0.7 : 1};
`;

export const LogoMenu = styled.Image`
   width: 100%;
   height: 100%;
   border-radius: 21px;
   background: #ff0;
`;