import React from 'react'

const PersonalInfo = () => {
  return (
    <div>
            <Section heading={"Heading 1"} description={"This is my heading 1"} showDescription={true} setShowDescription={()=>handleDesciption("about")}/>
    </div>
  )
}

export default PersonalInfo
