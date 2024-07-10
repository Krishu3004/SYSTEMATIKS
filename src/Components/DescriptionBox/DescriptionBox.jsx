import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews</div>
        </div>
        <div className="descriptionbox-description">
            <p>The Systematiks ProCount 3000 is an advanced note counting machine designed to meet the needs of businesses and financial institutions that require efficient, reliable, and accurate cash handling solutions. With cutting-edge technology and robust features, the ProCount 3000 ensures seamless currency management, saving time and reducing human error.</p>
            <p>Capable of counting up to 1,200 notes per minute, the ProCount 3000 enhances productivity and streamlines cash processing operations.</p>
        </div>
    </div>
  )
}
export default DescriptionBox
