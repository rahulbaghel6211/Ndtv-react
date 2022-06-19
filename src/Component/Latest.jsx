import './Navbar.css';

import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

function Latest(){
        const [Loading,setLoading]=useState(true)
        const[data,setData]=useState(null)
        // let[searchParms,setSearchParams]=useSearchParams();

        useEffect(() => {
            setLoading(true)
            axios({
                url:`http://localhost:8080/news`,
                method:"GET",
                
            }).then(res=>{
                setLoading(false)
                setData(res.data)
            })
            .catch(err=>{
                setLoading(false)
               
            })
        }, [])
   
        return(
        <div>
           <div className='box'>
           <div>
           <div className='big'>
              <h1>Big Story</h1>
            <img  src="https://c.ndtvimg.com/2022-06/0ukqscr8_kabul_650x400_19_June_22.jpg?downsize=340:209" alt="icon"   height="230px" width="400px"/>
              <p>ISIS Claims Kabul Gurdwara Attack, Cites Prophet's "Insult": Report</p>
            </div>
            <div className='latest'>
              <h1>Top Stories</h1>

              <div className='latest1'>
                <img src="https://c.ndtvimg.com/2022-06/uuma9ej8_kabul-blast_240x180_18_June_22.jpg?downsize=105:79" alt="" />
                <p>Kabul Attack: Over 100 Afghan Sikhs, Hindus Granted E-Visas, Say Sources</p>
              </div>

              <div className='latest1'>
                <img src="https://c.ndtvimg.com/2021-10/ftm0btq_indian-air-force-day_120x90_08_October_21.jpg?downsize=105:79" alt="" />
                <p>'Agnipath' In Air Force: See Full Details Of New Recruitment Scheme</p>
              </div>

              <div className='latest1'>
                <img src="https://c.ndtvimg.com/2022-05/mdc1m8mg_bulldozer-demolition-pic_240x180_10_May_22.jpg?downsize=100:75" alt="" />
                <p>Opinion: Perils Of Pushing India As A Civilizational State</p>
              </div>

              <div className='latest1'>
                <img src="https://c.ndtvimg.com/2022-06/r5ih5ms8_sharad-pawar-mamata-banerjee-pti-650_650x400_15_June_22.jpg?im=FaceCrop,algorithm=dnn,width=100,height=75" alt="" />
                <p>Opinion: Opposition's Weaknesses On Full Display With President Election</p>
              </div>

              <div className='latest1'>
                <img width="100px" src="https://c.ndtvimg.com/2022-06/1925hg3o_major-general-bs-dhanoa-240_120x90_17_June_22.jpg" alt="" />
                <p> An Army Veteran's 5 Suggestions For Agnipath Scheme</p>
              </div>

              <div className='latest1'>
                <img width="100px" src="https://c.ndtvimg.com/2022-06/5sr119lc_pavan-varma-240_120x90_06_June_22.jpg" alt="" />
                <p>Opposition's Weaknesses On Full Display With President Election</p>
              </div>


            </div>
           </div>
            <div>
    {Loading && <div>Loading</div>}
    {data?.map((item)=>(
        <div className='alldata' style={{marginBottom:"1rem"}} key={item.id}>
        
        <img  src={item.Image} alt="icon"   height="200px" width="800px"/>
        <div className='text'>{item.name}</div>
        </div>
        
     
    ))}
       {/* <button disabled={page===1} onClick={()=>setPage(page-1)}>prev</button>
        <button onClick={()=>setPage(page+1)}>next</button> */}
        </div>
        </div>
        </div>
        )
    }
    export default Latest;