function Card(props) {
 const { image } = props;
 return (
  <>
   <article className="flex18 eachCard">
    <figure style={{}}>
     <img
      style={{ width: "35%", height: "60%", display: "block", margin: "auto" }}
      className="cardImg"
      src={image}
      alt="first Card Img"
     />
    </figure>
    <p style={{ textAlign: "center", marginTop: "2rem" }}>
     Thanks to Deflify you will experience unconventional forms of delivery
    </p>
   </article>
  </>
 );
}

export default Card;
