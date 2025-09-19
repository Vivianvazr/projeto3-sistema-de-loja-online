class Pedido {
    constructor(cliente, carrinho) {
        this.cliente = cliente
        this.carrinho = carrinho
    
    }

    calcularTotal() {
        return this.carrinho.reduce((total, produto) => total + produto.preco, 0)
    }
}

module.exports = Pedido