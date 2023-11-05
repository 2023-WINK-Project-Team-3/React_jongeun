import styles from './Hello.module.css';

export default function Hello() {
  return (
    <p>
      Hello
      <div className={styles.box}>hello component</div>
    </p>
  );
}
