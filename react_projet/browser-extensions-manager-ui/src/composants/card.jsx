import { useState } from "react";
export function Card({data, mode, ontoggle, handleRemove}){

    function RemoveButton({remove}){
        return(
            <button 
                onClick={remove}
                style={{
                    padding: '.4rem .7rem',
                    backgroundColor: 'transparent',
                    // outline: 'none',
                    border: '1px solid gray',
                    borderRadius: '30px',
                    color: !mode ? 'white':'black'

                }}
            >
                Remove
            </button>
        );
    }
    
    // fonction qui modiffier le bouton toggole
    function ToggleButton({ checked, change}){

        function handleChange(e) {
            if (change) change(e.target.checked);
        }

        return (
            <label className="toggle-switch">
                <input type="checkbox" 
                    checked={checked} 
                    onChange={handleChange} 
                />
                <span className="toggle-slider" />
            </label>
        );
    }


    return(
        <div className="card" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '15px 17px',
            gap: '2rem',
            backgroundColor: 'white',
            width: '32.7%',
            boxSizing: 'border-box',
            borderRadius: '15px',
            backgroundColor: mode ? 'white': 'hsl(225, 23%, 24%)'
        }}>
            <section style={{
                display: "flex",
                flexDirection: 'row',
                gap: '15px',
                alignItems: 'start'
            }}>
                <img src={data.imglink} alt={data.name} style={{flexShrink: 0}} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    minWidth: 0,
                    gap: '5px'
                }}>
                    <h4 style={{color: mode ? 'black' : 'white', fontWeight: '700'}}>{data.name}</h4>
                    <p style={{fontSize: '15px', fontWeight: '300', color: 'gray' }}>{data.descriptions}</p>
                </div>
            </section>
            <section style={{
                display: 'flex',
                justifyContent: 'space-between',
                
            }}>
                <RemoveButton
                    remove={handleRemove}
                />
                <ToggleButton
                    checked={data.active}
                    change={ontoggle}
                />
            </section>
        </div>
    );
}




