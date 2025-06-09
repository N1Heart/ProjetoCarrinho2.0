import React from "react";
import SidebarCart from "../cart/SidebarCart";
import { useCart } from "../../context/CartContext";
import { produtos } from "./Produtos";
import "./PaginaProdutos.css";

export default function PaginaProdutos() {
  const { addItem } = useCart();

  return (
    <>
      <SidebarCart />
      <div className="pagina-produto">
        <header className="cabeçalho">
          <h1>Loja de Componentes de PC</h1>
        </header>

        <div className="gradeProdutos">
          {produtos.map((prod, idx) => (
            <div key={idx} className="cardProduto">
              <img src={prod.imagem} alt={prod.nome} />
              <div className="produtoInfo">
                <h3>{prod.nome}</h3>
                <p className="preço">R$ {prod.valor.toFixed(2)}</p>
                <button
                  className="botaoCompra"
                  onClick={() =>
                    addItem({ id: prod.id, nome: prod.nome, imagem: prod.imagem })
                  }
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
