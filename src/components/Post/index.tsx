import Avatar from "../Avatar";
import "./styles.css"

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
        author: Author
        publisheAt: Date
        content: string
    }
}


export default function Post({ post }: PostProps) {
    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={"https://github.com/J3runo.png"} hasBorder />
                    <div className="author-info">
                        <strong>Bruno Silva</strong>
                        <span>Desenvolvedor</span>
                    </div>
                </div>
                <time >
                    Publicado há 2 horas
                </time>
            </header>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae sunt laborum assumenda adipisci dicta? Exercitationem
                    repudiandae natus error architecto harum tenetur unde quae doloremque
                    . Odio pariatur quibusdam officiis corporis ipsum.
                </p>
            </div>
            <form className="form">
                <strong>Deixe um comentario</strong>
                <textarea placeholder="Deixe um Comentario"></textarea>
                <footer>
                    <button>
                        Publicar
                    </button>
                </footer>
            </form>
        </article>
    )
}
