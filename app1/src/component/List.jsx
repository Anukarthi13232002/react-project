import React from 'react'

function List() {
    // const data=[{no:1,name:'Anu'},{no:1,name:'Karthi'},{no:1,name:'Anitha'},{no:1,name:'Bala'},]
    const data=[1,2,3,4,4,5]

  return (
    data.map((nu,ind)=>{
        return <p>index={ind},num={nu}</p>
    }
)
)
}

export default List