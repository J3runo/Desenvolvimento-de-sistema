import { render,screen} from "@testing-library/react"
import Header from "."

describe('componente Header',() =>{
    it("Deve rederizar o componerte header", ()=>{
        render(<Header/>)

        const element = screen.getByAltText("Logo")
        expect(element).toBeInTheDocument()
    })
})