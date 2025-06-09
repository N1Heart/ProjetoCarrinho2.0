import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductForm.css";

export default function ProductUpdate() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: buscar produto por ID na sua API, ex:
    // const prod = await getProduct(id);
    // setNome(prod.nome);
    // setValor(prod.valor);
    // setImagem(prod.imagem);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: chamar updateProduct da sua API, ex:
    // await updateProduct(id, { nome, valor: parseFloat(valor), imagem });
    navigate("/products");
  };

  return (
    <div className="form-container">
      <h2>Atualizar Produto</h2>
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
          <button type="submit">Atualizar</button>
          <button type="button" onClick={() => navigate("/products")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
