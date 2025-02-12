import React from 'react';
import '../Suggestions/suggestions.scss';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class SuggestionCard extends React.Component {

    state = {
        sidevideos: []
    }

    getsidevideos = () => {
        console.log("Loading videos")
        Axios.get(
            "http://localhost:8080/videos"
        )

            .then((res) => {
                this.setState({
                    sidevideos: res.data
                })
            })

            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.getsidevideos();
    }

    render() {
        const sidevideos = this.state.sidevideos.filter(
            item => item.id !== this.props.matchProp.mainVids.id
        )

        return (
            <>
                {sidevideos.map(item => {
                    return (
                        <Link className='suggestions__link' key={item.id} to={`/video/${item.id}`}>
                            < div className='suggestions__card' >
                                <img className='suggestions__thumbnail' alt='thumbnail of queued video' src={item.image} />
                                <div className='suggestions__titleauthor'>
                                    <p className='suggestions__vidtitle'>{item.title}</p>
                                    <p className='suggestions__vidauthor'>{item.channel}</p>
                                </div>
                            </div>
                        </Link>
                    )
                }
                )
                }
            </>
        );
    }
}

export default SuggestionCard;