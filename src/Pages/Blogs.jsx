import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import arrow from '../Images/arrow_up_right_icon_173370.png'
import image1 from '../Images/pexels-alinaskazka-28859389.jpg'
import image2 from '../Images/pexels-chrissiegiann-28935322.jpg'
import image3 from '../Images/pexels-diana-gc-1959429378-28995632.jpg'
import image4 from '../Images/pexels-dilara-yilmaz-988605972-28766047.jpg'
import image5 from '../Images/pexels-evie-shaffer-1259279-17116116.jpg'
import image6 from '../Images/pexels-funda-izgi-236637469-28435070.jpg'
import image7 from '../Images/pexels-kwnos-iv-250460536-28184438.jpg'
import image8 from '../Images/pexels-miami302-28961250.jpg'
import image9 from '../Images/pexels-mohammed-jaziim-1849973385-28977184.jpg'
import './Blogs.css'


export const cardsData = [
    {
        id: 1,
        category: 'Resturant',
        img: image1,
        author: 'Olivia Rhye',
        title: 'A Culinary Adventure: The Latest in Restaurant Trends',
        subject: 'Discover the latest restaurant trends, new menus, and insider tips on where to dine in style.',
        date: '20 Jan 2022',
        text: 'In today s ever-evolving culinary world, restaurant trends are shaping the way we dine. From fusion cuisine to farm-to-table experiences, the latest trends are making dining more exciting than ever. One key trend is the rise of plant-based dishes, with chefs experimenting with bold flavors and innovative techniques to bring meat-free options to the forefront. Sustainable sourcing is also becoming a major focus, with restaurants prioritizing locally sourced, organic ingredients. Furthermore, the atmosphere is evolving; open kitchens, unique décor, and immersive dining experiences are drawing diners in. Whether you are a foodie or simply looking for your next dining adventure, keeping up with these trends can elevate your restaurant choices and enhance your overall experience. Do not forget to stay tuned for our guide on the hottest new spots to try in your city!'
    },{
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
{
    id: 7,
    category: 'Nature',
    img: image7,
    author: 'Ella Collins',
    title: 'Wonders of the Wild: A Journey into Nature is Majesty',
    subject: 'From wildlife to landscapes, get inspired by nature photography and environmental stories.',
    date: '05 Jul 2022',
    text: 'Nature has a way of inspiring awe, and there is no better way to experience it than by immersing yourself in its splendor. From towering mountains to vast oceans, every landscape offers its own unique beauty. Wildlife enthusiasts will find no shortage of inspiration, whether it is the sight of a soaring eagle or the peaceful demeanor of a grazing deer. Capturing these moments through photography or simply witnessing them firsthand can bring a sense of peace and connection to the natural world. In addition to its beauty, nature also plays a vital role in our ecosystem, reminding us of the importance of conservation efforts to protect the planet for future generations.'
    },
{
    id: 8,
    category: 'Nature',
    img: image8,
    author: 'Daniel Harris',
    title: 'The Great Outdoors: Exploring Nature is Best Kept Secrets',
    subject: 'Explore the beauty of nature with our guide to the best hiking trails, parks, and scenic spots.',
    date: '18 Aug 2022',
    text: 'There is a whole world of hidden natural gems waiting to be discovered. While popular parks and trails receive much attention, some of nature is most breathtaking sites remain relatively unknown. From secluded beaches to untouched forests, exploring these lesser-known locations can feel like stepping into a different world. If you are planning a trip, consider seeking out these hidden gems by researching less-trafficked areas or speaking with locals for their recommendations. Beyond the stunning views, these places often offer a sense of tranquility and solitude that is hard to find in busier destinations.'
    },
{
    id: 9,
    category: 'Nature',
    img: image9,
    author: 'Grace Lee',
    title: 'Nature is Storytellers: Preserving Environmental Narratives',
    subject: 'From wildlife to landscapes, get inspired by nature photography and environmental stories.',
    date: '30 Sep 2022',
    text: 'Environmental storytelling has become a powerful tool in raising awareness about the challenges our planet faces. Through photography, documentaries, and written narratives, environmentalists are capturing the impact of climate change, deforestation, and wildlife endangerment. By telling these stories, we can inspire others to take action and contribute to the preservation of our environment. Nature is not only a source of beauty but also a vital part of our global ecosystem. Protecting it requires a collective effort, and these storytellers are leading the charge in educating the public and advocating for change.'
    }
]


const Card = React.memo(({ card, handleCardClick }) => {
    return (
        <div className="card" onClick={() => handleCardClick(card.id)}>
            <img src={card.img} alt={card.category} loading="lazy" />
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
                <button>Read Post <img src={arrow} alt="arrow icon" loading="lazy" /></button>
            </div>
        </div>
    );
});

const Blogs = () => {

const [activeCategory, setActiveCategory] = useState('View all')
const [cardsToShow, setCardsToShow] = useState(6)
const handleActive = (category) => {
    setActiveCategory(category)
    setCardsToShow(6)
}
const filteredCards = activeCategory === 'View all'
    ? cardsData
    : cardsData.filter(card => card.category === activeCategory)
const visibleCards = filteredCards.slice(0, cardsToShow)

const loadMoreCards = () => {
    setCardsToShow(prev => prev + 3)
}

const navigate = useNavigate();

const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
};



return (
    <div className='Blogs'>
        <h3>Blogs</h3>
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
            {visibleCards.map((card) => (
                <Card key={card.id} card={card} handleCardClick={handleCardClick} />
            ))}
        </div>
        {cardsToShow < filteredCards.length && (
            <div className="loadMore">
                <button onClick={loadMoreCards}>Load More</button>
            </div>
        )}
    </div>
)
}

export default Blogs