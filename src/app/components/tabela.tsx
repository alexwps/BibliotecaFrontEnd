import Biblioteca from "@/core/Biblioteca"
interface TabelaProps {
    bibliotecas: Biblioteca[]
}
export default function Tabela(props: TabelaProps) {
    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">Id</th>
                <th className="text-left p-3">Nome</th>
                <th className="text-left p-3">Endereco</th>
                <th className="text-left p-3">Funcionamento</th>
                <th className="text-left p-3">Observacao</th>
            </tr>)
    }
    function renderDados() {
        return props.bibliotecas?.map((biblioteca, i) => {
            return (
                <tr key={biblioteca.id}
                    className={`${i % 2 === 0 ? 'bg-neutral-300' : 'bg-neutral-100'} `}>
                    <td className="text-left p-3">{biblioteca.id}</td>
                    <td className="text-left p-3">{biblioteca.nome}</td>
                    <td className="text-left p-3">{biblioteca.endereco}</td>
                    <td className="text-left p-3">{biblioteca.funcionamento}</td>
                    <td className="text-left p-3">{biblioteca.observacao}</td>
                </tr>)
        })
    }
    return (
        <table className="w-full rounded-x1 overflox-hidden"> 
            <thead className={`text-gray-100 bg-gradient-to-r from blue-900 to-gray-700`}>
            {renderHeader()} </thead>
            <tbody>
                {renderDados()} </tbody>
        </table>)
}