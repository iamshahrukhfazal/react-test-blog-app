import axios from "axios";

const api  = (part)=>{
 return `http://localhost:3000/${part}`
}

export const  getAllPosts = async()=>{
    const data = await axios.get(api("posts.json"))
    return data.data
}


export const  postByID = async(id)=>{
    const data = await axios.get(api(`posts/${id}.json`))
    return data.data
}


export const  addLike = async(params)=>{
    const data = await axios.post(api(`likes.json`),{like:params})
    return data.data
}

export const  removeLike = async(id,params)=>{
    const data = await axios.delete(api(`likes/${id}.json`),{data:{like:params}})
    return data.data
}

export const  addComment = async(id,params)=>{
    const data = await axios.post(api(`posts/${id}/comments.json`),{comment:params})
    return data.data
}