import React , {useEffect} from 'react';
import WorkCard from '../../Components/WorkCard/WorkCard.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../images/wallet.PNG'
import img2 from '../../images/DNL.PNG'
import img3 from '../../images/movie.PNG'
import img4 from '../../images/todo.PNG'
import './WorkPage.css';

export default function WorkPage() {
    useEffect(()=>{
        AOS.init({duration: 1000});
      },[])

    const cards =[{ img:img2, title: 'Discover North Lebanon', git: 'https://github.com/MaryamAK7/Discover-North-Lebanon.git', demo: 'https://discover-north-lebanon-maryam.netlify.app/', desc:'A web app to discover cities and activities available in North Lebanon', lang: 'HTML5, React, CSS (AntDesign)', note : 'Demo only available for desktop (Team work)'},
    { img:img3, title: 'Movie App', git: 'https://github.com/MaryamAK7/movie-app.git', demo: 'https://movie-app-maryam.netlify.app/', desc:'A movie discovery tool', lang: 'HTML5, React, CSS', note : ''},
    { img:img1, title: 'Budget Planner', git: 'https://github.com/MaryamAK7/E-wallet.git', demo: 'https://b-planner.netlify.app/', desc:'A tool to save all your finance transactions and calculate the total', lang : 'HTML5, React, CSS (Bootstrap), Firebase Auth', note:''},
    { img:img4, title: 'Todo-List', git: 'https://github.com/MaryamAK7/Todo-List.git', demo: 'https://todo-list-maryam.netlify.app/', desc:'A simple to-do list to manage users’ tasks', lang : 'HTML5, JavaScript, CSS', note: ''}]
    return (
        <div className='workPage' id='work'>
            <h1 className='wrk-page-header'
             data-aos="fade-down"
             > My Projects </h1>
            <div className='cards'> 
            {cards.map((card) => <WorkCard card={card} /> )}
            </div>
        </div>
    )
}
