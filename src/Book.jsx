import React from 'react';

const Book = ({img, title, author}) => {

    const clickHandler = (author, title) => {
        alert(`${author}: ${title} added to cart`);
    }

    return (
    <article className="book">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={() => clickHandler(author, title)}>Add to cart</button>
    </article>
    );
};

export default Book