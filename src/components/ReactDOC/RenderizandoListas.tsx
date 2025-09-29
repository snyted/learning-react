// Um exemplo com um array de produtos.
const products = [
  { title: "repolho", isFruit: false, id: 1 },
  { title: "alho", isFruit: false, id: 2 },
  { title: "maçã", isFruit: true, id: 3 },
];

// Dentro do seu componente pode-se usar a função map() para transformar o array de produtos em um
// array de itens <li></li>

export const ShoppingList = () => {
  const ListItems = products.map((product) => (
    // Note como cada <li> possui um atributo *key*. Ele deve ser único podendo ser uma string ou número. Apenas dessa forma o react consegue lidar com as mudanças posteriores que acontece em cada elemento ou componente.
    <li
      key={product.id}
      className={product.isFruit ? "text-green-600" : "text-red-800"}
    >
      {product.title}
    </li>
  ));

  return <ul>{ListItems}</ul>;
};
