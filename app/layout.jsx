import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from "@components/Provider";

export const metadata = {
  title: "Estü Mezun",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            <div className="flex-center flex-col min-h-[87.5vh] w-full">
              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
