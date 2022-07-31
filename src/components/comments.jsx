import { BodyTextEditor } from "./richTextEditor"
import {useState} from "react"
import {AiFillLike} from  "react-icons/ai"
import {AiOutlineComment} from  "react-icons/ai"
import { Seperator } from "./sperator"
import { Markup } from 'interweave';
import { postByID,addLike, removeLike,addComment } from "../api";
import { useParams } from "react-router";

export const Comments = ({keys,comment,setPostData})=>{
    const [showComment,setShowComment] = useState(false);
    let [value,setValue] = useState("<div></div>")
    const {id} = useParams()
    const createLike  = async(likeable_id, likeable_type)=>{
        const data  = await addLike({likeable_id:likeable_id, user_id:3, likeable_type:likeable_type})
        setPostData(data)
    }

    
    const deleteLike  = async(like_id, likeable_type,likeable_id)=>{
        const data  = await removeLike(like_id,{ user_id:3, likeable_type:likeable_type,likeable_id:likeable_id})
        setPostData(data)
    }

    const createComment = async(content,reply_id,post_id)=>{
        const data  = await addComment(post_id,{ user_id:3,reply_id:reply_id, content:content})
        setPostData(data)
    }

    const likeId = (data)=>{
        const like = data.filter(el=>el.user_id===3)
        return like[0].id
    }
    return <div className="ml-4" key={keys}>    
    {/* user */}
        <div className="flex space-x-3 space-y-2">
            <img class="w-16 h-16 rounded-full border-white bottom-2 shadow-md p-2" src="https://robohash.org/d114209716c204db2cf793deaa5ef886?set=set4&bgset=&size=400x400" alt="Rounded avatar"/>
            <div className="text-start mt-3 text-white">
                <h2>Shahrukh</h2>
                <h3>22 days ago </h3>
            </div>
        </div>
        {/* Comment */}

        <h1 className="text-start text-white p-4"><Markup content={comment?.content?.body} /></h1>

        <div className="flex space-x-2 ">
            <div onClick={()=>{}} className="flex items-center space-x-1 cursor-pointer">
            {comment?.liked_by?.some(el=> el.user_id===3)?  <AiFillLike onClick={()=>{ deleteLike(likeId(comment?.liked_by), "Comment",comment?.id)}}   className='text-blue-600 text-3xl'/>:<AiFillLike onClick={()=>{ createLike(comment?.id, "Comment")}}   className='text-white text-3xl'/>}

                <h3 className="text-white">{comment?.likes}</h3>
            </div> 

            <div className="flex items-center space-x-1" onClick={()=>{
                showComment?setShowComment(false):setShowComment(true)
              
            }}>
                <AiOutlineComment className="text-white text-3xl"/>
            </div> 
        </div>
        <div >
            {showComment?<BodyTextEditor setValue={setValue} createComment={()=>{createComment(value,comment.id,id)}}/>:<></>}
        </div>
        <Seperator/>
   
        {!!comment?.replies ? comment?.replies?.map((el,key)=>(<Comments key={el.id} comment={el} setPostData={setPostData}/>)):false}

    </div>
}

