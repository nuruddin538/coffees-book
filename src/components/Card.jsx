import { Link, useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Card = ({ coffee, handleRemove }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${id}`}
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img className="text-xl" src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl">Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popularity: {popularity}</p>
        </div>
      </Link>
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="bg-amber-300 p-3 rounded-full cursor-pointer text-xl absolute -top-5 -right-2"
        >
          <MdDelete />
        </div>
      )}
    </div>
  );
};

export default Card;
