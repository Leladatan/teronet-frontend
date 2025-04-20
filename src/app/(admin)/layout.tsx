import AdminMenu from "@/widgets/admin-menu";

const Layout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className="flex gap-5">
            <AdminMenu />
            <section className="container mx-auto px-4 py-12">
                {children}
            </section>
        </main>
    );
};

export default Layout;