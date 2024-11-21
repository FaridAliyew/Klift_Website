import React from 'react'
import team1 from '../images/team1.png'
import team2 from '../images/team2.png'
import team3 from '../images/team3.png'
import team4 from '../images/team4.png'

function About() {
    return (
        <div className='mt-56'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-gray-700'>Our Architect Team</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            </div>

            <div className='mt-20 grid grid-cols-4'>
                <div>
                    <img src={team1} alt="team1" />
                    <h1>Liam Anderson</h1>
                    <p>CEO</p>
                </div>
                <div>
                    <img src={team2} alt="team1" />
                    <h1>Sophia Turner</h1>
                    <p>Designer</p>
                </div>
                <div>
                    <img src={team3} alt="team1" />
                    <h1>Ethan Mitchell</h1>
                    <p>Proqram təminatı mühəndisi</p>
                </div>
                <div>
                    <img src={team4} alt="team1" />
                    <h1>Liam Anderson</h1>
                    <p>Developer</p>
                </div>
            </div>
        </div>
    )
}

export default About