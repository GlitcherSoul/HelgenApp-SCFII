import React from 'react'
import "../Styles/StartBTN.css";

const Startbtn = ({children}) => {
  
  return (
    <div>
        <button>
            {children}
        </button>
    </div>
  )
}

export default Startbtn