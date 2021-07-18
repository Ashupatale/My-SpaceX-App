 import React, { useEffect, useState } from 'react'
 
 function Body() {

    const[programList , setProgramList]=useState([]);
    const[yearFilter , setYearFilter]=useState("");
    const[launchFilter , SetLaunchFilter]=useState("");
    const[landFilter , setLandFilter]=useState("");
    const[selectedYearButton , setSelectedYearButton]=useState("");
    const[selectedLaunchButton , setSelectedLaunchButton]=useState("");
    const[selectedLandButton , setSelectedLandButton]=useState("");

        useEffect(()=>{
            let response = await DataService.getProgramList();
            setProgramList({ programList: response });
        })

  
 
                                                                             

     return (
        <div className="app-container container-fluid">
        <div className="app-container-row row">
          <div className="filter col-md-4 col-lg-3">
            <div className="container-fluid">
              <div className="filterCard card">
                <div className="filterCard-body card-body">
                  <div className="filterHeading">
                    <h5 className="filter-title card-title">Filters</h5>
                   
                  </div>
                  <h6 className="card-subtitle">Launch Year</h6>
                  <div className="launchDivider"></div>
                  <div
                    className="yearToolbar btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups">
                    
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="First group" >
                     
              <button
                        type="button"
                        className={
                          "2006" === selectedYearButton
                            ? "active"
                            : "yearBtn btn btn-success"
                        }
                        value="2006"
                        onClick={(e) => {
                          setYear(e);
                        }}
                      >
                        2006
                 </button>
                    </div>
                   
                    
                    <div
                      className="btn-group mr-2 buttonHide"
                      role="group"
                      aria-label="Second group"
                    >
                   
                    </div>
                  </div>
                  <div className="successFilter">
                    <h6 className="card-subtitle">Successful Launch</h6>
                    <div className="launchDivider"></div>
                    <div
                      className="yearToolbar btn-toolbar"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="First group"
                      >
                        <button
                          type="button"
                          className={
                            "true" === selectedLaunchButton
                              ? "active"
                              : "yearBtn btn btn-success"
                          }
                          value="true"
                          onClick={(e) => {
                           setLaunch(e);
                          }}
                        >
                          True
                        </button>
                      </div>
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="Second group"
                      >
                        <button
                          type="button"
                          className={
                            "false" === selectedLaunchButton
                              ? "active"
                              : "yearBtn btn btn-success"
                          }
                          value="false"
                          onClick={(e) => {
                           setLaunch(e);
                          }}
                        >
                          False
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="successFilter">
                    <h6 className="card-subtitle">Successful Landing</h6>
                    <div className="launchDivider"></div>
                    <div
                      className="yearToolbar btn-toolbar"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="First group"
                      >
                        <button
                          type="button"
                          className={
                            "true" === selectedLandButton
                              ? "active"
                              : "yearBtn btn btn-success"
                          }
                          value="true"
                          onClick={(e) => {
                           setLand(e);
                          }}
                        >
                          True
                        </button>
                      </div>
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="Second group"
                      >
                        <button
                          type="button"
                          className={
                            "false" ===selectedLandButton
                              ? "active"
                              : "yearBtn btn btn-success"
                          }
                          value="false"
                          onClick={(e) => {
                            setLand(e);
                          }}
                        >
                          False
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="card-text-label">Selected Filters ---</span>
              </div>
              <div>
                <span className="card-text-label">Launch Year:</span>
                <span className="card-text-value">{yearFilter}</span>
              </div>
              <div>
                <span className="card-text-label">Successful Launch:</span>
                <span className="card-text-value">{launchFilter}</span>
              </div>
              <div>
                <span className="card-text-label">Successful Land:</span>
                <span className="card-text-value">{landFilter}</span>
              </div>
            </div>
          </div>
          <section className="cards-container col-md-8 col-lg-9">
            <React.Fragment>
              <div className="container-fluid">
                <div className="card-row row">
                  {programList.length > 0 ? (
                    programList.map((row, index) => {
                      return (
                        <div className="card-base" key={index}>
                          <div className="card h-100">
                            <div className="img-div">
                              <img
                                className="card-img-top"
                                src={row.links.mission_patch_small}
                                alt="Card cap"
                              />
                            </div>
                            <div className="card-block">
                              <p className="card-title">
                                {row.mission_name + " #" + row.flight_number}
                              </p>
                              <p className="card-text">
                                <span className="card-text-label">
                                  Mission Ids:
                                </span>
                                {displayNames(row.mission_id)}
                              </p>
                              <p className="card-text">
                                <span className="card-text-label">
                                  Launch Year:
                                </span>
                                <span className="card-text-value">
                                  {row.launch_year}
                                </span>
                              </p>
                              <p className="card-text">
                                <span className="card-text-label">
                                  Successful Launch:
                                </span>
                                <span className="card-text-value">
                                  {row.launch_success !== null &&
                                    row.launch_success.toString()}
                                </span>
                              </p>
                              <p className="card-text">
                                <span className="card-text-label">
                                  Successful Landing:
                                </span>
                                <span className="card-text-value">
                                  {(row.rocket &&
                                    row.rocket.first_stage !== null &&
                                    row.rocket.first_stage.cores[0] !== null &&
                                    row.rocket.first_stage.cores[0]
                                      .land_success !== null &&
                                    row.rocket.first_stage.cores[0].land_success.toString()) ||
                                    "-"}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div>No Records for the selected filter(s).</div>
                  )}
                </div>
              </div>
            </React.Fragment>
          </section>
        </div>
      </div>
     )
 }
 
 export default Body
 