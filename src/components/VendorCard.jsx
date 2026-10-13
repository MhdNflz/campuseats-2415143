function VendorCard({name, location, openHours, isOpen}) {
    const vendor = {
        name: "Kafe Mahallah Salahuddin",
        location: "Mahallah Salahuddin",
        openHours: "7:30 am - 10:00 pm",
        isOpen: true,
    };

    return (
        <article className="card vendor-card"> 
            <div className="thumb" aria-hidden="true">
                {vendor.name.charAt(0)}
            </div>
            <div>
                <h2>{vendor.name}</h2>
                <p className="muted">{vendor.location}</p>
                <p className="muted">Open: {VendorCard.openHours} </p>
                <span className={vendor.isOpen ? 'status open' : 'status closed'}>
                    {vendor.isOpen ? 'Open now' : 'Closed'}
                </span>
            </div>
        </article>
        
    )
}

export default VendorCard