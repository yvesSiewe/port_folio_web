function ButtonThemeMode({mode, themeClick, link}){
    return(
        <>
            <button 
                onClick={themeClick}
                style={{
                    padding: '7px',
                    borderRadius: '10px',
                    backgroundColor: mode ?  'hsl(0, 0%, 93%)' : 'hsl(226, 25%, 17%)',
                    outline: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <img src={link} alt="Logo extension" />
            </button>
        </>
    );
}

export default ButtonThemeMode;