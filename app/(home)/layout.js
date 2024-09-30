import Footer from "../components/ui/footer";
import Header from "../components/ui/header";

export default function HomeLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
