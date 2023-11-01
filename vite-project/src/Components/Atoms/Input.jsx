 import './../Atoms/StyleAtoms/Input.css'
function Input ({onChange, onBlur}){
    return (
        <>
            <input placeholder='Buscar Ubicacion' onChange={onChange} onBlur={onBlur}></input>
        </>
    );
}

export default Input;


