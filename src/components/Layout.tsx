import Titulo from "./Titulo";

interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col w-3/4 sm:w-2/3
            bg-white text-gray-800
            rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-4">
                {props.children}
            </div>
        </div>
    )
}