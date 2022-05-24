import React from 'react';

const BookItem = ({data}) => {
    return (
        <div>
            {data.title} /////by: {data.author}
        </div>
    );
};

export default BookItem;