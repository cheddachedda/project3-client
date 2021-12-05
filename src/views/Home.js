import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Home Page</h1>
      <a onClick={() => { navigate('/play')} }>
        Join
      </a>
    </main>
  );
}

export default Home;
