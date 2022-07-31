import  {useState,useEffect} from "react"
import { getAllPosts } from "../api"
import {PostCard} from "./../components/postCard"

export const PostPage = ()=>{
    const [posts,setPost] = useState([])

    const getAllData = async()=>{
      const data = await getAllPosts()
      setPost(data)
 
    }
    useEffect(()=>{
        getAllData()
      },[])

    return <>
         {!!posts? posts.map(el=>(<PostCard posts={el}/>)):<div className="text-white">No Record Found</div>}
    </>
}