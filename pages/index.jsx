import { use, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/index.module.scss'
import { getLayout } from "./header/Header";
// import SideBar from './sidebar/sidebar';
// import { createStore } from 'redux'
// import { useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addprobebegin} from '../actions';


const counter = [
  {
    type: 'P110',
    stock: 5,
    total: 251
  },
  {
    type: 'P120',
    stock: 5,
    total: 251
  },
  {
    type: 'P140',
    stock: 5,
    total: 251
  },
  {
    type: 'P220',
    stock: 5,
    total: 251
  },
  {
    type: 'P360',
    stock: 5,
    total: 251
  },
  {
    type: 'P560',
    stock: 5,
    total: 251
  }

]


const Card = (d) => {
  return d.data.map(card => {
    return <div className={styles.dashboardcube}><div className={styles.cubeup}>{card.type}</div><div className={styles.cubebuttom}>{card.stock}/{card.total}</div></div>
  }
  )
}


const HomePage = () => {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const dispath = useDispatch();
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  }

  return (
    <div className={`${styles.test}`}>
      {/* <Link href="/probes/probelist"><button onClick={handleClick}>Like ({likes})</button></Link> */}
      <div className={`${styles.display} ${styles.probesstatus}`}>
        <Card data={counter} />
      </div>
      <button onClick={()=>dispath(addprobebegin())}></button>
      <div className={`${styles.dashboardmid} ${styles.display}`}>
        <div className={`${styles.event} ${styles.display}`}>
          <div className={`${styles.eventtitle} ${styles.display}`}>待處理出貨</div>
          <div className={`${styles.eventcontent}`}>
            <div className={`${styles.eventlist}`}>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.event} ${styles.display}`}>
          <div className={`${styles.eventtitle} ${styles.display}`}>即將過保客戶</div>
          <div className={`${styles.eventcontent}`}>
            <div className={`${styles.eventlist}`}>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex3} ${styles.display}`}>
                  <div>誠品生活股份有限公司
                  </div>
                </div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>2800000</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>保固中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex3} ${styles.display}`}>松下產業</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>22</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
              <div className={`${styles.cell} ${styles.display}`}>
                <div className={`${styles.celltype} ${styles.flex1} ${styles.display}`}>誠品 23台</div>
                <div className={`${styles.cellcustomer} ${styles.flex1} ${styles.display}`}>出貨</div>
                <div className={`${styles.cellstatus} ${styles.flex1} ${styles.display}`}>進行中</div>
                <div className={`${styles.celldate} ${styles.flex1} ${styles.display}`}>2023/08/18</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.getLayout = getLayout;

export default HomePage;