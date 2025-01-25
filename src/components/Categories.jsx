import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div
      role="tablist"
      className="tabs tabs-lifted flex justify-around items-center space-x-12"
    >
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab font-bold text-xl ${isActive ? "tab-active" : ""}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
