import React, { useState } from 'react';
import axios from 'axios';

const JoinBlock = ({ onLogin }) => {
    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setLoading] = useState(false);

    const changeInputHandler = event => {
        const inputName = event.target.name;
        const value = event.target.value;

        switch (inputName) {
            case 'roomId':
                setRoomId(value);
                break;
            case 'userName':
                setUserName(value);
                break;
            default:
                break;
        }
    };

    const submitFormHandler = async event => {
        event.preventDefault();

        if (!roomId.trim() || !userName.trim()) {
            return alert('Неверные данные');
        }

        const data = {
            roomId,
            userName
        };

        setLoading(true);
        await axios.post('/rooms', data).then(() => onLogin(data));
    };

    return (
        <form
            className="wrapper container d-flex flex-column justify-content-between border border-3 p-4 border-primary rounded"
            onSubmit={submitFormHandler}>
            <div className="mb-3">
                <label htmlFor="room" className="form-label">
                    Room ID
                </label>
                <input
                    value={roomId}
                    type="text"
                    className="form-control"
                    id="room"
                    name="roomId"
                    aria-describedby="roomIdHelp"
                    placeholder="Room ID"
                    onChange={changeInputHandler}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    value={userName}
                    type="text"
                    className="form-control"
                    id="name"
                    name="userName"
                    aria-describedby="nameHelp"
                    placeholder="Name"
                    onChange={changeInputHandler}
                    required
                />
            </div>
            <button
                disabled={isLoading}
                type="submit"
                className="btn btn-primary">
                {!isLoading ? 'ВОЙТИ' : 'ВХОД...'}
            </button>
        </form>
    );
};

export default JoinBlock;
