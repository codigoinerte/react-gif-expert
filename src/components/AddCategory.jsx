import { useState } from 'react'

export const AddCategory = ({ setCategories, onAddCategory, onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange =({target})=> {
        setInputValue(target.value);        
    }

    const onSubmit = (e) => {
        e.preventDefault();                
        if(inputValue.trim().length < 1) return;



        // setCategories(category=>[inputValue,...category]);
        onNewCategory(inputValue.trim());
        setInputValue('');
        // onAddCategory(inputValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
