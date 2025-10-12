export const ToggleItem = ({
  isVisible,
  title,
}: {
  isVisible: boolean;
  title: string;
}) => {
  return (
    <div>
      {isVisible && <div className="bg-sky-700 p-1 text-white">{title}</div>}
      {!isVisible && <p>O conteúdo {title} está escondido.</p>}
    </div>
  );
};
