import ThemeButton from "@/components/ThemeButton";

interface Prop {
  children: React.ReactNode;
}

const Layout: React.FC<Prop> = ({ children }) => {
  return (
    <div className="dark:bg-neutral-900">
      <ThemeButton />
      {children}
    </div>
  );
};

export default Layout;
