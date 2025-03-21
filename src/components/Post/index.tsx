'use client'

import { FormEvent, useState } from "react";
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

// type Comment = {
// message: string;
// publishedAt: Date;
// like: number;
// author: Author
// }

type PostProps = {
    post: {
        id: number
        author: Author
        publishedAt: Date
        content: string
    }
}


export default function Post({ post }: PostProps) {
    const [newComment, setNewComment] = useState<string>("")
    const [content, setContent] = useState<string>("")

    async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        alert(newComment)

        const comment = {
            comment: newComment,
            publisedAt: new Date().toISOString(),
            author: {
                name: "Bruno silva",
                role: "full stack",
                avatarUrl: "http://github.com/J3runo.png"
            }
        }
        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            comments: comment
        })
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
                    message={content}
                    setMessage={setContent}
                    title="deixe um comentario" />
                <footer>
                    <Botao title={"Comentar"} />
                </footer>
            </form>
        </article>
    )
}
