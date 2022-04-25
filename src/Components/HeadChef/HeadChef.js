import React from 'react'
import './HeadChef.scss'

const HeadChef = () => {
  return (
    <div className="headchef">
        <div className="headchef__image">
            <img className="headchef__image-image" src="https://urbandine.templates.editmysite.com/uploads/8/9/5/0/89502725/chef-2x.png?392"/>
        </div>

        <div className="headchef__content">
            <h4 className="headchef__content-headchef bold-text">Head Chef</h4>

            <h3 className="headchef__content-name head-text">React Mentor</h3>

            <p className="headchef__content-desc p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, obcaecati! Dolores consequuntur perferendis eligendi suscipit voluptatum, impedit dolore illo non, odio, dolorem ipsa veniam reprehenderit?</p>
        </div>
    </div>
  )
}

export default HeadChef