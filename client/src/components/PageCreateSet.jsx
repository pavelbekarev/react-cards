import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const PageCreateSet = () => {
    return (
        <>
            <Header />
            <div>
                <h2>Создание сета карточке</h2>
            </div>
            
            <Outlet />
        </>
    );
}