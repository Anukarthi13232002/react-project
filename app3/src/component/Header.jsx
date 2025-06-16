import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [course, setCourse] = useState(false);
  const [pro, setPro] = useState(false);
  const [pro1, setPro1] = useState(false);
  const [pro2, setPro2] = useState(false);
  const [pro3, setPro3] = useState(false);
  const [pro4, setPro4] = useState(false);

  return (
    <div>
      <button className="course-button" onClick={() => setCourse(!course)}>
        Course
      </button>

      <div style={{ display: course ? 'block' : 'none' }}>
        <div className="container">
          <h1 className="container-head">Courses</h1>

          <div className="container-flex">
            <div className="container-flex1">
              <button className="pro" onClick={() => {
                setPro(!pro);
                setPro1(false); 
                }}>
                  Programming <span>{'>'}</span>
              </button>

              <button className="fullstack" onClick={() => {
                setPro1(!pro1);
                setPro(false);
                setPro2(false)
                setPro3(false); 
                }}>
                  Full stack <span>{'>'}</span>
              </button>

              <button className="dig">Digital Marketing <span>{'>'}</span></button>

              <button className="data" onClick={()=>{
                setPro2(!pro2)
                setPro(false);
                setPro1(false);
                setPro3(false);
                }}>
                Data Analytics <span>{'>'}</span>
              </button>
              
              <button className="cloud" onClick={()=>{
                setPro3(!pro3)
                setPro(false);
                setPro1(false);
                setPro2(false);
                }}> Cloud computing <span>{'>'}</span></button>

              <button className="it" onClick={()=>{
                setPro4(!pro4)
                setPro(false)
                setPro1(false)
                setPro2(false)
                setPro3(false)
              }}>IT Security <span>{'>'}</span></button>

              <button className="web">Web Development <span>{'>'}</span></button>
              <button className="ui">UI/UX Designing <span>{'>'}</span></button>
              <button className="dd">Database Development <span>{'>'}</span></button>
              <button className="mpd">Mobile App Development <span>{'>'}</span></button>
              <button className="st">Software Testing <span>{'>'}</span></button>
              <button className="rpa">RPA <span>{'>'}</span></button>
              <button className="auto">Industry Automation <span>{'>'}</span></button>
            </div>
            <div className="container-flex2">
            {pro && (
                <div className='new'>
                <div className="language-card"><img src="java.png" alt="Java" /><p>Java</p></div>
                <div className="language-card"><img src="python.png" alt="Python" /><p>Python</p></div>
                <div className="language-card"><img src="csharp.png" alt="C#" /><p>C Sharp</p></div>
                </div>
            )}
            {pro1 && (
                <div className='new'>
                <div className="language-card"><img src="java.png" alt="Java" /><p>Java</p></div>
                <div className="language-card"><img src="python.png" alt="Python" /><p>Python</p></div>
                </div>
            )}
            {pro2 && (
                <div className='new'>
                <div className="language-card"><img src="data analytics.png" alt="Java" /><p>Data Analytics</p></div>
                <div className="language-card"><img src="power bi.png" alt="Python" /><p>Power BI</p></div>
                <div className="language-card"><img src="tableau.png" alt="Python" /><p>Tableau</p></div>
                </div>
            )}
            {pro3 && (
              <div className='new-box'>
                <div className='new1'>
                <div className="language-card"><img src="cloud1.png" alt="Java" /><p>AWS DevOps</p></div>
                <div className="language-card"><img src="cloud2.png" alt="Python" /><p>AWS</p></div>
                <div className="language-card"><img src="cloud3.png" alt="Python" /><p>azure fundamental</p></div>
                </div>
                <div className='new2'>
                <div className="language-card"><img src="cloud 4.png" alt="Java" /><p>Azure DevOps</p></div>
                <div className="language-card"><img src="cloud5.png" alt="Python" /><p>Kubernates</p></div>
                <div className="language-card"><img src="cloud6.png" alt="Python" /><p>Google Cloud</p></div>
                </div>
                <div className='new3'>
                <div className="language-card"><img src="cloud7.png" alt="Java" /><p>DevOps</p></div>
                <div className="language-card"><img src="cloud8.png" alt="Python" /><p>OpenStack</p></div>
                <div className="language-card"><img src="cloud9.png" alt="Python" /><p>Salesforce Admin</p></div>
                </div>
                <div className='new4'>
                <div className="language-card"><img src="cloud10.png" alt="Java" /><p>Salesforce Development</p></div>
                <div className="language-card"><img src="cloud11.png" alt="Python" /><p>Salesforce</p></div>
                </div>
              </div>
            )}
            {pro4 && (
                <div className='new'>
                <div className="language-card"><img src="it1.png" alt="Java" /><p>Java</p></div>
                <div className="language-card"><img src="it2.png" alt="Python" /><p>Python</p></div>
                </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
