import React from "react";
import { Header } from "./Header";
import { BtnSet } from "./BtnSet";
import "./BtnSet.scss"
import { useDispatch, useSelector } from "react-redux";
import { getSets } from "../actions/set";
import { useEffect } from "react";

export const PageSelectSet = () => {
    const cards = require("../data");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSets())
    }, [dispatch]);

    const sets = useSelector(state => state.set.sets)
                    .map(set => <BtnSet key={set._id} name={set.name} id={set._id} />)

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