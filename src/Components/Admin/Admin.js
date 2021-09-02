import React from 'react';
import './Admin.css'

const Admin = (props) => (
    <div className="forms">
        <h2>Edit Pages</h2>
        <div>
            <form>
                <p>Select page</p>
                <select>
                    <option>Home</option>
                    <option>About</option>
                    <option>Contacts</option>
                    <option>Divisions</option>
                </select>
                <p>Title</p>
                <input type="text"/>
                <p>Content</p>
                <textarea cols="80" rows="10"/>
                <div>
                    <button className="btn-send">Send</button>
                </div>
            </form>
        </div>
    </div>
);

export default Admin;