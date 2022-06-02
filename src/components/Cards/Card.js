import React from 'react';

import styles from './Card.module.css';

import json from '../../model/data.json';

function Card(props)
{
    var len = Object.keys(json).length;
    if(props.num < Object.keys(json).length)
        len = props.num;

    var cardsList = [];
    var index = 0;
    for(var i = 0; i < len; i++)
    {
        index = Object.keys(json)[i];

        var card = createCard(require('../../assets/' + json[index].image), json[index].url, json[index].name, json[index].details, json[index].bgColor, index);

        cardsList.push(card);
    }

    return cardsList;
}

function createCard(image, url, name, details, bgColor, num) {
    if(num.length > 2)
        num = parseInt(num, 10);

    var cardClass = "right";
    if(num % 2 === 1)
        cardClass = "left"

    console.log(name + " : " + cardClass);
    return <div className={`${styles.card} ${'card'}`}>
        <a href={url} target="_blank" rel="noreferrer"><div className={styles.image} style={{backgroundColor: bgColor}}>
            <img src={image} alt={name} />
            <h1>{num}</h1>
        </div>
        <div className={styles.text}>
            <h1>{name}</h1>
            <p>{details}</p>
        </div></a>
    </div>;
}

export default Card;