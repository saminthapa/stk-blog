import React from 'react'
import "./Create.css"

const Create = () => {
  return (
    <>
    <div className='create'>
        <img className='create-img' src="./logo.png" alt="Blog_Photo" />
        <form className="create-form">
            <div className="create-form-group">
                <label htmlFor="fileinput">
                <i className="create-icon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileinput" style={{display: "none"}}/>
                <input type="text" placeholder='Title of Blog' className='create-input' autoFocus={true}/>
                </div>

            <div className="create-form-group">
                <textarea placeholder='Tell your Story . . . . . ' type="text" className='create-input create-text'>
               </textarea>
            </div>
            <button className='create-submit'>Publish</button>
        </form>
    </div>
    
    </>
  )
}

export default Create