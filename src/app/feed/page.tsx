'use client'
import { AiFillEdit } from "react-icons/ai";
import Header from "@/components/Header"
import './styles.css'
import Image from "next/image"
import fundo from '@/image/fundos nova.jpg'
import Avatar from "@/components/Avatar"
import Post from "@/components/Post";

export default function Feed() {
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
                    < Post post={{} as any}/>
                    < Post post={{} as any}/>
                    < Post post={{} as any}/>
                    < Post post={{} as any}/>
                    < Post post={{} as any}/>
                </main>
            </div>
        </div>

    )
}