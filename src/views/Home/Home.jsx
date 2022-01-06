import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to="/books">Go to catalog</Link>
      <h1>There is no place like home</h1>
    </div>
  )
}

export default Home
