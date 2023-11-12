import styled from 'styled-components';
import { Link } from 'react-router-dom';
import dummy from '../db/data.json';

const SimpleButton = styled.button`
  width: 200px;
  padding: 30px;
  margine: 20px;
  border-radius: 10px;
`;

export default function DayList() {
  return (
    <ul className="list_day">
      {dummy.days.map((day) => (
        <div>
          <SimpleButton>
            <Link to={`/day/${day.day}`}> Day: {day.day}</Link>
          </SimpleButton>
        </div>
      ))}
    </ul>
  );
}
