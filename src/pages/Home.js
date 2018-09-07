import React from 'react';

const Home = ({history}) => {
    return (
        <div>
         <h2>Home</h2>
         <button onClick={()=> {
             history.push('./about/javascript')
         }}>
         Use javascript link
         </button>
        </div>
    );
};

export default Home;