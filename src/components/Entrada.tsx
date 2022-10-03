interface EntradaProps {
    text: string
    type?: 'text' | 'number'
    value: any
    readonly?: boolean
    onChange?: (value: any) => void
    className?: string
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input 
                type={props.type ?? 'text'} 
                value={props.value}
                readOnly={props.readonly}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.readonly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}