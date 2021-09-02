import React, {useEffect, useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import axiosApi from "../../AxiosApi";
import './Admin.css'

const Admin = (props) => {
    const [select, setSelect] = useState('home');
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    const getInfo = async () => {
        try {
            await axiosApi.get('/' + `${select.toLowerCase()}` + '.json').then(response => {
                if (response.data !== null) {
                    setText(response.data.text);
                    setTitle(response.data.title);
                }
            })
        } catch (e) {
            console.log(e)
        }
    };

    const edit = async (event) => {
        event.preventDefault()
        const newInfo = {
            title: title,
            text: text,
        }
        try {
            await axiosApi.put('/' + `${select.toLowerCase()}` + '.json', newInfo)
        } finally {
            props.history.push(select.toLowerCase())
        }
    };

    useEffect(() => {
        getInfo()
    }, [select])

    return (
        <div className="forms">
            <h2>Edit Pages</h2>
            <div>
                <form onSubmit={edit}>
                    <p>Select page</p>
                    <select onChange={(e) => setSelect(e.target.value)}>
                        <option>Home</option>
                        <option>About</option>
                        <option>Contacts</option>
                        <option>Divisions</option>
                    </select>
                    <p>Title</p>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" defaultValue={title}/>
                    <p>Content</p>
                    <ReactQuill onChange={(value) => setText(value)} value={text}/>
                    <div>
                        <button type="submit" className="btn-send">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Admin;