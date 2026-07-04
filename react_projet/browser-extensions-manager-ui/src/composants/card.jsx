export function Card({props}){
    return(
        <div>
            <section>
                <img src={props.imgLink} alt="" />
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
            </section>
            <section>
                <RemoveButton/>
                <ToggleButton/>
            </section>
        </div>
    );
}

function RemoveButton({handleRemove}){
    return(
        <button onClick={handleRemove}>
            remove
        </button>
    );
}

function ToggleButton(){
    return(
        <button></button>
    );
}