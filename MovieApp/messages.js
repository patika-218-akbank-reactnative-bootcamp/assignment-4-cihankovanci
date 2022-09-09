{/*import React, {useEffect, useState} from "react";
import { View, Text, FlatList } from "react-native";
import MessageItem from "./MessageItem";

import axios from 'axios';


export default function App() {

  const [messageList, setMessageList] = useState([]);

  const handleGetMessageList = () => {
    fetch("http://10.0.2.2:3000/messages").then(async(result) =>{
      const data = await result.json();
      setMessageList(data)
    })
    .catch(error => {
      console.log(error);
    }
      
    )
  }

  useEffect(()=>{
    handleGetMessageList()
  }, [])

  const renderMessageItem = ({item})=>{
    return(
      <MessageItem item={item}/>
    )
  }

  
  return (
    <View>
    <FlatList 
    data={messageList}
    renderItem={renderMessageItem}
    />
    <View>
      <Text>asdasd</Text>
    </View>
    </View>
  );
}*/}