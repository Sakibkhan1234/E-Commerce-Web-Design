import React from "react"
import india from "./indian.jpg"
import us from "./us.webp"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91-8329303204</label>
            <i className='fa fa-envelope'></i>
            <label> sakibspfurious@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span><img  id="I" src={us} alt="" /></span>
            <label> EN</label>
            <span><img  id="I" src={india} alt="" /></span>
            <label> ₹ (Rupees)</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
