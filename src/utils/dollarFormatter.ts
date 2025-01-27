const dollarFormatter = (value:number) =>{
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(value)
}

export default dollarFormatter;