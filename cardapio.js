const cardapioData = [
  {
    categoria: "Pilsen",
    itens: [
      { nome: "Chopp Pilsen 300ml", preco: "R$ 7,00" },
      { nome: "Chopp Pilsen 500ml", preco: "R$ 10,00" }
    ]
  },
  {
    categoria: "IPA",
    itens: [
      { nome: "Chopp IPA 300ml", preco: "R$ 9,00" },
      { nome: "Chopp IPA 500ml", preco: "R$ 13,00" }
    ]
  },
  {
    categoria: "Weiss",
    itens: [
      { nome: "Chopp Weiss 300ml", preco: "R$ 8,50" },
      { nome: "Chopp Weiss 500ml", preco: "R$ 12,00" }
    ]
  }
];

const cardapioDiv = document.getElementById("cardapio");

cardapioData.forEach(categoria => {
  const catDiv = document.createElement("div");
  catDiv.className = "categoria";
  catDiv.textContent = categoria.categoria;
  cardapioDiv.appendChild(catDiv);

  categoria.itens.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML = `<span class="nome-item">${item.nome}</span><span class="preco">${item.preco}</span>`;
    cardapioDiv.appendChild(itemDiv);
  });
});
