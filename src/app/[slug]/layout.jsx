import Nav from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
        <Nav/>
        {children}
    </>
  )
}
