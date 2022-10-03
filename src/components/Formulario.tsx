import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteOnChange?: (cliente: Cliente) => void
    cancelar?: () => void
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada 
                    readonly
                    text="Código" 
                    value={id}
                    className="mb-4"
                />
            ) : false}
            <Entrada 
                text="Nome" 
                value={nome}
                onChange={setNome}
                className="mb-4"
            />
            <Entrada 
                text="Idade" 
                type="number" 
                value={idade}
                onChange={setIdade}
            />
            <div className="mt-7 flex justify-end">
                <Botao cor="blue" className="mr-2" 
                    onClick={() => props.clienteOnChange?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" onClick={props.cancelar}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}