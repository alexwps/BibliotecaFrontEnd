export default class Biblioteca {
    id: number | null;
    nome: string;
    endereco: string;
    funcionamento: string;
    observacao: string;
    constructor(id: number | null, nome: string, endereco: string,
    funcionamento: string, observacao: string) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.funcionamento = funcionamento;
    this.observacao = observacao;
    }

    static geraBibliotecasMock() {
        return [ new Biblioteca(1, "Biblioteca 1",
        "Rua A - 123 -Centro - Fontoura Xavier",
        "8:30 AS 11:30 E 13:30 AS 17:00", "NÃO FAZER BARULHO, DEVOLVER OS LIVROS"
        ),
        new Biblioteca(2, "Biblioteca 2",
        "Rua B - 456 - Centro - Fontoura Xavier",
        "7:30 AS 12:00 E 13:30 AS 19:00", "NÃO FAZER BARULHO, NÃO COMER DENTRO DA BIBLIOTECA"
        )
        ]
       }

   }

   