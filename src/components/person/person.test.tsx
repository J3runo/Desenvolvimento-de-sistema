import { render,screen } from "@testing-library/react"
import Person from "."

describe('componente person',()=>{
    it("deve renderizar o componente de pessoa", ()=>{
        render(<Person nome="Bruno" idade={28}/>)

        const name = screen.queryByText('Bruno',{exact: false})
        const idade = screen.queryByText('28', {exact: false})

        expect(name).toBeInTheDocument()
        expect(idade).toBeInTheDocument()
    })
})

