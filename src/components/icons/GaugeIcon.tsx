const GaugeIcon = () =>{
    return (
        <svg className="h-4 w-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
             stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9"/>
            <circle cx="12" cy="12" r="1"/>
            <line x1="13.41" y1="10.59" x2="16" y2="8"/>
            <path d="M7 12a5 5 0 0 1 5 -5"/>
        </svg>
    )
}

export default GaugeIcon;