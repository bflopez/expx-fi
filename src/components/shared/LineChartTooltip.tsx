import {TooltipProps} from "recharts";
import {NameType, ValueType} from "recharts/types/component/DefaultTooltipContent";
import dollarFormatter from "@/utils/dollarFormatter"
import dateFormatter from "@/utils/dateFormatter";

const LineChartTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    //This component should be iterating over the payload array, but I was having trouble
    //with tailwind taking in the payload color as a classname. (bg-[#9b51e0] vs bg[payload[0].color)
    if (active && payload && payload.length) {
        return (
            <div className="border-[1px] p-3 bg-white rounded-lg">
                <p className="font-semibold mb-1 text-sm">{dateFormatter(label)}</p>
                <div className={'flex flex-row items-center justify-between text-sm'}>
                    <div className={'flex flex-row items-center mr-4'}>
                        <div className={`w-3 h-3 bg-[#9b51e0] mr-2 rounded`}></div>
                        <p className={"opacity-70 text-gray-900"}>{(payload[0].name as string).toUpperCase()}:</p>
                    </div>
                    <p className={"font-semibold text-gray-900"}>{(payload[0].value as number * 100).toFixed(2)}%</p>
                </div>
                <div className={'flex flex-row items-center justify-between text-sm'}>
                    <div className={'flex flex-row items-center mr-4'}>
                        <div className={`w-3 h-3 bg-[#4799EA] mr-2 rounded`}></div>
                        <p className={"opacity-70"}>{(payload[1].name as string).toUpperCase()}:</p>
                    </div>
                    <p className={"font-semibold"}>{dollarFormatter(payload[1].value as number)}</p>
                </div>
            </div>
        );
    }
};

export default LineChartTooltip;