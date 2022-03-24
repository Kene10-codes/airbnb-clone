
export default function Card(props) {
    console.log(props.item.openSpots)
    let textBadge;
    if (props.item.openSpots === 0) {
         textBadge = "SOLD OUT"
        } else if (props.item.location === "Online") {
            textBadge = "ONLINE"
    } 
    return (
        <div className='card'>
            {textBadge && <div className="card--badge">{textBadge}</div>}
              <img src={`../images/${props.item.coverImg}`} className = "card--image" />
              <div className='card--stats'>
                  <img src="../images/Star.png" className="card--star" />
                  <span>{props.item.stats.rating}</span>
                  <span className='gray'>({props.item.stats.reviewCount}) -</span>
                  <span className='gray'>{props.item.location}</span>
              </div>
              <p className="card-title">{props.item.title}</p>
              <p className="card--price"> <span className='bold'>From ${props.item.price}</span> / person</p>
        </div>
    )
}