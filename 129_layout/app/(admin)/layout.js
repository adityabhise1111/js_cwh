
import Navbar from "@/components/Navbar";



export default function RootLayout({ children }) {
  return (
    <>
        <Navbar/>
        {children}
    </>
      
  );
}

export const metadata = {
  title: '...',
  description: '...',
}
