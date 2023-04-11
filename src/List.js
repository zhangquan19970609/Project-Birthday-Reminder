import React from 'react';

const List = ({users, handleClear}) => {
  return (
    <>
      <section className='container'>
        <h3>{users.length} birthdays today</h3>
        {users.map((user) => {
          const {id, image, name, age} = user;
          return <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
      })}
      <button onClick={handleClear}>Clear All!</button>
    </section>
    </>
  );
};

export default List;
