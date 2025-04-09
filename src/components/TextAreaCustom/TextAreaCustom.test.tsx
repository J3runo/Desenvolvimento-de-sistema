import { fireEvent, render,screen } from "@testing-library/react";
import TextAreaCustom from ".";

describe('TexteAreaCuston componete', () => {
    it('Deve renderizar componete com placeholder', () => {
        render(<TextAreaCustom message="Hello world" setMessage={jest.fn()} title="Digite aqui"/>)

        const textarea = screen.getByPlaceholderText('Digite aqui')

        expect(textarea).toBeInTheDocument()
        expect(textarea).toHaveValue('Hello world')
    });

    it('Deve renderizar o componente e chamar a funcao setMessage quando o valor for alterado', () => {
        const setMessage = jest.fn()
        render(<TextAreaCustom message="Hello world" setMessage={setMessage} title="Digite aqui"/>)

        const textarea = screen.getByPlaceholderText('Digite aqui')
        fireEvent.change(textarea,{ target: {value:'Novo valor'}})
        
        expect(setMessage).toHaveBeenCalled()
        expect(setMessage).toHaveBeenCalledTimes(1)
        expect(setMessage).toHaveBeenCalledWith('Novo valor')
    });
});