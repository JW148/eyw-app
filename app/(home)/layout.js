import Footer from "../components/footer";

export default function HomeLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
