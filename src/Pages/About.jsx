import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'react-modal';
import about from '../Images/About us page-pana.png';
import video from '../Images/aboutVideo.mp4';
import aboutPicture from '../Images/pexels-miami302-28961250.jpg';

import './About.css';

const About = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='About'>
            <div className="aboutMainContent">
                <div className="aboutRightSide">
                    <img src={about} alt="about" />
                </div>
                <div className="aboutLeftSide">
                    <h5>About Our Blog</h5>
                    <h2>We are team of expert people with creativity ideas</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, ut. Aperiam pariatur dolorem blanditiis quasi accusamus voluptas libero, hic quisquam deserunt laboriosam magnam sapiente totam delectus officia exercitationem nisi minus?</p>
                </div>
            </div>
            <div className="videoCard">
                <h3>Video About Us</h3>
                <div className="videoThumbnail">
                    <img
                        src={aboutPicture}
                        alt="video thumbnail"
                    />
                    <button onClick={openModal} className="playButton">
                        <FontAwesomeIcon icon={faPlay} />
                        <div className="buttonText">
                            <h4>Watch Video</h4>
                            <p>See how our team works</p>
                        </div>
                    </button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
                className="modal"
                overlayClassName="videoOverlay"
            >
                <button onClick={closeModal} className="closeButton">X</button>
                <video controls autoPlay className="videoPlayer">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Modal>
        </div>
    );
}

export default About;
