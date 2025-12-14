import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


export const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"], 
  display: "swap",
});

export const metadata = {
  title: "Bolashak Mektebi",
  description:
    "Онлайн платформа с тестами, уроками и аналитикой для успешной сдачи экзаменов",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <html lang="ru">
        <body
          className={`
            ${montserrat.variable}
            font-sans antialiased
          `}
        >
          {children}
        </body>
      </html>
      <Footer />
    </>
  );
}
