interface BotaoProps {
    cor: 'green' | 'blue' | 'gray'
    className?: string
    onClick?: () => void
    children: any
}

export default function Botao(props: BotaoProps) {

    const cor = {
        green: 'from-green-400 to-green-700',
        blue: 'from-blue-400 to-blue-700',
        gray: 'from-gray-400 to-gray-700'
    }

    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r ${cor[props.cor]}
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}