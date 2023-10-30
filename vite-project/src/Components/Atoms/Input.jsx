 import './../Atoms/StyleAtoms/Input.css'
function Input ({onChange}){
    return (
        <>
            <input placeholder='Buscar Ubicacion' onChange={onChange}></input>
        </>
    );
}

export default Input;


