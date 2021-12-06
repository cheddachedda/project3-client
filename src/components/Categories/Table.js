import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import API from '../../api/jservice';

const Table = (props) => {
  const [categories, setCategories] = useState(null);
  const { page } = useParams();

  useEffect(() => {
    API.getCategories(page).then((response) => {
      setCategories(response.data);
    })
  }, [ categories ]);

  if (categories === null) {
    return (
      <div>Loading...</div>
    );
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>clues_count</th>
          </tr>
        </thead>

        <tbody>
          { categories.map((cat) => <Row category={ cat } />) }
        </tbody>

      </table>
    );
  }
};

const Row = ({ category }) => {
  const { id, title, clues_count } = category;

  return (
    <tr>
      <td>{ id }</td>
      <td>{ title }</td>
      <td>{ clues_count }</td>
    </tr>
  )
}

export default Table;
