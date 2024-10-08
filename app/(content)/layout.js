import Footer from "../components/ui/footer";
import Header from "../components/ui/header";

export default function ContentLayout({ children }) {
  return (
    <div className="bg-slate-100">
      {children}
      <Footer />
    </div>
  );
}
