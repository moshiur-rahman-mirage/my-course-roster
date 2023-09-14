import React, { useState, useEffect } from 'react'
import Card from '../card/Card';

export default function Cards() {

    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch("../public/Course.json")
            .then(res => res.json())
            .then(data => setCourse(data.courses))
    }, []);

    return (
        <>
            <div className='w-2/3'>
            <div className='grid grid-cols-3 gap-2'>
                {course.map((course) => {
                    return (
                        <Card
                            key={course.id}
                            course={course} />
                    )
                })
                }
            </div>
            </div>
        </>

    )
}
