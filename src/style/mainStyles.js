import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
flex: 1;
padding: 30px;
background-color: rgb(32, 35, 41);
`;

export const Form = styled.View`
flex-direction: row;
padding-bottom: 20px;
border-bottom-width: 1px;
border-color: #999;
background-color: rgb(32, 35, 41);
`;

export const Input = styled.TextInput.attrs({
   placeholderTextColor: '#999'
})`
   flex: 1;
   height: 40px;
   background: #eee;
   border-radius: 4px;
   padding: 0 15px;
   border: 1px solid #eee;
   color: #000;
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

export const Submitsearch = styled(RectButton)`
   justify-content: center;
   align-items: center;
   background: #38a69d;
   border-radius:  4px;
   margin: 10px;
   padding: 0 10px;
`;

export const ProfileButton = styled(RectButton)`
   margin-top: 10px;
   align-self: center;
   border-radius: 10px;
   background: #38a69d;
   justify-content: center;
   align-items: center;
   height: 30px;
`;

export const ProfileButtonText = styled.Text`
   font-size: 14px;   
   color: #fff;
   font-weight: bold;
   text-transform: uppercase;
`;


export const List = styled.FlatList`
   flex:7;
   margin-top: 20px;

`;


export const Avatar = styled.Image`
   width: 80px;
   height: 80px;
   /* border-radius: 32px; */
   background: #eee; 
`;

export const Separator = styled.View`
height: 1px;
/* background-color:#ff0; */
`;

export const ViewPerson = styled.View`
background-color: rgb(158, 158, 158);
padding: 10px;
flex-direction: row;
margin-bottom: 20px;
`;

export const ViewDetail = styled.View`
padding: 5px;
`;

export const Name = styled.Text`
   font-size: 18px;
   color: #000;
   font-weight: bold;
   height: 30px;
   padding-left: 10px

`;


export const DirectButton = styled(RectButton)`
   justify-content: center;
   align-items: center;
   background: #38a69d;
   border-radius:  4px;
   left: 5px;
   padding: 0 12px;
   height: 80px;
   width: 30px;
   flex:1;
   justify-content: space-between;
`;

export const StatusView = styled.View`
background-color: rgb(158, 158, 158);
justify-content: center;
flex:1;
flex-direction:row;
height: 40px;
`;

export const TextStatus = styled.Text`
font-size: 17px;
color: #000;
padding: 20px;
`;

