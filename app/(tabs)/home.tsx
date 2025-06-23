import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from '@rneui/themed';
import axios from "axios";
import { useRouter } from 'expo-router';
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const router = useRouter();
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function home() {
  const [token, setToken] = useState <string | any>(null)
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null)
  const [posts, setPosts] = useState<PostData[] | null>(null)

type DecodedToken = {
  user_id: number,
  username: string,
  role_id: number,
  iat: number,
  exp: number
}
type PostData = {
  postID:number,
  title:string,
  username:string,
  topic_name:string,
  content:string,
  date_posted:string,
  image: string,
  commentCount:number,
  comments: {
    commentID:number,
    username:string,
    body:string,
    date_posted:string
  },
  reactCount:number,
  reactors: {
    user_id:number,
    username:string,
    reactTime:string
  }
  reacted:boolean

}
const checkUserToken = async () => {
      const getToken = await AsyncStorage.getItem("token");
      
      if (getToken) {
        setToken(getToken)
      } 
      else {
        router.replace('/')
      }
};

const decodeToken = async () => {
  if (token){
  const decodedToken = jwtDecode<DecodedToken>(token)
  setDecodedToken(decodedToken);
  }
}

const fetchPosts = async () => {
  if(decodedToken){
  const id = decodedToken?.user_id

    const postData = await axios.get(`${apiUrl}/post/all/${id}`,{headers: headers})
    console.log(postData.data.result);
    setPosts(postData.data.result);
  }
}

  useEffect (() => {
    checkUserToken();
  }, [])
  useEffect (() => {
    decodeToken();
  },[token])
   useEffect (() => {
    fetchPosts();
  },[decodedToken])


  const headers = {
    accept: "application/json",
    Authorization: token
  }
  return (
    <View style={styles.container}>
      {/* <Text>Home</Text> */}

      {
          posts && posts.map((data: PostData)=>(
            <Card key={data.postID}>
              <Text>{data.username}</Text>
              <Text>{data.topic_name}</Text>
              <Text>{data.date_posted}</Text>
              <Text>{data.title}</Text>
              <Text>{data.content}</Text>
            </Card>
            
          ))
        
      }
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
