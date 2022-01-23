import { FormEvent, useState } from "react";
import axios from 'axios'

export default function CreateJob() {

  let url = `http://localhost:5000/jobs/create`

  const [info, setInfo] = useState<{
    title: string;
    script: string;
    location: string;
    recruiter: string;
    role: string;
  }>({
    title: "",
    script: "",
    location: "",
    recruiter: "",
    role: ""
  });

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    axios.post(url, {
      movieTitle: info.title,
      recruiter: info.recruiter,
      script: info.script,
      location: info.location,
      role: info.role
    })
  }


  return (
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900 ">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Post a Job Listing
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Create a new listing to find your talent
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Production Title
                  </label>
                </div>
                <input
                  name="title"
                  id="title"
                  value={info.title}
                  onChange={(e) => {
                    setInfo((info) => ({ ...info, title: e.target.value }));
                    console.log(e.target.value);
                  }}
                  placeholder="The Tempest"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                ></input>
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Role
                  </label>
                </div>
                <input
                  name="role"
                  id="role"
                  value={info.role}
                  onChange={(e) => {
                    setInfo((info) => ({ ...info, role: e.target.value }));
                    console.log(e.target.value);
                  }}
                  placeholder="Prospero"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Location
                  </label>
                </div>
                <input
                  name="location"
                  id="location"
                  value={info.location}
                  onChange={(e) => {
                    setInfo((info) => ({
                      ...info,
                      location: e.target.value,
                    }));
                    console.log(e.target.value);
                  }}
                  placeholder="Los Angeles, CA"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="type"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Script
                  </label>
                </div>
                <textarea
                  name="script"
                  id="script"
                  value={info.script}
                  onChange={(e) => {
                    setInfo((info) => ({ ...info, script: e.target.value }));
                    console.log(e.target.value);
                  }}
                  rows={10}
                  placeholder="Prospero. My brother and thy uncle, call'd Antonio—
                  I pray thee, mark me—that a brother should
                  Be so perfidious!—he whom next thyself
                  Of all the world I loved and to him put
                  The manage of my state; as at that time
                  Through all the signories it was the first
                  And Prospero the prime duke, being so reputed
                  In dignity, and for the liberal arts
                  Without a parallel; those being all my study,
                  The government I cast upon my brother
                  And to my state grew stranger, being transported
                  And rapt in secret studies. Thy false uncle—
                  Dost thou attend me?"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-sky-300 rounded-md focus:bg-sky-500 hover:bg-sky-500 focus:outline-none"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
