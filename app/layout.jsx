import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";
import Footer from '@components/Footer'

import {Inter} from 'next/font/google'

export const metadata = {
  title: "100% Free - G1 Practice Exam",
  description: "Discover how good you are to actually do the G1 Exam on Ontario",
};

const inter = Inter({
  subsets: ['latin']
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className}` }>
        <Provider>
          <div id="root" className="flex h-screen flex-col transition-all duration-700 ease-in-out">
            <header>
            <Nav />
          </header>
          <main className="grid grow items-start w-[90%] mx-auto">
            
            {children}
          </main>
          <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
