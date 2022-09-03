import { useNavigate } from 'react-router';
import {useState,useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal} from 'react';
import styles from './index.module.scss';

const Login:React.FC = () => {
  const navigate = useNavigate();
  const [publishItem,setPublishItem] = useState<any[]>([
    {
      name:'库表',
      content:[{label:'应用系统',value:100},{label:'共享次数',value:0}]
    },
    {
      name:'视图',
      content:[{label:'应用系统',value:100},{label:'共享次数',value:0}]
    },
    {
      name:'接口',
      content:[{label:'应用系统',value:100},{label:'共享次数',value:0}]
    }
  ])
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <span>All in Data</span>
      </div>
      <div className={styles['main']}>
        <div className={styles['data-publish']}>
          <span className={styles['title']}>数据发布</span>
          <div className={styles['aside']}>业务系统</div>
          <div className={styles['aside']}>分析应用</div>
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
        <div className={styles['data-access']}>
          <span className={styles['title']}>数据发布</span>
          <div className={styles['aside']}>共享平台</div>
          <div className={styles['content']}></div>
        </div>
      </div>
    </div>
    
  )
}

export default Login;