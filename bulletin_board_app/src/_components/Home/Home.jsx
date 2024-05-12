import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Welcome to my page</h1>
      <nav>
          <ul className='home-ul'>
            <li>
              <Link to="/bulletinBoard">掲示板ページへ</Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Home;