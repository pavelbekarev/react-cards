import { useState } from 'react';
import './CreateSet.css';
import UseInput from './UseInput';
import { useForm } from 'react-hook-form';
import "./error.css";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSet } from '../actions/set';

export const FormCreateSet = () => {
    const [count, setcount] = useState(0);

    useEffect( () => {
        if (count !== 0) {
            console.log(`Отправка формы : ${count}`);
            alert(`Отправка формы : ${count}`);
        }
    }, [count] );

    const { register, handleSubmit, formState : {errors} } = useForm({
        defaultValues: {
            name: "",
            discription: ""
        }
    });
    console.log(errors);

    // const [name, setName] = UseInput('');
    // const [discription, setDiscription] = UseInput('');

    // function handleNameChange(e) {
    //     setName(e.target.value);
    // }

    // function handleDiscriptionChange(e) {
    //     setDiscription(e.target.value);
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(name, discription);
    // }

    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        dispatch(createSet(data));
    }


    return (
        <form className="create-set__form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name'>
                Название набора:
            </label>
            <input type="text" name="name" id='name'
            {...register("name", { required: "Заполните поле Название набора",
                                    minLength: {value: 4, message: "Название набора должно содержать минимум 4 символа"} })}/>
            
            
            <p className='error-msg'>{errors.name?.message}</p>
            
            <label htmlFor='discription'>
                Описание:
            </label>
            <textarea name="discription" id='discription' {...register("discription", { required: "Заполните поле Описание" })}/>
            
            <p className='error-msg'>{errors.discription?.message}</p>
            
            <input className='button' type="submit" value="Создать сет"/>

        </form>
    );
}