import React from "react";

// destruct needed data from props
const List = ({ people }) => {

  return (
    <>
      {people.map((person) => {
        const { name, age, image } = person;
        return (
          <article className="person">
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>{age} Yer</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
