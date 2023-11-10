import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Template({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
