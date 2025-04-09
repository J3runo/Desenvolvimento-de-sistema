import './styles.css'

type NomeBotao= {
    title?: string
    handle:()=> void
}

export default function Botao({title, handle }: NomeBotao) {
    return (
        
            <footer>
                <button className='Botao' onClick={handle}>{title ? title :('foi')} </button>
            </footer>
      
    )
}