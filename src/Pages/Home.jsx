import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '../Images/arrow_up_right_icon_173370.png';
import image1 from '../Images/pexels-alinaskazka-28859389.jpg';
import image2 from '../Images/pexels-chrissiegiann-28935322.jpg';
import image3 from '../Images/pexels-diana-gc-1959429378-28995632.jpg';
import image4 from '../Images/pexels-dilara-yilmaz-988605972-28766047.jpg';
import image5 from '../Images/pexels-evie-shaffer-1259279-17116116.jpg';
import image6 from '../Images/pexels-funda-izgi-236637469-28435070.jpg';
import './Home.css';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('View all');
    const navigate = useNavigate();
    const cardsData = [
        {
            id: 1,
            category: 'Resturant',
            img: image1,
            author: 'Olivia Rhye',
            title: 'A Culinary Adventure: The Latest in Restaurant Trends',
            subject: 'Discover the latest restaurant trends, new menus, and insider tips on where to dine in style.',
            date: '20 Jan 2022',
            text: 'In today s ever-evolving culinary world, restaurant trends are shaping the way we dine. From fusion cuisine to farm-to-table experiences, the latest trends are making dining more exciting than ever. One key trend is the rise of plant-based dishes, with chefs experimenting with bold flavors and innovative techniques to bring meat-free options to the forefront. Sustainable sourcing is also becoming a major focus, with restaurants prioritizing locally sourced, organic ingredients. Furthermore, the atmosphere is evolving; open kitchens, unique décor, and immersive dining experiences are drawing diners in. Whether you are a foodie or simply looking for your next dining adventure, keeping up with these trends can elevate your restaurant choices and enhance your overall experience. Do not forget to stay tuned for our guide on the hottest new spots to try in your city!'
        }, {
            id: 2,
            category: 'Nature',
            img: image2,
            author: 'James Turner',
            title: 'Exploring the Wilderness: Best Nature Trails',
            subject: 'Explore the beauty of nature with our guide to the best hiking trails, parks, and scenic spots.',
            date: '15 Feb 2022',
            text: 'Nature lovers rejoice! There is nothing quite like hitting the trails and soaking in the beauty of the great outdoors. Whether you are a seasoned hiker or just looking for a peaceful walk, there is a trail for everyone.National parks offer a stunning variety of landscapes, from majestic mountains to serene lakes and lush forests.Scenic trails such as the Appalachian Trail or Pacific Crest Trail provide breathtaking views and the chance to connect with nature in its purest form.Beyond hiking, these parks offer other recreational activities, such as birdwatching, camping, and wildlife photography.Be sure to pack the essentials, respect the environment, and enjoy your adventure!'
        },
        {
            id: 3,
            category: 'Nature',
            img: image3,
            author: 'Sophia Lee',
            title: 'Capturing the Wild: Photography Tips for Nature Lovers',
            subject: 'From wildlife to landscapes, get inspired by nature photography and environmental stories.',
            date: '05 Mar 2022',
            text: 'Nature photography is more than just taking pictures of beautiful scenery; it is about capturing the essence of the wild and preserving the moment. Whether it is a sweeping landscape or a close-up of wildlife, the key to great nature photography lies in patience and preparation. Understanding lighting and timing is crucial, as the best shots often occur during golden hours—just after sunrise or before sunset. Additionally, mastering composition can transform a good photo into a great one. Explore framing techniques like the rule of thirds to add balance and depth. With the right gear, knowledge of your environment, and a bit of luck, your nature photography will not only tell stories but also inspire others to appreciate the natural world.'
        },
        {
            id: 4,
            category: 'Resturant',
            img: image4,
            author: 'Ethan Price',
            title: 'The Art of Fine Dining: Elevating Culinary Experiences',
            subject: 'Satisfy your taste buds with mouth-watering dishes and the best culinary experiences.',
            date: '10 Apr 2022',
            text: 'Fine dining is more than just a meal—it is an experience. Today is top restaurants are blending art and cuisine to create unforgettable dining moments. It is not just about the food, though. Service, atmosphere, and presentation all play pivotal roles. Many chefs are now focusing on multi-course tasting menus, where each dish is designed to tell a story. The use of molecular gastronomy and other avant-garde cooking techniques adds a touch of theater to the dining experience. Pair these creations with carefully curated wine lists, and you have a recipe for an extraordinary evening. Fine dining is evolving to offer more than just a meal, turning every visit into an event worth remembering.'
        },
        {
            id: 5,
            category: 'Plants',
            img: image5,
            author: 'Liam Johnson',
            title: 'Gardening Indoors: A Guide to Houseplants',
            subject: 'Learn how to grow and care for indoor plants, herbs, and flowers to beautify your home.',
            date: '25 May 2022',
            text: 'Indoor gardening is becoming increasingly popular as more people discover the joy of nurturing plants in their homes. Houseplants not only add beauty and vibrancy to living spaces, but they also improve air quality and contribute to a sense of calm. Whether you are a beginner or an experienced plant parent, choosing the right plants for your home is essential.Consider low- maintenance options like succulents or snake plants if you are new to gardening. For those looking for a challenge, fiddle-leaf figs or orchids offer an opportunity to develop more advanced skills. With the right care, your indoor garden will thrive and become a green sanctuary within your home.'
        },
        {
            id: 6,
            category: 'Culture',
            img: image6,
            author: 'Ava Brooks',
            title: 'Cultural Exploration: Understanding Global Traditions',
            subject: 'Dive into different cultures through traditions, festivals, and historical insights.',
            date: '14 Jun 2022',
            text: 'Cultural exploration allows us to expand our understanding of the world and its diverse traditions. From food and art to music and dance, each culture offers a unique perspective on life. Festivals, in particular, provide a window into the customs and values that shape societies. For instance, Diwali in India celebrates the triumph of light over darkness, while Carnival in Brazil is a celebration of music, dance, and joy. Exploring these traditions can deepen your appreciation for global diversity and foster a sense of connection to the wider world. Whether you are traveling or learning from afar, cultural experiences offer an enriching way to see the world through different lenses.'
        },
    ];

    const handleActive = (category) => setActiveCategory(category);
    const filteredCards = activeCategory === 'View all' ? cardsData : cardsData.filter(card => card.category === activeCategory);

    const handleCardClick = (id) => {
        navigate(`/blog/${id}`);
    };

    return (
        <div className='Home'>
            <div className="content">
                <h1>Untitled Blog</h1>
                <p>New product features, the latest in technology, solutions, and updates.</p>
            </div>
            <div className="input">
                <input type="email" placeholder='Enter your email' />
                <button>Subscribe</button>
            </div>
            <div className="sections">
                <ul>
                    {['View all', 'Nature', 'Resturant', 'Plants', 'Culture'].map((category) => (
                        <li
                            key={category}
                            className={activeCategory === category ? 'active' : ''}
                            onClick={() => handleActive(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cards">
                {filteredCards.map((card, index) => (
                    <div className="card" key={index} onClick={() => handleCardClick(card.id)}>
                        <img src={card.img} alt={card.category}  loading='lazy'/>
                        <div className="overlay">
                            <div>
                                <p>{card.author}</p>
                                <p>{card.date}</p>
                            </div>
                            <p>{card.category}</p>
                        </div>
                        <div className="cardContent">
                            <h2>{card.title}</h2>
                            <p>{card.text}</p>
                        </div>
                        <div className="readPost">
                            <button>Read Post <img src={arrow} alt="arrow icon" loading='lazy' /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
