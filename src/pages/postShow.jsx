import {PostTag} from "./../components/postTag"
import {AiFillLike} from  "react-icons/ai"
import { Seperator } from "./../components/sperator"
import {useEffect, useState} from "react"
import {BodyTextEditor} from "./../components/richTextEditor"
import { Comments } from "./../components/comments";
import { useParams } from "react-router";
import { postByID,addLike, removeLike,addComment } from "../api";
import { Markup } from 'interweave';
import { deleteLike, createLike } from "../util/function"
import { useContext } from "react"
import PostContext from "../context/PostContext"

export const ShowPost = ()=>{

    const [clicked,setClicked] = useState(false)
    let [postData,setPostData] = useState([])
    let [value,setValue] = useState("<div></div>")
    const {id} = useParams()

    const {post,dispatch} = useContext(PostContext)
  
    const getData = async()=>{
        const data = await postByID(id)
        setPostData(data)
    }

    const createLike  = async(likeable_id, likeable_type)=>{
        const data  = await addLike({likeable_id:likeable_id, user_id:3, likeable_type:likeable_type})
        setPostData(data)
    }

    const deleteLike  = async(like_id, likeable_type,likeable_id)=>{
        const data  = await removeLike(like_id,{ user_id:3, likeable_type:likeable_type,likeable_id:likeable_id})
        setPostData(data)
    }
    const createComment = async(content,post_id)=>{
        const data  = await addComment(post_id,{ user_id:3, content:content})
        setPostData(data)
    }

    const likeId = (data)=>{
        const like = data.filter(el=>el.user_id===3)
        return like[0].id
    }

    useEffect(()=>{
        getData()
    },[id])


    if(!post){
        return <div>Loading ....</div>
    }


    return <div className="w-3/3 flex flex-col justify-center  bg-slate-600 rounded px-2 p-4">
       <div className="flex justify-between">
            <div className=" flex items-center space-x-4">
                <h1 className="text-white text-3xl">{post && postData.title}</h1>
                <PostTag date={false} postedDate={postData && postData.status}/>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
                   
                   {postData?.liked_by?.some(el=> el.user_id===3)?  <AiFillLike onClick={()=>{ deleteLike(likeId(postData?.liked_by), "Post",postData?.id)}}   className='text-blue-600 text-3xl'/>:<AiFillLike onClick={()=>{ createLike(postData?.id, "Post")}}   className='text-white text-3xl'/>}
                    <h3 className="text-white">{postData?.likes}</h3>
            </div> 
        
       </div>
        <Seperator/>
        <div className="text-white text-start"><Markup content={postData && postData.content?.body} /></div>
        <Seperator/>
        <h1 className="text-white text-start text-2xl my-2">Comments</h1>
        <BodyTextEditor setValue={setValue} createComment={()=>{createComment(value,postData.id)}}/>

        {
             postData?.comments?.map((el,key)=>(<Comments keys={el.id} comment={el} setPostData={setPostData}/>))
        }
        
    </div>
}

