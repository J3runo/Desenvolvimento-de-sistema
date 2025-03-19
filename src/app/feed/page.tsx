'use client'
import { AiFillEdit } from "react-icons/ai";
import Header from "@/components/Header"
import './styles.css'
import Image from "next/image"
import fundo from '@/image/fundos nova.jpg'
import Avatar from "@/components/Avatar"
import Post from "@/components/Post";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { Asul } from "next/font/google";


export default function Feed() {
    const [posts, setPosts] = useState<any[]>([]);
    const [content, setContent] = useState<string>('')
    //chamado quando atualiza a pagina: useEffect
    useEffect(() => {
        loadPost()
    }, [])

    async function loadPost() {
        const response = await axios.get("http://localhost:3001/posts")
        const postSort = response.data.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))
        setPosts(response.data)
    }

  async  function handleCreatPost(event:FormEvent){
    event.preventDefault()

        const post = {
            id:posts.length + 1,
            content: content,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Bruno Silva",
                role:"Desenvolvedor",
                avatarUrl:"https://github.com/J3runo.png"
            }
        }
        await axios.post("http://localhost:3001/posts", post);
        await loadPost();
        setContent('')
    }
    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={fundo} alt={'cover'} className="cover" />

                    <div className="profile">
                        <Avatar src="http://github.com/J3runo.png" hasBorder />
                        <strong>Bruno Silva</strong>
                        <span> Desenvolvedor </span>
                        <footer>
                            <button className="button-edit-profile" > <AiFillEdit /> Editar seu Perfil  </button>
                        </footer>
                    </div>
                </aside>

                <main className="main">
                    <form onSubmit={handleCreatPost}>
                        <textarea
                         placeholder="O que vc esta pensando?"
                         value={content}
                         onChange={(e)=> setContent(e.target.value)}
                        ></textarea>
                        <button type="submit"> Publicar</button>
                    </form>

                    {posts.map(item => (
                        <Post post={item} key={item.id} />
                    ))}

                </main>
            </div>
        </div>

    )
}