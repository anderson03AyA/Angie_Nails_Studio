import { items } from "../data/items";

function ButtonList() {
  return (
    <div className="button-container">
      {items.map((item) => (
        <button
          key={item.id}
          className="button"
          onClick={() => (window.location.href = item.link)}
        >
          <span className="icon">{item.icon}</span>
          <span className="text">{item.name}</span>
        </button>
      ))}
    </div>
  );
}
export default ButtonList;
