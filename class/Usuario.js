class Usuario{
    #nome
    #idade
    constructor(nome, idade){
        this.#nome = nome
        this.#idade = idade
    }

    acessoPainel(){
        return "Acesso genérico ao sistema."
    }

    adicionarProduto(){
    }
}
module.exports = Usuario