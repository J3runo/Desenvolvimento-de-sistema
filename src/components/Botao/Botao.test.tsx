import '@testing-library/jest-dom'
import { fireEvent, render, screen} from '@testing-library/react'
import Botao from '.'

 
describe('test botao', () => {
  it('deve renderizar o componente botao', () => {
   render(<Botao title='publicar' handle={()=>{}}/>)
   const button = screen.getByText('publicar')

   expect(button).toBeInTheDocument()
  })
  it('Deve renderizar o component sem texto', () => {
    render(<Botao handle={() => {}} title=''/>)

    const button = screen.getByText("foi");

    expect(button).toBeInTheDocument()
})
  it ('Deve redenrizar o componente e testar click no botão', ()=>{
    const handleMock = jest.fn()
    render(<Botao title='publicar' handle ={handleMock}/>)
    
    const button = screen.getByText('publicar')
    expect(button).toBeInTheDocument()
    
    fireEvent.click(button)

    expect(handleMock).toHaveBeenCalled()
    expect(handleMock).toHaveBeenCalledTimes(1)

  })
})