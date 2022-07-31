
import { Seperator } from "./sperator"
import {PostTag} from "./postTag"
import {AiFillLike} from  "react-icons/ai"
import {AiOutlineComment} from  "react-icons/ai"
import { Markup } from 'interweave';

import {Link} from "react-router-dom";


export const PostCard = ({posts})=>{
    return <div className="w-2/3 bg-gray-800 rounded p-3">
        <div className="flex items-center space-x-3 text-white">
            <img class="w-10 h-10 rounded-full" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y" alt="Rounded avatar"/>
            <h2>{posts.email} | </h2>
            <h2>{posts.status} | </h2>
            <h2><Link to={`/posts/${posts.id}`}>View Post</Link></h2>
        </div>
        <Seperator/>
        <div className="flex justify-start items-start text-white"><Markup content={posts.data.body} /></div>
        <Seperator/>
        <div className="flex justify-between items-center">
            <PostTag postedDate = {posts.created_at}/>
            <div className="flex items-center space-x-2">

                <div className="flex items-center space-x-1">
                    <AiFillLike className="text-white text-3xl"/>
                    <h3 className="text-gray-500">{posts.likes}</h3>
                </div> 
                <div className="flex items-center space-x-1">
                    <AiOutlineComment className="text-white text-3xl"/>
                    <h3 className="text-gray-500">{posts.comments}</h3>
                </div>                 
                {/* Comment */}
            </div>

        </div>


        {/* information */}
    </div>
}

