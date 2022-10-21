import React, { useEffect, useState } from 'react';
import { FlatList, View } from "react-native";

import { Header } from '../../components/Header/Header';
import { InputFilter } from '../../components/Input';
import Student from '../../components/Student';
import { StudentProps } from '../../interfaces/students';
import { api } from '../../services/api';
import { Title } from './styles';

const List:React.FC = ({navigation}:any) =>{
  const [students,setStudents] = useState<StudentProps[]>([])
  useEffect(() =>{
     api.get('students')
    .then((response) =>{
      setStudents(response.data)
    }).catch((err) =>{
      console.log(err)
    })
  },[])

  const renderItem = (props: any) => {
    return(
      <Student key={props.item.id} name={props.item.name} />
    )
  }

  const searchStudent = (studenthandled:string) =>{
    const lowerBusca = studenthandled.toLowerCase()
    const filtro =  students.filter((student)=>{  
        return student.name.toLowerCase().includes(lowerBusca) 
    })
    setStudents(filtro)
  }

  return(
    <>
    <Header studentsCounter={students.length}/>
    <InputFilter searchStudent={searchStudent}/>
    <View style={{padding:20}}> 
      <Title>
        Alunos
      </Title>

      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={item => item?.id.toString()}
      />
  </View>
  </>
  )
}

export default List