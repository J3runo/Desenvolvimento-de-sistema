import logo from '@/image/ignite-logo.svg'
import Image from 'next/image'
import './styles.css'

export default function Header(){
    return(
            <header className="header" >
                <Image src={logo} alt='Logo' />
                <h2>Feed</h2>
            </header>
    )


}