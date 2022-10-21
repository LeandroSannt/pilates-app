import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { Container, Name } from './styles';


interface StudentProps{
  name:string
}

const Student:React.FC<StudentProps> = ({name}) =>{
  return(
    <Container>
     <Name>{name}</Name>
     <Icon name="eye" size={24} color="#000" />
    </Container>
  )
}
export default Student