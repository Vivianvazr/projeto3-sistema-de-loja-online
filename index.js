const Administrador = require("./class/Administrador")
const Produto = require("./class/Produto")
const Usuario = require("./class/Usuario")
const Pedido = require("./class/Pedido")
const Cliente = require("./class/Cliente")


const user = new Usuario();

const cliente = new Cliente("Everson", 89)
const admin = new Administrador("Berckson", 56)

const pedido = new Pedido(cliente, cliente.carrinho)

const produto1 = new Produto("Notebook", 1788, 90)
const produto2 = new Produto("Celular", 1000, 5)

admin.adicionarProduto(produto1)
admin.adicionarProduto(produto2)

cliente.adicionarProduto(produto1)
cliente.adicionarProduto(produto2)

console.log(user.acessoPainel())
console.log("=================================")
console.log(admin.acessoPainel())
console.log(`Produtos cadastrados pelo admin: [
    ${produto1.mostrarProduto()}
    ${produto2.mostrarProduto()}
]`)
console.log("=================================")
console.log(cliente.acessoPainel())
console.log(`Carrinho da cliente: [
    ${produto1.mostrarProduto()}
    ${produto2.mostrarProduto()}
]`)
console.log(`Valor total do pedido: ${pedido.calcularTotal()}`)