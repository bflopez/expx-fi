"use client"
import {useState} from "react";
import PageTitle from "@/components/ui/PageTitle";
import Button from "@/components/ui/Button";
import MobileLoginMenu from "@/features/MobileLoginMenu/MobileLoginMenu";
import Image from "next/image";

const Home = () => {
    const toggleLoginMenu = () => {
        setShowLoginMenu((prevState)=> !prevState)
    }
    const [showLoginMenu, setShowLoginMenu] = useState(false)
  return (
    <main className="flex flex-col min-h-screen px-5 py-3 relative">
        <div className="flex flex-row justify-between">
            <Image className="object-contain" src="https://exponential.imgix.net/app/exponential-logo-dark?auto=format&fit=max&w=3840" alt="Exponential Logo" width={138} height={24}/>
            <Button onClick={toggleLoginMenu}>Login</Button>
        </div>
        <div className="flex items-center justify-center flex-grow">
            <PageTitle title="Coming soon"/>
        </div>
        <MobileLoginMenu open={showLoginMenu} toggleLoginMenu={toggleLoginMenu}/>
    </main>
  );
}
export default Home;