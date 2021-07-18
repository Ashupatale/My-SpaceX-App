import React, { Component, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { BiSearch } from 'react-icons/bi'
import Footer from '../../Footer';

function SnapShot(props) {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState([]);

//https://api.spacexdata.com/v3/launches?limit=50&launch_success=true&land_%20success=true  

    const getUsers = async () => {
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2018`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
        // const Mytodo=JSON.stringify(users)
        localStorage.setItem("users", JSON.stringify(users))
    }

    useEffect(() => {
   
        getUsers();
          }, []);

    const clickFun6= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2006`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }
 
    
    const clickFun7= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2007`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }
      
    const clickFun8= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2008`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }
      
    const clickFun9= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2009`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }
      
    const clickFun10= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2010`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }
      
    const clickFun11= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2011`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }  
    const clickFun12= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2012`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }  
    const clickFun13= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2013`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }  
    const clickFun14= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2014`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }
    const clickFun15= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2015`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }

    const clickFun16= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2016`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }
    const clickFun17= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2017`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }
    const clickFun18= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2018`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }
    const clickFun19= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2019`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }
    const clickFun20= async()=>{
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_%20success=true&launch_year=2020`);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }

    const clickFunTrue1= async()=>{
        const response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true `);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }
     const clickFunTrue2= async()=>{
        const response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=false `);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }

    const clickFunTrue3= async()=>{
        const response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_ success=true `);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }
     const clickFunTrue4= async()=>{
        const response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=false&land_ success=false  `);
        const data = await response.json()
        console.log(data);
        setUsers(data);
    }

    return (
        <>
        <h1 className="searchImg">{search}</h1>
            <h2 style={{ color: "white", fontFamily: "Times New Roman",paddingLeft:"20px" }}>SpaceX launch Programs</h2>

            <h4 classNme="filterName"style={{textAlign:"start",paddingLeft:"20px"}}>Filters</h4>
            <p style={{textAlign:"start",paddingLeft:"50px"}}>Launch Year
            <hr/></p>


            
             <div className="MainSpaceX" >
        

            <div className="MainBtns" >
            
            <button onClick={() => clickFun6()} className="btn2006" >2006</button>
            <button onClick={() => clickFun8()} className="btn2007" >2008</button>
            <button onClick={() => clickFun10()} className="btn2008" >2010</button>

            <button onClick={() => clickFun12()} className="btn2009" >2012</button>
            <button onClick={() => clickFun14()} className="btn2010" >2014</button>
          
            <button onClick={() => clickFun16()} className="btn2006" >2016</button>
            <button onClick={() => clickFun18()} className="btn2006" >2018</button>
            <button onClick={() => clickFun20()} className="btn2006" >2020</button>

        
            <p className="clickFunTrue1"   style={{textAlign:"start",marginTop:"10px"}}>Successful Launch <hr style={{border:"2px solid grey",marginTop:"0%"}}/></p>
            <div style={{display:"flex"}}>
             <button onClick={() => clickFunTrue1()} className="btn2006" >True</button>
            <button onClick={() =>  clickFunTrue2()} className="btn2006" >False</button>
            </div>
            

         <p style={{textAlign:"start",marginTop:"10px"}}>Successful Landing<hr style={{border:"2px solid grey",marginTop:"0%"}}/></p>
            <div style={{display:"flex"}}>
             <button onClick={() =>  clickFunTrue3()} className="btn2006" >True</button>
            <button onClick={() =>  clickFunTrue4()} className="btn2006" >False</button>
            </div> 

         </div>
         

         <div className="MainBtns"> 
            <button onClick={() => clickFun7()} className="btn2011" >2007</button>
            <button onClick={() => clickFun9()} className="btn2012" >2009</button>
            <button onClick={() => clickFun11()} className="btn2013" >2011</button>
            <button onClick={() => clickFun13()} className="btn2014" >2013</button>
            <button onClick={() => clickFun15()} className="btn2015" >2015</button>
            <button onClick={() => clickFun17()} className="btn2006" >2017</button>
            <button onClick={() => clickFun19()} className="btn2006" >2019</button>

        
            </div>

          
           <div className="DataDiv">
             {
                users.map((currElement) => {
                    return (
                       
                      <>
                  
                        <div key={currElement.id} className="display" >
                            <div style={{margin:"3px",backgroundColor:"white",height:"425px",borderRadius:"10px",width:"220px"}}>
                        

                     <img src={currElement.links.flickr_images} style={{height:"200px"}}/>
                        
                        <div className="DeatilsDiv">
                        <p className="missionName"> {currElement.mission_name}</p>
                        <br/>
                        <div className="UnderDivs">
                        <p><b>Mission Ids :</b> <a style={{color:"blue"}}>{currElement.mission_id}</a></p>
                        <p><b>Launch Year:</b> <a style={{color:"blue"}}>{currElement.launch_year}</a></p>
                        <p><b>Successful Launch:</b> <a style={{color:"blue"}}>{currElement.launch_site.launch_success}</a></p>
                        <p><b>Successful Landing:</b> <a style={{color:"blue"}}>{currElement.launch_year}</a></p>
                        </div>

                        </div>
                         

                            </div>
                        </div>
                        </>
                    )
                })
            }

</div>
        </div>

        <Footer/>
        </>
    )



}
const mapStateToProps = (state) => {
    return {
        userInfo: state.userDetails
    }

}

export default connect(mapStateToProps, null)(SnapShot);

