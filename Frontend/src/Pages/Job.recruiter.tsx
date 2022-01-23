import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";

export default function RecruiterJob() {
    let {id} = useParams()
    let query = useQuery('spec-job-recruiter', async () => {
        let req = await fetch(`http://localhost:5000/jobs/job/${id}`)
        if(!req.ok) {
            throw new Error(`Error: Job with id ${id} is not valid`)
        }
        let res = req.json()
        return res
    })

    return (
        <div>
            <p>Jon Stemmer</p>
            <p>
                <p>Production: Story of Life (Link: <a href="/job/recruiter/2">2nd Movie</a>)</p>
            </p>
        </div>
    )
}