import Biblioteca from "@/core/Biblioteca";
import Layout from "../components/layout";
import Tabela from "../components/tabela";

export default function Bibliotecas() {
    const bibliotecas= Biblioteca.geraEventosMock()
    return (
        <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-bl from-orange-900 via-orange-400 to-orange-900
        text-white`}>
        <Layout titulo="Cadastro de bibliotecas">
        <Tabela bibliotecas={bibliotecas}></Tabela>
        </Layout>
        </div>
    )
}