import { Toaster } from "@/components/ui/sonner";
import Navbar from "../../components/Navbar";
import ClientLayout from "@/components/ClientLayout";

export default function Layout({children}: Readonly<{children: React.ReactNode}>){
      return(
      <ClientLayout>
        <main className="">
            <Navbar />
            {children}
            <Toaster/>
        </main>
      </ClientLayout>
      )    
}