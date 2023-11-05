import { useState } from 'react';

import styles from './Hello.module.css';
import UserName from './UserName';

let tt;

export default function Hello({ age }) {
  function showMembers() {
    console.log(
      '팀 구성원: 성정규, 이수혁, 박민규, 박승환, 최종은, 한준교, 김윤희'
    );
  }

  function showText(txt) {
    tt = txt.target.value;
    console.log(txt.target.value);
  }

  const [name, setName] = useState('Mike');
  const msg = age > 19 ? '성인' : '미성년자';

  return (
    <div>
      <button onClick={() => console.log('3팀')}>show team number</button>
      <button onClick={showMembers}>show members</button>
      <input type="text" onChange={showText}></input>
      <button onClick={() => console.log(tt)}>print console</button>

      <h1 id="name">
        {name}({age}) : {msg}
      </h1>
      <UserName name={name}></UserName>
      <button
        onClick={() => {
          setName(name === 'Mike' ? 'Jane' : 'Mike');
          age = age + 1;
        }}
      >
        change
      </button>
    </div>
  );
}
