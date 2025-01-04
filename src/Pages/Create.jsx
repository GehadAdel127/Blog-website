import React from 'react';
import './Create.css';

const create = () => {
    return (
        <div className='create'>
            <div className='container'>
                <div className="createForm formContainer">
                    <form>
                        <h2>Create Your Own Blog</h2>
                        <input
                            type="text"
                            name="author"
                            placeholder="Author"
                            required
                        />
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            required
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            required
                        />
                        <input
                            type="url"
                            name="img"
                            placeholder="Image URL"
                            required
                        />
                        <textarea
                            name="text"
                            placeholder="Content"
                            required
                        />
                        <button type="submit">Post</button>
                    </form>
                </div>
                <div className="toggleContainer">
                    <div className="toggle">
                        <div className="toggleRight togglePannel">
                            <h2>Welcome Back!</h2>
                            <p>Enter your personal details to use all of site features</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default create;
