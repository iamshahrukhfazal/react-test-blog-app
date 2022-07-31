import { addLike,removeLike } from "../api"

export const createLike  = async(likeable_id, likeable_type)=>{
    return await addLike({likeable_id:likeable_id, user_id:3, likeable_type:likeable_type})
   
}
// require like id and user id
export const deleteLike  = async(like_id, likeable_type,likeable_id)=>{
    return await removeLike(like_id,{ user_id:3, likeable_type:likeable_type,likeable_id:likeable_id})
    
}