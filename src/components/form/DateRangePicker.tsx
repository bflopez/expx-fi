import CalendarIcon from "@/components/icons/CalendarIcon";

const DateRangePicker = ()=>{
    return(
        <div className="flex flex-row items-center border py-1.5 px-4 rounded shadow mt-4 md:mt-0">
            <CalendarIcon/>
            <span className="text-sm text-muted-foreground">
                            December 14, 2021 - March 9, 2022
                        </span>
        </div>
    )
}

export default DateRangePicker;