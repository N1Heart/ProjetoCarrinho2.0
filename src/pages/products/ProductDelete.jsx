import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDelete() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: buscar produto por ID na sua API, somente para exibir nome:
    // const prod = await getProduct(id);
    // setNome(prod.nome);
  }, [id]);

  const handleDelete = async () => {
    // TODO: chamar deleteProduct da sua API, ex:
    // await deleteProduct(id);
    navigate("/products");
  };

  return (
    <div style={{ maxWidth: 480, margin: "40px auto", textAlign: "center" }}>
      <h2>Excluir Produto</h2>
      <p>Tem certeza que deseja excluir <strong>{nome}</strong>?</p>
      <button
        onClick={handleDelete}
        style={{
          marginRight: 10,
          background: "#e74c3c",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: 4,
          cursor: "pointer"
        }}
      >
        Sim, excluir
      </button>
      <button
        onClick={() => navigate("/products")}
        style={{
          background: "#ccc",
          color: "#333",
          padding: "10px 20px",
          border: "none",
          borderRadius: 4,
          cursor: "pointer"
        }}
      >
        Cancelar
      </button>
    </div>
  );
}
