import React, { Component } from 'react';
import './Uploader.scss';
import uploadpreview from './../../../Assets/Images/Upload-video-preview.jpg';

class Uploader extends React.Component {
    render() {
        return (
            <section className='upload'>
                <h1 className='upload__title'>Upload Video</h1>
                <form className='upload__form' method="POST" action="http://localhost:8080/upload">
                    <div className='upload__nobuttons'>
                        <div className='upload__thumbnail'>
                            <label className='upload__thumblabel' for='preview'>VIDEO THUMBNAIL</label>
                            <img className='upload__preview ' id='preview' src={uploadpreview} />
                        </div>
                        <div className='upload__nopreview'>
                            <label className='upload__label upload__titlelabel' for="titleinp">TITLE YOUR VIDEO</label>
                            <input className='upload__titleinput upload__text' name='title' id='titleinp' placeholder='Add a title to your video' type='text'></input>
                            <label className='upload__label upload__desclabel' for="descinp">ADD A VIDEO DESCRIPTION</label>
                            <input className='upload__descriptioninput upload__text' name='description' id='descinp' placeholder='Add a description of your video' type='textarea'></input>
                        </div>
                    </div>
                    <div className='upload__buttons'>
                        <button className='upload__publish' type='submit'>PUBLISH</button>
                        <button className='upload__cancel'>CANCEL</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Uploader;

