import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChangeInput = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmitForm = useCallback((e) => {
        onInsert(value);
        setValue('');

        e.preventDefault();
    }, [onInsert, value])

    return (
        <form className='TodoInsert' onSubmit={onSubmitForm}>
            <input placeholder='할 일을 입력하세요' onChange={onChangeInput} value={value} required/>
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;