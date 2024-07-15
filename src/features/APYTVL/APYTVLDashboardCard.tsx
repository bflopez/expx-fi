"use client"
import dollarFormatter from "@/utils/dollarFormatter";
import APYTVLLineChart from "@/features/APYTVL/APYTVLLineChart";
import {useEffect, useState} from "react";
import DataDisplayCard from "@/components/shared/DataDisplayCard";
import PercentIcon from "@/components/icons/PercentIcon";
import GaugeIcon from "@/components/icons/GaugeIcon";
import DollarSignIcon from "@/components/icons/DollarSignIcon";
import HeartBeatLineIcon from "@/components/icons/HeartBeatLineIcon";
import DateRangePicker from "@/components/form/DateRangePicker";

const APYTVLDashboardCard = ()=>{
    const [data, setData] = useState<any>(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("user") as string)
        fetch(`/api/${userInfo.contracts[0].symbol}`)
            .then((res) => res.json())
            .then((contractData) => {
                setData(contractData)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data</p>
    return (
        <div className="border rounded-xl p-6 shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h2 className="font-medium leading-none tracking-tight text-2xl">{data.chain}</h2>
                <DateRangePicker/>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <DataDisplayCard title="Annual Percentage Yield" dataPoint={`${(data.apy * 100).toFixed(2)}%`} statusText="-0.30% from last month" icon={<PercentIcon/>} statusTextColor="red"/>
                <DataDisplayCard title="Total Value Locked" dataPoint={dollarFormatter(data.tvl)} statusText={`+${dollarFormatter(21617813)} from last month`} icon={<DollarSignIcon/>} statusTextColor="green"/>
                <DataDisplayCard title="Risk" dataPoint="Lowest" statusText="No change from last month" icon={<GaugeIcon/>} statusTextColor="neutral"/>
                <DataDisplayCard title="Current Yield" dataPoint="3%" statusText="+0.5% from last month" icon={<HeartBeatLineIcon/>} statusTextColor="green"/>
            </div>
            <div className="border shadow rounded-xl p-6">
                <h2 className="font-medium leading-none tracking-tight mb-6">Overview</h2>
                <APYTVLLineChart data={data}/>
            </div>
        </div>
    )
}

export default APYTVLDashboardCard;