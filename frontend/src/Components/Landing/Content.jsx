import React from 'react'

const Content = () => {
    return (
        <div className='calccont'>
            <div className='calccont1'>
                <h1 className='weltext'>Hi, This is <span style={{ color: 'green' }}>EcoCalc!.</span><br></br>Your Sustainable Lifestyle Companion</h1>
                <h3 className='herocon'>Are you ready to make a positive impact on the planet? Welcome to EcoCalc, your all-in-one solution for embracing a more sustainable lifestyle. With our innovative tools and personalized guidance, we're here to help you navigate the journey towards a greener future.
                    At EcoCalc, we believe that every action, no matter how small, can make a big difference in preserving our planet for future generations. With our intuitive tools and personalized recommendations, we're here to empower you to make eco-conscious choices in your daily life.
                </h3>
            </div>
            <div className='calccont2'>

                <h1 className='subcont'>Features:</h1>
                <h3 className='herocon'>
                    <ul>
                        <li><b>Calculate Your Carbon Footprint:</b> Understand the environmental impact of your daily activities with our easy-to-use carbon footprint calculator. Simply input your commuting habits, energy usage, diet, and more to receive instant insights into your carbon emissions.</li>
                        <br></br>
                        <li><b>Explore Sustainable Products :</b>Discover eco-friendly alternatives to everyday products with our extensive database. From household goods to personal care items, we've curated a selection of environmentally conscious options to help you reduce your ecological footprint.</li>
                        <br></br>
                        <li><b>Receive Personalized Recommendations :</b>Tailored to your lifestyle and preferences, our personalized recommendations provide actionable steps for living more sustainably. Whether it's reducing energy consumption, adopting greener transportation methods, or supporting ethical brands, we've got you covered.</li>
                    </ul>
                </h3>
            </div>
            <div className='calccont3'>
                <h1 className='subcont'>Get into Sustainablity!</h1>
                <h3 className='herocon'>Say goodbye to guesswork and hello to sustainable solutions. Explore our curated database of eco-friendly products and services, handpicked to minimize your ecological footprint. From energy-efficient appliances to ethically sourced goods, make informed choices that benefit both you and the planet.

                </h3>
            </div>
            <div className='calccont3'>
                <h1 className='subcont'>AI Chatbot : <span style={{ color: 'green' }}>Phoenix</span></h1>
                <h3 className='herocon'>If your Carbon emission score is too high?No Worries.Use our Own AI Chatbot:Phoenix.Our Phoenix is A NLP based Chatbot which gives your personalised Recommendations from your input prompt.From your prompt it gives recommendatiosn or alternatives from which carbon emission can be minimised
                </h3>
            </div>
        </div>

    )
}

export default Content
