import React from "react";
import { Header } from "./Header";
import { BtnSet } from "./BtnSet";
import "./BtnSet.css"

export const PageSelectSet = () => {
    const cards = require("../data");

    // выбор неповторяющихся названий сетов
    const sets = cards.reduce(
        (acc, item) => {
            if (acc.map[item.setName])
                return acc;

            acc.map[item.setName] = true;
            acc.sets.push(item.setName);
            return acc;
        },
        {
            map: {},
            sets: [],
        }
    ).sets.map((item, index) => (<BtnSet key={index} name={item} id={index}/>))

    return (
        <>
            <Header />
            <div className="set-list">
                <h2 className="set-list__header">Выбор сетов</h2>
                <ul>
                    {sets}
                </ul>
            </div>
        </>
    );
}