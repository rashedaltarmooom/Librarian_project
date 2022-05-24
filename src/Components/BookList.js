import React from 'react';
import Books from '../data/book';
import BookItem from './BookItem';

const Bookslist = () => {
    const Book = Books.map((data => {
        return <BookItem data={data} />;
    }))
    return (
        <div>
            <p>{Book}</p>
        </div>
    );
};

export default Bookslist;