function Card(props) {
  const { image, title, handleNavigation, routeName } = props;
  return (
    <>
      <article className="overflow-hidden rounded-md py-4 border">
        <img className="w-18 h-16 m-auto" src={image} alt={title} />
        <div className="px-4 py-4">
          <div className="font-bold text-xl mb-2 text-center">{title}</div>
        </div>
        <div
          className="px-6 pt-2 pb-2 cursor-pointer"
          onClick={() => handleNavigation(routeName)}
        >
          <span className="block text-center  bg-gray-200 rounded-full px-3 py-1  text-sm font-semibold text-gray-700 mr-2 mb-2 m-auto">
            Explore
          </span>
        </div>
      </article>
    </>
  );
}

export default Card;
