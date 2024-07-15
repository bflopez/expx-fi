const dateFormatter = (date: Date)=>{
    return new Intl.DateTimeFormat('en-US',{month: "short", day: "numeric", year: "numeric"}).format(new Date(date))
}

export default dateFormatter;