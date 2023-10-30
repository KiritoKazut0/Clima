import './../Atoms/StyleAtoms/Button.css'
function Button ({onClick}){
    return (
        <>
            <button onClick={onClick} ></button>
        </>
    );
}

export default Button;

