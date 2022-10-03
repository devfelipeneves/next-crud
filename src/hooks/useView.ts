import { useState } from "react";

export default function useView() {
    const [view, setView] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setView('tabela')
    const exibirForm = () => setView('form')

    return {
        formularioVisivel: view === 'form',
        tabelaVisivel: view === 'tabela',
        exibirTabela,
        exibirForm
    }
}