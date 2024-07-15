import {FormEvent, MouseEventHandler, useState} from "react";
import Button from "@/components/ui/Button";
import TextInput from "@/components/form/TextInput";
import InfoIcon from "@/components/icons/InfoIcon";

const MobileLoginMenu = ({open, toggleLoginMenu}: {
    open: boolean,
    toggleLoginMenu: MouseEventHandler<HTMLElement>
}) => {
    const [error, setError] = useState(false)
    const handleLogin = async (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')
        const password = formData.get('password')
        const res = await fetch( "/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        const json = await res.json();
        localStorage.setItem("user", JSON.stringify(json.userInfo))
        if(res.ok){
            //router from Next was not always going to dashboard locally
            window.location.pathname = "/dashboard"
        } else{
            setError(true)
        }
    }
    return (
        <div className={`bg-gray-800 absolute top-0 left-0 w-full h-full transition-opacity ease-in-out delay-150 duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <div className="h-full flex flex-col justify-center items-center relative">
                <div className="bg-white shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4 w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
                    <div className="flex flex-row items-center px-4 py-2 bg-blue-200 rounded mb-4">
                        <InfoIcon/>
                        <p className="ml-2 text-sm">Use <span className="font-bold">user@expx.fi</span> with password <span className="font-bold">Br98PKe*js76QaF@1OdX</span></p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <TextInput label={"Username"} id={"username"} defaultValue="user@expx.fi" required/>
                        <TextInput label={"Password"} id={"password"} defaultValue="Br98PKe*js76QaF@1OdX" required type="password"/>
                        {error ? (<div className="mb-6"><p className="text-red-500">Incorrect username or password</p></div>) : null}
                        <Button variant="primary" type="submit">
                            Log In
                        </Button>
                    </form>
                </div>
                <div className="absolute bottom-[20px]">
                    <Button variant="secondary" onClick={toggleLoginMenu}>
                        Close login
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MobileLoginMenu;