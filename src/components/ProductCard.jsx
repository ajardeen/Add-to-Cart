function ProductCard({ id, title, price, image, description, addTOCart }) {
  return (
    <div
      key={id}
      className="flex items-center justify-center border-b border-gray-500 transition-all hover:bg-gray-100 hover:shadow-xl hover:scale-[105%] duration-300"
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden h-[480px]">
        <div className="p-3">
          <button className="absolute top-2 right-2  ">
            <span className="material-icons active:text-red-500">favorite</span>
          </button>
          <img
            src={image}
            alt="Nike Air Max"
            className="w-full h-52 object-scale-down"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-gray-800 line-clamp-2 w-[80%]">
              {title}
            </h2>
            <span className="text-2xl font-bold text-blue-600">${price}</span>
          </div>
          <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
          <button
            onClick={() => {
              addTOCart(id);
            }}
            className="w-full mt-2 bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
          >
            <span className="material-icons mr-2">shopping_cart</span>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
