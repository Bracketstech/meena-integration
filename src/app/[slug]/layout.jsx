import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="ltr">
        <Nav/>
        {children}
        <Footer/>
    </div>
  )
}
