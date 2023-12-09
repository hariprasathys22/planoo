import React from 'react'
import "../styles/ListStyle.css"
import AfterList from './AfterList'
import BeforeList from './BeforeList'

const ListStyle = () => {
  return (
    <div className='liststyle-container'>
        <div className='liststyle-quotes'>
            <p className="liststyle-p-text">
                Say good bye to boring list,<br />shout out to the fresh style
            </p>
            <div className="liststyle-card">
                <AfterList />
                <BeforeList />
            </div>
        </div>
    </div>
  )
}

export default ListStyle