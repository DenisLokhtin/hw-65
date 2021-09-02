import React, {useEffect, useState} from 'react';
import './Content.css'
import axiosApi from "../../AxiosApi";

const Content = (props) => {
    let CurrentURL = props.history.location.pathname;
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    const getInfo = async () => {
        if (CurrentURL === '/') {
            CurrentURL = '/home'
        }
        try {
            await axiosApi.get(`${CurrentURL}` + '.json').then(response => {
                if (response.data !== null) {
                    setText(response.data.text);
                    setTitle(response.data.title);
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getInfo()
    }, [CurrentURL])

    return (
        <div>
            <h2>{title}</h2>
            <p className="text" dangerouslySetInnerHTML={{ __html: text }}/>
        </div>
    )
};

export default Content;