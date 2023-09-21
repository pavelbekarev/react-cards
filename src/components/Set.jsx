import {Card} from './Card';
import './Set.css';
import { useState } from 'react';

export function Set() {
    const cards = require('../data.json');
    const [step, setStep] = useState(0);


    const switchCountPlus = () => {
        if (step < cards.length-1) {
            setStep(step+1);
        }
    }


    const switchCountMinus = () => {
        if (step >= 1){
            setStep(step-1);
        }
    }


    return (
        <div className='card__wrapper'>
            <h2 className='set__title'>Название набора</h2>
            <Card key={cards[step].id} front={cards[step].front} back={cards[step].back}/>
            <div className='controls'>
                <button className='controls__btn btn-left' onClick={switchCountMinus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </button>
                <span className='step__shower'>{cards[step].id} / 10</span>
                <button className='controls__btn btn-right' onClick={switchCountPlus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
