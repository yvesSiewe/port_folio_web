

export function ButtonList({mode, handlefunction, state, children}){
    const basiqueStyle = {
        padding: '5px 15px',
        borderRadius: '20px',
        border: 'none',
        outline: 'none',
        fontWeigth: '700',
        fontSize: '.8rem'
    } 
    
    const activeStyle = {
        backgroundColor:'red',
        color: 'white'
    }

    const noActivestyle = {
        backgroundColor: mode ? 'white' : 'hsl(226, 11%, 37%)',
        color: mode ?  'hsl(226, 11%, 37%)' : 'white'
    }

    return(
        <button 
            onClick={handlefunction} 
            style={state ? {...activeStyle, ...basiqueStyle} : {...noActivestyle, ...basiqueStyle}}
        >{children}
        </button>
    )
}