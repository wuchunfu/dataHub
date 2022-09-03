import { useNavigate } from 'react-router';
import {useState} from 'react';
import styles from './index.module.scss';

const Login:React.FC = () => {
  const navigate = useNavigate();
  const [publishItem,setPublishItem] = useState<any[]>([
    {
      name:'库表',
      content:[{label:'应用系统',value:100},{label:'共享库表数',value:0}]
    },
    {
      name:'接口',
      content:[{label:'应用系统',value:100},{label:'共享接口数',value:0}]
    },
  ])
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <span>All in Data</span>
      </div>
      <div className={styles['main']}>
        <div className={styles['data-publish']}>
          <span className={styles['title']}>数据发布</span>
          <div className={styles['label']}>业务<br />系统</div>
          <div className={styles['arrow']}>共享</div>
          <div className={styles['label']}>分析<br />应用</div>
          <div className={styles['arrow']}>共享</div>
          <div className={styles['content']}>
            {
              publishItem.map(item => {
                return (
                  <div className={styles['data-box']}>
                    <span className={styles['name']}>{item.name}</span>
                    {item.content.map((cItem:any) => (
                      <div className={styles['data-item']}>
                        <span>{cItem.value}</span>
                        <span>{cItem.label}</span>
                      </div>
                    ))}
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={styles['data-access']}>
          <span className={styles['title']}>数据发布</span>
          <div className={styles['aside']}>共享平台</div>
          <div className={styles['content']}>
          {
              publishItem.map(item => {
                return (
                  <div>
                    <span>{item.name}</span>
                    {item.content.map((cItem:any) => (
                      <div>
                        {cItem.value}
                        {cItem.label}
                      </div>
                    ))}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login;