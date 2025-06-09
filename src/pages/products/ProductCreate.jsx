import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductForm.css";

export default function ProductCreate() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: chamar createProduct da sua API, ex:
    // await createProduct({ nome, valor: parseFloat(valor), imagem });
    navigate("/products");
  };

  return (
    <div className="form-container">
      <h2>Criar Novo Produto</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label>
          Nome do Produto:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>

        <label>
          Valor (R$):
          <input
            type="number"
            step="0.01"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </label>

        <label>
          URL da Imagem:
          <input
            type="url"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            required
          />
        </label>

        <div className="form-actions">
          <button type="submit">Salvar</button>
          <button type="button" onClick={() => navigate("/products")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
