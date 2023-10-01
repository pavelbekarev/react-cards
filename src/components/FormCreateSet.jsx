import './CreateSet.css';

export const FormCreateSet = () => {
    return (
        <form className="create-set__form">
            <label>
                Название набора:
                <input type="text" name="name"/>
            </label>
            <label>
                Описание:
                <textarea name="description"/>
            </label>
            <input type="submit" value="Создать сет"/>
        </form>
    );
}