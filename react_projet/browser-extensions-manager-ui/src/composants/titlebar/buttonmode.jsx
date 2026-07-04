function ButtonThemeMode({themeClick, link}){
    return(
        <>
            <button onClick={themeClick}>
                <img src={link} alt="Logo extension" />
            </button>
        </>
    );
}

export default ButtonThemeMode;