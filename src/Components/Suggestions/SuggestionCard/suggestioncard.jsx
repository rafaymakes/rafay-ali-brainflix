import React from 'react';
import './../suggestions.scss';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const keyAffix = '?api_key=94f19a78-ed3b-4723-9773-164ca4dffeee';

class SuggestionCard extends React.Component {

    state = {
        sidevideos: []
    }

    getsidevideos = () => {
        Axios.get(
            "https://project-2-api.herokuapp.com/videos" + keyAffix
        )

            .then(res => {
                this.setState({
                    sidevideos: res.data
                })
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
                        <Link key={item.id} to={`/video/${item.id}`}>
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