import React from 'react';
import WorkCard from '../../Components/WorkCard/WorkCard.js'
import img1 from '../../images/Capture.PNG'
import img2 from '../../images/DNL.PNG'
import img3 from '../../images/movie.PNG'
import img4 from '../../images/Capture.PNG'
import './WorkPage.css';

export default function WorkPage() {
 
    const cards =[{ img:img1, title: 'Discover North Lebanon', git: 'https://github.com/MaryamAK7/Discover-North-Lebanon.git', demo: 'https://discover-north-lebanon-maryam.netlify.app/', desc:''},
    { img:img2, title: 'Movie App', git: 'https://github.com/MaryamAK7/movie-app.git', demo: 'https://movie-app-maryam.netlify.app/', desc:''},
    { img:img3, title: 'Budget Planner', git: 'https://github.com/MaryamAK7/E-wallet.git', demo: 'https://budget-planner-maryam.netlify.app/', desc:''},
    { img:img4, title: 'Todo-List', git: 'https://github.com/MaryamAK7/Todo-List.git', demo: 'https://todo-list-maryam.netlify.app/', desc:''}]
    return (
        <div className='workPage' id='work'>
            <h1 className='wrk-page-header'> My Projects </h1>
            <div className='cards'> 
            {cards.map((card) => <WorkCard card={card} /> )}
            </div>
        </div>
    )
}
