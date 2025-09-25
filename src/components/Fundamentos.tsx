// Aninhamento e criação de componentes

// Um componente React SEMPRE começa com letra maiuscula. (Já as tags HTML sempre são minusculas)

const HelloWorld = () => {
  const user = {
    name: "João Vitor",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSI1kH31DkEXCFtTCDm7rdhYY5YRNnxvnlnMQS_wvfKN8W5Ej18uOaivWj9a6bCjlM9HQwbFcBh5Td7RSE_n4niUn6OBaBozvNM6KDJ4U",
    userImgUrl:
      "https://scontent.ffln8-1.fna.fbcdn.net/v/t39.30808-6/488831273_2060460084456417_6326374120374902182_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=aj9kgDCtiy4Q7kNvwHz2pAz&_nc_oc=Adm4dmB-6nHdGfEG3p9BcJ0qBxK1RqwkDsm30GhIQiR_cBooIPIOVClYEcUF2c2vUXdDxkEA0iP6Fw4npuAzVZa0&_nc_zt=23&_nc_ht=scontent.ffln8-1.fna&_nc_gid=QtHApHYuz_J4G8lciXKnTg&oh=00_AfZaR9Nn8NLZrrMjaHfX9ATEY61EkyDDZcJeWhvKIcjK5A&oe=68DA7CCD",
    imgSize: 20,
  };

  return (
    <div className="text-3xl font-bold">
      {/* Para definir uma classe se usa className em vez de somente class */}
      <h1>Hello, World!</h1>
      <p>O começo de tudo.</p>

      {/* JSX/TSX permite expressões JS/TS através das chaves {} */}
      <p>Bem vindo {user.name}</p>

      {/* Também é possível atribuir expressões JS/TS em atributos do JSX, mas deve colocar
      chaves {} em vez de aspas "". Exemplo: className="classes do tailwind" usa aspas.
      Mas já o atributo src recebe o valor da variável JS/TS.*/}
      <img src={user.imgUrl} className="bg-black w-20 inline-block" />

      {/* Seguindo a mesma ideia, é possível expressões completas dentro das chaves JSX/TSX
      Como no exemplo abaixo, utilizando a concatenação de strings */}
      <img
        src={user.userImgUrl}
        alt={"foto de " + user.name}
        className={`w-${user.imgSize} inline-block ml-1`}
      />

      {/* MyButton é um componente React! */}
      <MyButton />
    </div>
  );
};

// Uma tag JSX ou TSX precisa de fechamento nela mesmo. (Se tiver CHILDREN ai muda)
// Um componente deve retornar sempre uma tag pai, pode ser <div>...conteudo...</div> (nome da tag) ou somente <>...conteudo...</> (Componente vazio)

const MyButton = () => {
  return (
    <button className="bg-blue-600 p-2 rounded-sm block">
      Eu sou um botão!
    </button>
  );
};

export default HelloWorld;
