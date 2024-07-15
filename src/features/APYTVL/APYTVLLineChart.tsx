"use client"
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer, Legend
} from 'recharts';
import dateFormatter from "@/utils/dateFormatter";
import LineChartTooltip from "@/components/shared/LineChartTooltip";

const APYTVLLineChart = (data: any) => {
    return (
        <ResponsiveContainer width={"100%"} aspect={4}>
            <LineChart data={data.data.series}>
                <CartesianGrid vertical={false} opacity={0.35}/>
                <Line dataKey="apy" stroke="#9b51e0" strokeWidth={2} type={"natural"} yAxisId="apy" dot={false} />
                <Line dataKey="tvl" stroke="#4799EA" strokeWidth={2} type={"natural"} yAxisId="tvl" dot={false}  />
                <XAxis dataKey="date" tickFormatter={dateFormatter} axisLine={false} tickMargin={10} minTickGap={20} fontSize={14} interval="preserveEnd"/>
                {/*YAxis Error Console Thread https://github.com/recharts/recharts/issues/3615*/}
                <YAxis hide={true} yAxisId="apy" type={"number"} domain={['dataMin', "auto"]}/>
                <YAxis hide={true} yAxisId="tvl" orientation={"right"} type={"number"} domain={['dataMin', "auto"]}/>
                <Legend formatter={(value) => value.toUpperCase()} wrapperStyle={{bottom: -5}}/>
                <Tooltip content={<LineChartTooltip />} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default APYTVLLineChart;