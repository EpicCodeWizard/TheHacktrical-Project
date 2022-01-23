import {useQuery} from 'react-query'
import {getAuth} from 'firebase/auth';
import axios from 'axios'

export default function ActorDashboard() {

  let email = getAuth().currentUser?.email

  let query = useQuery('get-actor-profile', async () => {
      let res = await axios(`http://localhost:5000/users/${email}`)
      if(res.status !== 200) {
          throw new Error('ActorDashboard Error')
      }

      return res.data
  })
    
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {JSON.stringify(query.data)}
      <div className="grid grid-cols-3 h-screen">
        <div className="mt-10 mb-10 ml-20 mr-5 bg-white shadow-lg rounded">
          <h1 className="m-5 uppercase font-semibold">APPLICATIONS</h1>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/"
                className="flex m-2 items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-gray-400 bg-gray-400 focus:shadow-outline"
              >
                <span>Tom Hanks</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex m-2 items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-400 bg-gray-300 focus:shadow-outline"
              >
                <span>Susan Crabtree</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex m-2 items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-400 bg-gray-300 focus:shadow-outline"
              >
                <span>James Swan</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 mt-10 mb-10 mr-20 bg-white shadow-lg rounded">
          <h1 className="m-5 uppercase font-semibold">Forrest Gump</h1>
          <h2>
            Role: Forrest Gump<br/>
            Location: San Francisco, CA<br/><br/>
            Actor: Tom Hanks
          </h2>
        </div>
      </div>
    </div>
  );
}
