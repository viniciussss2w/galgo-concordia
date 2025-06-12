const cardapioData = [
  { nome: "Chopp Pilsen 300ml", preco: "R$ 7,00" },
  { nome: "Chopp Pilsen 500ml", preco: "R$ 10,00" },
  { nome: "Chopp IPA 300ml", preco: "R$ 10,00" },
  { nome: "Chopp IPA 500ml", preco: "R$ 13,00" },
  { nome: "Chopp Weiss 300ml", preco: "R$ 8,50" },
  { nome: "Chopp Weiss 500ml", preco: "R$ 15,00" }
];

// Função para montar o cardápio na página
const cardapioDiv = document.getElementById("cardapio");

cardapioData.forEach(item => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `<span class="nome-item">${item.nome}</span><span class="preco">${item.preco}</span>`;
  cardapioDiv.appendChild(div);
});
