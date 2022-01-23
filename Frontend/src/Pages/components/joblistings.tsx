import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface JSONOBJ {
    recruiter: string,
    location: string,
    title: string,
    id: number,
    role: string
}

const JobListing: FunctionComponent<JSONOBJ> = ({recruiter, location, title, id, role}) => {
    
    let nav = useNavigate()

    return (
        <div onClick={() => nav('/job/' + role + '/' + id)}>
            <p>Position for movie {title} as {location}</p>
            <p>Recruiter: {recruiter}</p>
        </div>
    )
}

export default JobListing