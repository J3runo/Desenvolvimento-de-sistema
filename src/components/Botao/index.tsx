import './styles.css'

type NomeBotao= {
    title: string
}

export default function Botao({title }: NomeBotao) {
    return (
        
            <footer>
                <button className='Botao' >{title}</button>
            </footer>
      
    )
}