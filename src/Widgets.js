import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) =>(
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div> 
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div> 
        </div>      
    )

  return (
    <div className = "widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("Adani-Hidenburg", "Top-News : 10000 reders")}
        {newsArticle("ChatGPT is taking Over", "Top-News : 9000 reders")}
        {newsArticle("Shark tank is back", "Top-News : 8000 reders")}
        {newsArticle("Twitter Layoffs", "Top-News : 7000 reders")}
        {newsArticle("Recession 2023", "Top-News : 1000 reders")}
    </div>
  )
}

export default Widgets