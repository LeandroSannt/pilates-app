import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import { useToast } from '../../hooks/useToast';
import { Container, Name } from './styles';



interface StudentProps{
  name:string
  id:string
  setProductId(value:any):void
  setProducts(value:any):void
  productId:string[]
}

const tracks = [
  {
    id:1,
    url:'https://youtu.be/NhHr8oVSetQ',
    title:"teste",
  }
]



const Student:React.FC<StudentProps> = ({name,id,setProductId,productId,setProducts}) =>{
  const [checked, setChecked] = useState(false);
  const {addToast} = useToast()

  // const setUpTrackPlayer = async () =>{
  //   try{
  //     await TrackPlayer.setupPlayer()
  //     await TrackPlayer.add(tracks)
  //   }catch(err){
  //     console.log(err)
  //   }

  // }

  // useEffect(() =>{
  //   setUpTrackPlayer()
  // },[])

  const handleProduct = () =>{
    setChecked(!checked);

    let updatedList = [...productId];

    if(!checked){
      updatedList = [...productId, id];
    }else{
      updatedList.splice(productId.indexOf(id), 1);
    }
    setProductId(updatedList);
  }

  const confirmDelete = async (id:string) =>{
    const products = await AsyncStorage.getItem('@product5')

    if(products){
      const jsonProducts = JSON.parse(products)

      const findedProducts = jsonProducts.filter((product:any) =>{
        return product.id !== id
      })

      const jsonValue = JSON.stringify(findedProducts)
      await AsyncStorage.setItem('@product5',jsonValue)

      setProducts(findedProducts)
    }

    const filteredProduct = productId.filter((product) =>{return product !== id})
    setProductId(filteredProduct)
  }

  const handleDelete = async (id:string) =>{
    addToast({
      name:name,
      confirmation:() =>{confirmDelete(id)}
    })

  }

  return(
    <Container checked={checked}>
      {/* <TouchableOpacity onPress={() =>{TrackPlayer.play()}}>
      <Text>PLAY</Text>
      </TouchableOpacity> */}
      <Checkbox
        color='#3FAF47'
        status={checked ? 'checked' : 'unchecked'}
        onPress={handleProduct}
      />
     <Name checked={checked}>{name}</Name>
     <Icon onPress={() =>{handleDelete(id)}}  style={{marginLeft:'auto'}} name="closecircle" size={20} color="#FF8888" />
    </Container>
  )
}
export default Student