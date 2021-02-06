export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-end p-4">
      <p>©{year} NOZOMI ISHII</p>
    </footer>
  );
};
