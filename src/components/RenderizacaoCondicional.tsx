// No react não tem uma forma especial de escrever sintaxes para condições, basicamente tudo é herdado
// do JavaScript tradicional
export const RenderizacaoCondicional = () => {
  let content;
  const isLoggedIn = false;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  <>
    {content}

    {/* Teria como deixar algo menos verboso usando o operador ternário dentro do próprio TSX/JSX. */}
    {isLoggedIn ? <AdminPanel /> : <LoginForm />}

    {/* Se você não precisa do else, da pra deixar mais simples ainda com o E comercial. */}
    {isLoggedIn && <AdminPanel />}
  </>;
};

const AdminPanel = () => {
  return <></>;
};

const LoginForm = () => {
  return <></>;
};
