import "./styles.css"

type TexteAreaProps = {
    message: string;
    setMessage: (value: string) => void
    title: string
}

export default function TextAreaCustom({ message, setMessage, title }: TexteAreaProps) {
    return (
        <textarea
            placeholder={title}
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea >
    )
}