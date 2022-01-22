import {FunctionComponent} from "react";
import {JobListingProps} from "./job-listing.types";

const JobListing: FunctionComponent<JobListingProps> = ({ id, location, position, recruiter, movie  }) => {
    return (
        <div key={id}>
            <p>{position} on {movie} in {location}</p>
            <p>offered by {recruiter}</p>
        </div>
    )
}

export default JobListing