import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
const [title, setTitle] = useState(props.title);


const clickHandler = () => {
   setTitle('Title Changed Temporarily')

};

  return (
    <div>
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </div>
    </div>
  );
}

export default ExpenseItem