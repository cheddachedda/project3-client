import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Home Page</h1>
      <button onClick={() => { navigate('/play')} }>
        Join
      </button>
    </main>
  );
}

export default Home;
