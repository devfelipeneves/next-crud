import { useEffect, useState } from "react";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../firebase/db/ColecaoCliente";
import useView from "./useView";

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    const { exibirForm, exibirTabela, tabelaVisivel, formularioVisivel } = useView()

    const [cliente, setCliente] = useState<Cliente>(Cliente.empty())
    const [clientes, setClientes] = useState<Cliente[]>()

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirForm()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente(){
        setCliente(Cliente.empty())
        exibirForm()
    }

    return {
        cliente,
        clientes,
        tabelaVisivel,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        exibirForm,
        exibirTabela
    }
}