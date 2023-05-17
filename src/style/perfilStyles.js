import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
flex: 1;
padding: 30px;
background-color: rgb(32, 35, 41);
`;

export const AvatarPerfil = styled.Image`
   width: 300px;
   height: 250px;
   border-radius: 20px;
`;

export const Header = styled.View`
padding-top: 30px;
/* align-items: center; */
justify-content: center;
`;

export const NamePerfil = styled.Text`
   font-size: 35px;
   font-weight: 900;   
   color: #fff;
   margin-top: 10px;
`;

export const AlivePerfil = styled.Text`
   font-size: 20px;
   /* font-weight: 300;    */
   color: #fff;
   margin-top: 4px;
   text-align: left;   
`;

export const TitlePerfil = styled.Text`
   font-size: 18px;
   color: #999;
   text-align: left;  
   margin-top: 8px;    
`;

export const TextPerfil = styled.Text`
   font-size: 20px;
   color: #fff;
   text-align: left;  
   margin-top: 4px;    
`;

export const SubmitButton = styled(RectButton)`
   flex-direction: row;    
   justify-content: space-around;   
   align-items: center;
   background: #38a69d;
   border-radius:  4px;
   padding: 10px;
   margin-top: 30px;
   height: 60px; 
`;

export const SubmitButtonText = styled.Text`
   font-size: 24px;   
   color: #fff;
   font-weight: bold;
   text-transform: uppercase;
`;