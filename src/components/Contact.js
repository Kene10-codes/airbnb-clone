

export default function Contact({img, name, phone, email}) {
  
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src={img} />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={img} />
                <p>{email}</p>
            </div>
        </div>
    )
}