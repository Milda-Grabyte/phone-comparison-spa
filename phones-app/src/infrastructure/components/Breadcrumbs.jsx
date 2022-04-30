import { Link } from 'react-router-dom';

const Breadcrumbs = ({ path }) => {
  console.log(path)
  return (
    <>
      <Link to='/'>Home</Link>
      {path.length > 1 && <Link to={path}>model</Link>}
    </>
  );
}

export default Breadcrumbs;