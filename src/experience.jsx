import React from 'react';
import data from './data.json';

function Experience() {
    return (
        <div className="exp">
            <p className='heading'>exp</p>
            <div>
                {Object.entries(data.internships).map(([company, details]) => (
                    <p className="company" key={company}>
                        <a className='link' href={details.url}> {company} </a>
                        <p> {details.role} || {details.duration}</p>
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Experience;
