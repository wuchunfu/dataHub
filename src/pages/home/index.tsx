import styles from './index.module.scss';

const Home:React.FC = () => {
  // return(
  //   <div className={styles['home']}>
  //     <div className={styles['container']}>
  //       <ul>
  //         <li></li>
  //         <li></li>
  //         <li></li>
  //         <li></li>
  //         <li></li>
  //         <li></li>
  //       </ul>
  //       <div>123</div>
  //     </div>
  //   </div>
  // )
  return(
    <div className={styles['container']}>
      <header>
        <h2>ALL in Data</h2>
      </header>
    </div>
  )
}

export default Home;