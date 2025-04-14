function Card({src, alt}) {
  return (
    <div className="card">
      <img src={src} alt={alt} className="card-image"/>
    </div>
  )
}

export default Card;
