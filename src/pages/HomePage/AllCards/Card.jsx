function Card(props) {
  const { image } = props;
  return (
    <>
      {/* <article className="flex18 eachCard">
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
   </article> */}

      <article className="overflow-hidden dark:shadow-gray-800 rounded-md py-4 border">
        <img className="w-18 h-16 m-auto" src={image} alt="Mountain" />
        <div className="px-4 py-4">
          <div className="font-bold text-xl mb-2 text-center">Mountain</div>
          <p className="text-gray-700 dark:text-gray-300 text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perfe
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="block text-center  bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1  text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2 m-auto">
            photography
          </span>
        </div>
      </article>
    </>
  );
}

export default Card;
