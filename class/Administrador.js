const Usuario = require('./Usuario')

class Administrador extends Usuario {
    constructor(nome, idade) {
        super(nome, idade)
        this.produtos = []
    }

    acessoPainel() {
        return "Acesso ao painel administrativo."
    }

    adicionarProduto(produto) {
        this.produtos.push(produto)
    }

    removeProduto(nomeProduto) {
        this.produtos = this.produtos.filter(p=> p.nome !== nomeProduto)
    }

    listarProdutos() {
        return this.produtos
    }
}

module.exports = Administrador