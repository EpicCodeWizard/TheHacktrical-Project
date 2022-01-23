import {Component} from 'react';


import React from 'react';
import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'

export default function JobRecruiter() {
    
    let {id} = useParams()
    let query = useQuery('spec-job-actor', async () => {
        let req = await fetch(`http://localhost:5000/jobs/job/${id}`)
        if(!req.ok) {
            throw new Error(`Error: Job with id ${id} is not valid`)
        }
        let res = req.json()
        return res
    })

    return (
        <div>
            <p>Jon Stemlen</p>
            <p>
                <p>Accepted into Story of Life (Link: <a href="/job/recruiter/2">2nd Movie</a>)</p>
            </p>
        </div>
    )
}
