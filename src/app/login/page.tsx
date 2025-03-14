'use client'
import Link from "next/link"
import "./styles.css"
import { useState } from "react"
import { useRouter } from "next/router"

export default function Login() {

    const router = useRouter()
    const [email,setEmail] = useState<string>('')
    const [senha,setSenha] = useState<string>('')

    function handleSubmit(){
     if(!email || !senha){
        return
     }
    }
    router.replace("/")


    return (
        <div className="container">

            <div className="form">
                <h1>Login</h1>
                <input type="text" placeholder="Email"  className="input" value={email} onChange={(event)=> setEmail(event.target.value)}/>
                <input type="password" placeholder="Senha" className="input" value={senha} onChange={(event)=> setSenha(event.target.value)} />
                <button className="button" onClick={handleSubmit} disabled = {!email || !senha} >Entrar</button>
            </div>
        </div>
    )
}