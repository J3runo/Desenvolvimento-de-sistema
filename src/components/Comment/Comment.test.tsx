import { fireEvent, render,screen } from "@testing-library/react";
import Comment from ".";

const mockComment = {
    id:'1',
    like:3,
    comment: 'Hello world',
    publishedAt: new Date(),
    author:{
        name:"Bruno silva",
        role:'Dev',
        avatarUrl:'J3runo.png'
    }
}

describe('comment component', () => {
    it('Deve renderizar um comentario ', () => {
        render(<Comment comment = {mockComment} handleDelete={jest.fn()} handleLike={jest.fn()} />)

        expect (screen.getByText('Bruno silva')).toBeInTheDocument()
        expect (screen.getByText('Hello world')).toBeInTheDocument()
        expect (screen.getByText('Aplaudir')).toBeInTheDocument()
        expect (screen.getByText('3')).toBeInTheDocument()
    });

    it('Deve verificar se a função handleLike foi chamada com id correto', () => {
        const handleLike = jest.fn()
        render(<Comment comment={mockComment} handleDelete={jest.fn()} handleLike={handleLike}/>)

        const likeButton = screen.getByText("Aplaudir")
        fireEvent.click(likeButton)

        expect(handleLike).toHaveBeenCalled()
        expect(handleLike).toHaveBeenCalledTimes(1)
        expect(handleLike).toHaveBeenCalledWith(expect.any(Object), "1")
    });

    it('Deve verificar se funcao handleDelet foi chama corretamente', () => {
        const handleDelet = jest.fn()
        render(<Comment comment={mockComment} handleDelete={handleDelet} handleLike={jest.fn()}/>)

        const deletButton = screen.getByTestId("buttonDelet")
        fireEvent.click(deletButton)

        expect(handleDelet).toHaveBeenCalled()
        expect(handleDelet).toHaveBeenCalledTimes(1)
        expect(handleDelet).toHaveBeenCalledWith(expect.any(Object), "1")
        
    });
});