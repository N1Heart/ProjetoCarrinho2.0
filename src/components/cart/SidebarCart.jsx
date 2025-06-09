import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './SidebarCart.css';

export default function SidebarCart() {
  const { items, removeItem, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const total = items.reduce((sum, item) => sum + item.quantity * item.valor, 0);

  return (
    <>
      <button className="cart-toggle" onClick={() => setIsOpen(o => !o)}>
        {isOpen ? '❯' : '❮'} Carrinho ({items.length})
      </button>

      <div className={`sidebar-cart ${isOpen ? 'open' : ''}`}>
        <h3>Meu Carrinho</h3>

        {items.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <div className="item-info">
                  <img src={item.imagem} alt={item.nome} />
                  <div>
                    <p>{item.nome}</p>
                    <small>Qtd: {item.quantity}</small>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)}>×</button>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <>
            <div className="cart-total">Total: R$ {total.toFixed(2)}</div>
            <button className="clear-btn" onClick={clearCart}>
              Limpar Carrinho
            </button>
          </>
        )}
      </div>
    </>
  );
}

