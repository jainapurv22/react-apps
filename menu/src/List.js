import React from "react";

const List = ({ items }) => {
  //console.log(items);
  return (
    <div className="list">
      {items.map((item) => {
        return (
          <div key={item.id} className="item">
            <div className="image">
              <img src={item.img} alt={item.title} />
            </div>

            <section className="info">
              <div className="title">
                <h4>{item.title}</h4>
                <h4 className="price">{"$" + Math.floor(item.price)}</h4>
              </div>
              <div className="underline"></div>
              <p>{item.desc}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default List;
