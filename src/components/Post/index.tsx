'use client'

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Avatar from "../Avatar";
import Botao from "../Botao";
import "./styles.css"
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import TextAreaCustom from "../TextAreaCustom";
import axios from "axios";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type Post = {
    id: string
    author: Author
    publishedAt: Date
    content: string
    comments: Comment[]
}

type Comment = {
    id: string
    author: Author
    comment: string
    publisheAt: Date
}

type PostProps = {
    setPost: Dispatch<SetStateAction<Post[]>>,
    post: Post

}


export default function Post({ post, setPost }: PostProps) {
    const [newComment, setNewComment] = useState<string>('')

    async function loadPost() {
        const response = await axios.get(`http://localhost:3001/posts${post.id}`)
        setPost((prev: Post[]) =>
            prev.map(atual => (
                atual.id == post.id ? response.data : atual
            ))
        )
    }

    async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        

        const comment = {
            comment: newComment,
            publisedAt: new Date().toISOString(),
            author: {
                name: "Bruno silva",
                role: "full stack",
                avatarUrl: "http://github.com/J3runo.png"
            }
        }
        const comments = post.comments?.length ? [...post.comments, comment] : [comment]

        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": comments
        })
        setNewComment('')
        loadPost()
    }

    const dateFormat = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={post.author.avatarUrl} hasBorder />
                    <div className="author-info">
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time >
                    {dateFormat}
                </time>
            </header>
            <div className="content">
                <p>{post.content}
                </p>
            </div>
            <form className="form" onSubmit={handleCreateNewComment}>
                <strong>Deixe um comentario</strong>
                <TextAreaCustom
                    message={newComment}
                    setMessage={setNewComment}
                    title="deixe um comentario" />
                <footer>
                    <Botao title={"Comentar"} />
                </footer>
            </form>

            {post.comments?.length && post.comments.map(comment =>(
                <h1 key={comment.comment}>{comment.comment}</h1>
            ))}


        </article>
    )
}
