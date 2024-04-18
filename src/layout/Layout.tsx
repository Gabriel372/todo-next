import Header from "../pages/Header";

function Layout({ children }:any) {
    return (
      <>
        <Header/>
        <main>
        {children}
        </main>
      </>
    )
  }

export default Layout

