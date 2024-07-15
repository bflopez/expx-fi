import {ReactNode} from "react";

interface DataDisplayCardProps{
    title: string
    dataPoint: string | number
    statusText: string;
    statusTextColor: 'red' | "green" | "neutral"
    icon: ReactNode
}
const DataDisplayCard = (props: DataDisplayCardProps) =>{
    const {title, dataPoint, statusText, statusTextColor, icon} = props;
    const statusTextColorClass = {
        "green": "text-green-700",
        "red": "text-red-700",
        "neutral": ""
    }
    return (
        <div className="rounded-xl border shadow">
            <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3
                className="tracking-tight text-sm font-medium">{title}</h3>
                {icon}
            </div>
            <div className="p-6 pt-0">
                <div className="text-2xl font-bold">{dataPoint}</div>
                <p className={`text-xs ${statusTextColorClass[statusTextColor]}`}>{statusText}</p></div>
        </div>
    )
}

export default DataDisplayCard;