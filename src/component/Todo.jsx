import React, { useState } from 'react'

export default function Todo() {
  const [cards, setCard] = useState([{
    name: "jeya",
    description: "qwertyuiopasdfghjkl;zxcvbnm",
    status: false
  }
  ])


  const [input1, setinput1] = useState("")
  const handleinput1 = (e) => {
    setinput1(e.target.value)
  }

  const [input2, setinput2] = useState("")
  const handleinput2 = (e) => {
    setinput2(e.target.value)
  }

  const handleadd = () => {
    setCard([...cards, { name: input1, description: input2, status: false }])
    setinput1("")
    setinput2("")
  }

  //create handledelete 
  const handledelete = (index) => {
    const newCards = [...cards]
    newCards.splice(index, 1)
    setCard(newCards)
  }

  //create handleedit
  const handleedit = (index) => {
    const newCards = [...cards]
    newCards[index].status = !newCards[index].status
    setCard(newCards)
  }

  const [isedit, setisedit] = useState(false)
  const handlecaradedit = (index) => {
    const newCards = [...cards]
    newCards[index].name = input1
    newCards[index].description = input2
    // setCard(newCards)
    // setinput1("")
    // setinput2("")
    setisedit(index)
  }

const handlesaveedit=(index)=>{
  const newCards = [...cards]
  newCards[index].name = input1
  newCards[index].description = input2
  setCard(newCards)
  setinput1("")
  setinput2("")
  setisedit(false)
}

  return (
    <div className='container' >
      <h1 style={{ textAlign: "center" }}>TODO APP</h1>

      <div className="inputs">
        <input type="text" className='input1' name='name' id='name' placeholder='Todo name'
          onChange={handleinput1} />

        <input type="description" className='input2' name='description' id='description'
          placeholder='Todo description' onChange={handleinput2} />

        {isedit ? <button className='btn btn-success' onClick={()=>handlesaveedit(isedit)}>Edit Todo</button> :
          <button className='btn btn-success' onClick={handleadd}>Add Todo</button>}

      </div>

      <div className='nav'>
        <div className='item1'><h1>MY TODOS</h1></div>

        <div class="dropdown text-center">
          <span className='fs-2 fw-bold '>Status</span>
          <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            All
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" >Completed</a></li>
            <li><a class="dropdown-item" href="#">not completed</a></li>
          </ul>
        </div>
      </div>

      <div className='row my-4' >

        {cards.map((item, index) => (

          <div className='col-lg-4 col-sm-12 size' key={index}>
            <div className='card h-100' style={{ backgroundColor: "lightgreen" }}>

              <div className='card-body'>
                <p className='card-text '>Name :{item.name} </p>
                <p className='card-text'>Description:{item.description} </p>

                <p className='card-text'>Status :
                  <button className='btn btn-danger dropdown-toggle' onClick={() => handleedit(index)}> {item.status ? "completed" : "not completed"}</button>
                </p>

                <div className='eddl d-flex justify-content-end gap-3'>
                  <button className='btn btn-success px-4' onClick={() => handlecaradedit(index)}>Edit</button>
                  <button className=' px-4' style={{ backgroundColor: "rgb(255, 153, 51)" }}
                    onClick={() => handledelete(index)}>
                    Delete</button>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
