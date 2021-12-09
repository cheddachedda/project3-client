import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import API from '../../api/jservice';

const Table = (props) => {
  const [ categories, setCategories ] = useState(null);
  const { page } = useParams();

  // Retrieves 100 categories from jservice.io, offset by the URL's :page parameter
  useEffect(() => {
    API.getCategories(page).then((response) => {
      setCategories(response.data);
    })
  }, [ page ]);

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
          { categories.map((cat) => <Row key={ cat.id } category={ cat } />) }
        </tbody>

      </table>
    );
  }
};

const Row = ({ category }) => {
  let { id, title, clues_count } = category;
  title = title.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

  return (
    <tr>
      <td>{ id }</td>
      <td>{ title }</td>
      <td>{ clues_count }</td>
    </tr>
  )
}

export default Table;
