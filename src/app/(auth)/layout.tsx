const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <main className="flex items-center justify-center h-screen-70px bg-gradient-to-b from-slate-50 to-slate-100 p-4">{children}</main>;
};

export default Layout;
