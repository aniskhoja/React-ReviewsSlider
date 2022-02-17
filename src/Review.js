import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
   const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index]
  
  const checkNumber = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number
  }

  const handlePrev = () => {
      const newIndex = index - 1;
      setIndex(checkNumber(newIndex))

  };
  
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(checkNumber(newIndex))
  }

  const handleRandom = () => {
    let random = (Math.floor(Math.random() * people.length))
    if (random === index) {
      random = index + 1
    }
    setIndex(checkNumber(random))
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h1 className='author'>{name}</h1>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button onClick={handlePrev} className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button onClick={ handleNext} className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={handleRandom} className='random-btn'>Suprise me</button>
    </article>
  )
};

export default Review;
 