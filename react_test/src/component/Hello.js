import styles from './Hello.module.css';

let tt;

export default function Hello() {
  function showMembers() {
    console.log(
      '팀 구성원: 성정규, 이수혁, 박민규, 박승환, 최종은, 한준교, 김윤희'
    );
  }

  function showText(txt) {
    tt = txt.target.value;
    console.log(txt.target.value);
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => console.log('3팀')}>show team number</button>
      <button onClick={showMembers}>show members</button>
      <input type="text" onChange={showText}></input>
      <button onClick={() => console.log(tt)}>print console</button>
    </div>
  );
}
