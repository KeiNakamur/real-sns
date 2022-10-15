import { Analytics, Face, Gif, Image } from '@mui/icons-material';
import React from 'react';
import "../share/Share.css";

const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className='shareProfileImg' />
                    <input type="text" className='shareInput' placeholder='今どうしてる？' />
                </div>
                <hr className='shareHR' />
                <div className="shareButtons">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Image className='shareIcon' htmlColor='blue' />
                            <span className='shareOptiontext'>写真</span>
                        </div>

                        <div className="shareOption">
                            <Gif className='shareIcon' htmlColor='hotpink' />
                            <span className='shareOptiontext'>GIF</span>
                        </div>

                        <div className="shareOption">
                            <Face className='shareIcon' htmlColor='green' />
                            <span className='shareOptiontext'>気持ち</span>
                        </div>

                        <div className="shareOption">
                            <Analytics className='shareIcon' htmlColor='red' />
                            <span className='shareOptiontext'>投票</span>
                        </div>
                    </div>
                    <button className="shareButton">投稿</button>
                </div>
            </div>
        </div>
    )
}

export default Share;