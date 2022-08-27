import { router } from '@router/routers';
import { Menu } from 'antd';
import styles from './index.module.scss';

const DataCenter:React.FC = props => {
  return (
    <div className={styles['container']}>
      <header>大数据治理平台</header>
      <aside >
      <Menu
        mode='inline'
        theme='dark'
        items={router}
      />
      </aside>
      <main>
        <div className={styles['content']}>
          <div style={{height:'1000px',background:'#fc0'}}>

          </div>
        </div>
        <footer>数据中台</footer>
      </main>
    </div>
  )
}

export default DataCenter