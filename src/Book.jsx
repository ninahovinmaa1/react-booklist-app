import React from 'react';

const Book = ({img, title, author}) => {

const clickHandler = () => {
    alert('Item added to cart');
}

const complexExample = (author) => {
    console.log(author);
}

    return (
    <article className="book">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Add to cart</button>
        <button type="button" onClick={() => complexExample(author)}>complex example</button>

    </article>
    );
};

export default Book