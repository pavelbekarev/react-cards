import React from "react";
import "./CreateCard.css";
import { useForm } from 'react-hook-form';
import "./error.css";

export const FormCreateCard = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: {
            fronttext: "",
            backtext: ""
        }
    });


    return (
        <form className="createCard__form" onSubmit={handleSubmit( (data) => {
            console.log(data);
        } )}>


            <label>
                Передняя сторона карточки:
                <input type="text" name="fronttext" {...register("fronttext", { required: "Заполните текст передней стороны карточки", minLength: {
                    value: 4,
                    message: "Текст должен содержать минимум 4 символа"
                } })}/>
            </label>
            <p className="error-msg">{errors.fronttext?.message}</p>


            <label>
                Задняя сторона карточки:
                <input type="text" name="backtext" {...register("backtext", {required: "Заполните текст на обратной стороне карточки"})}/>
            </label>
            <p className="error-msg">{errors.backtext?.message}</p>



            <input type="submit" value="Создать карточку"/>
        </form>
    );
}