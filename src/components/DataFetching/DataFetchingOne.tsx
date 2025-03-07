"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
interface Posts {
    body?:string;
    id:number;
    title:string;
    userId?:number

}
export default function DataFetchingOne() {
 const [post,setPosts] = useState<Posts[]>([])
 useEffect(()=>{
   axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
    console.log(res.data)
    setPosts(res.data)

   }).catch(err =>{
    console.log(err)
   }) 
 },[])
  return (
    <div>
      {post.map(post=>(
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  )
}
