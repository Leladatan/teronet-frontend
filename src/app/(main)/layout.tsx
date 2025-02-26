import type React from "react";

const Layout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className="container mx-auto px-4 py-8">
            {children}
        </main>
    );
};

export default Layout;