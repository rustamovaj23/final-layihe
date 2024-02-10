import React, {  useContext } from 'react'
import Card from '../Card/Card'
import dataContext from '../../Context/Context'


const Cards = () => {
    const {data, setData} = useContext(dataContext)
  return (
    <div className='container'>
        <div className="row">
            {
                data.map((item, index)=>{
                    return(<Card key={index} item={item}/>)
                })
            }

        </div>
    </div>
  )
}

export default Cards