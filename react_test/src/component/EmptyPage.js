import { Link } from 'react-router-dom';

export default function EmptyPage() {
  return (
    <>
      <h2>Error! 잘못된 접근</h2>
      <Link to="/">Back</Link>
    </>
  );
}
