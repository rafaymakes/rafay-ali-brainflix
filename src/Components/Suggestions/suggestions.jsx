import React from 'react';
import './suggestions.scss';
import SuggestionCard from './SuggestionCard/suggestioncard';

const Suggestions = () => {
    return (
        <section className='suggestions'>
            <p className = 'suggestions__title'>NEXT VIDEO</p>
            <div className = 'suggestions__container'>
                <SuggestionCard/>
                <SuggestionCard/>
                <SuggestionCard/>
                <SuggestionCard/>
                <SuggestionCard/>
                <SuggestionCard/>
                <SuggestionCard/>
                <SuggestionCard/>
            </div>
        </section>
    );
}

export default Suggestions;