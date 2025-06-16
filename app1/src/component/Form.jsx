import React, { useState } from 'react'

function Form() {
    // const [name,setName]=useState('')
    // const [gmail,setGmail]=useState('')
    // const [phone,setPhone]=useState('')
    const [formdata,setFormData]=useState([])
    const[form,setForm]=useState({
        name:"",
        gmail:"@gmail.com",
        phone:"",
        course:""
    })

    function handleChange(e){
        const{value,name}=e.target
        setForm({...form,[name]:value})
    }

    function handleClick(e){
        e.preventDefault()
        console.log(form.name,form.gmail,form.phone,form.course);
        setFormData([...formdata,{name:form.name,gmail:form.gmail,phone:form.phone,cpurse:form.course}])
        setForm({
            name:"",
            gmail:"@gmail.com",
            phone:"",
            course:""
        })
        
    }

  return (
    <div>
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} />
            <label htmlFor="">Gmail</label>
            <input type="text" name="gmail" value={form.gmail} onChange={handleChange} />
            <label htmlFor="">Phone</label>
            <input type="text" name="phone" value={form.phone} onChange={handleChange} />
            <label htmlFor="">Course</label>
            <input type="text" name="course" value={form.course} onChange={handleChange} />
            <button onClick={handleClick}>Submit</button>

        </form>
        <h3>Enrolled data</h3>'
        <table border={1}>
        <tr>
            <th>name</th>
            <th>gmail</th>
            <th>phone</th>
            <th>course</th>
        </tr>
        {formdata.map((fd)=>{
            return <tr key={fd.name}>
                <td>{fd.name}</td>
                <td>{fd.gmail}</td>
                <td>{fd.phone}</td>
                <td>{fd.course}</td>
            </tr>
        })}
        </table>
    </div>
  )
}

export default Form