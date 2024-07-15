import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import APYTVLDashboardCard from "@/features/APYTVL/APYTVLDashboardCard";
import {logoutAction} from "@/actions/logoutAction";


const DashboardPage = async () => {
    return (
        <>
            <div className="flex flex-row justify-between border-b px-5 py-3 items-center">
                <Link href="/" className="h-full">
                    <Image className="object-contain"
                           src="https://exponential.imgix.net/app/exponential-logo-dark?auto=format&fit=max&w=3840"
                           alt="Exponential Logo" width={138} height={24}/>
                </Link>
                <form action={logoutAction}>
                    <Button variant="secondary" type="submit">Log out</Button>
                </form>
            </div>
            <main className="p-5">
                <PageTitle title="Dashboard"/>
                <APYTVLDashboardCard/>
            </main>
        </>

    )
}

export default DashboardPage;