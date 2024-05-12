import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div  className='w-full min-h-screen flex flex-col justify-center items-center h-full space-y-5'>
      <h2 className=' text-4xl font-bold'>Page Not Found...</h2>
      <Link to={-1}>
      <button className=' btn text-white btn-error '>
        Go Back</button></Link>
    </div>
  );
};

export default ErrorPage;