import React from 'react';
import { Button } from "react-native";

import { Container } from './styles';

const Details:React.FC = ({navigation}:any) =>{
  return(
    <Container> 
      detalhes
      {'\n'}

      <Button
        title="Go to List"
        onPress={() => navigation.navigate('List')}
      />

    </Container>
  )
}
export default Details