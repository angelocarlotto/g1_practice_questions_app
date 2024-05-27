import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "100% Free - G1 Practice Exam",
  description: "Discover how good you are to actually do the G1 Exam on Ontario",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <header className="main">
            <div className="gradient" />
          </header>
          <main className="app">
            <Nav />
            {children}
          </main>
          <footer>Create by: Angelo Carlotto at 28, march of 2024. Toronto, Canada</footer>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
