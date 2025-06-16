import React, { useEffect, useState } from 'react'

function Dummy() {
  // var name='Anu'
  // const d=()=>(console.log('hii'))
  const [dummy,setDummy]=useState(1)
  const [data,setData]= useState({})

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json));
  },[])

  return(
    <div>
      <p>Count:{dummy}</p>
      <button onClick={()=>{setDummy(dummy+1)}}>Click </button>

      <h1>{data.title ? data.title : "Loading..."}</h1>
    </div>
  )




  // const user = 'Admin'; // You can change this to test: 'Custom', 'Regular', etc.

  // switch (Props.user) {
  //   case 'Admin':
  //     return <h2>Admin UI</h2>;
  //   case 'Custom':
  //     return <h2>Custom UI</h2>;
  //   case 'Regular':
  //     return <h2>Regular UI</h2>;
  //   default:
  //     return <h2>User UI</h2>;
  // }

    // let haeding='Fir'
    // var haeding
    // class name is empty
    // var haeding=''

//     if(haeding === undefined){
//         return(
//             <p>Loading.......</p>
//         )
//     }
//   return (
//     <div>
//         <h1 className={haeding !== undefined && 'heading'}>
//         Dummy{haeding === 'First' ?haeding:'Default'}  
//         </h1>echo "# first-project" >> README.md
//     </div>
//   )
}

Dummy.defaultProps={user:'Regular UI'}
export default Dummy