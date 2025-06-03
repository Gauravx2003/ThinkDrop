import { Toaster } from "@/components/ui/sonner";
import Navbar from "../../components/Navbar";

export default function Layout({children}: Readonly<{children: React.ReactNode}>){
      return(
        <main className="">
            <Navbar />
            {children}
            <Toaster/>
        </main>
      )    
}