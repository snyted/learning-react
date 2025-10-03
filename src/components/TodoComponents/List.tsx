export const List = ({ children }: React.PropsWithChildren) => {
  return <ol className="w-full flex flex-col justify-center gap-4">{children}</ol>;
};
