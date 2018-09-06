import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);

    const { color, bool, number } = query;
    if(bool === 'true'){

    }
    if(parseInt(number) > 10){
        
    }
    return (
        <div>
           <h2 style={{color}}>about</h2>
           <p>hello, this is {match.params.name}</p>
        </div>
    );
};

export default About;