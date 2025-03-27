import { BiLike } from "react-icons/bi"
import Avatar from "../Avatar"
import "./styles.css"
import { MdDeleteOutline } from "react-icons/md"
import Post from "../Post"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type commentProps ={
    handleLike: (event:any, id:string) => void
    handleDelete: (event:any, id:string) => void
    comment:{
            id: string
            like:number
            author: Author
            comment: string
            publishedAt: Date
        }
    }

   

export default function Comment({comment, handleDelete, handleLike} : commentProps) {
    const dateFormat = formatDistanceToNow(comment.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    return (
        <div className="comment">
            <Avatar src={comment.author.avatarUrl} hasBorder={false} />
            <div className="comment-box">
                <div className="comment-content">
                    <header>
                        <div className="author-and-time">
                            <strong>{comment.author.name}</strong>
                            <time>{dateFormat}</time>
                        </div>
                        <button title="Deletar-comentario" onClick={(event) => handleDelete(event, comment.id)}>
                        <MdDeleteOutline size={24}/>
                        </button>
                    </header>
                    <p>{comment.comment}</p>
                </div>
                <footer>
                    <button onClick={(event) => handleLike(event, comment.id)}>
                    <BiLike size={24}/>
                    Aplaudir <span>{comment.like}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}

