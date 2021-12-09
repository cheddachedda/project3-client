import { useNavigate } from 'react-router-dom';
import _ from 'underscore';

const NavBar = () => {
  return (
    <nav>
      { _.range(1, 11).map((i) => <NavButton key={ i } page={ i } />) }
    </nav>
  );
};

const NavButton = ({ page }) => {
  const navigate = useNavigate();

  return (
    <button onClick={ () => navigate(`${ page }`) }>
      { page }
    </button>
  );
};

export default NavBar;
