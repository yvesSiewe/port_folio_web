import  ButtonThemeMode  from './buttonmode.jsx';
import iconMoon from '../../assets/icon-moon.svg';
import iconSun from '../../assets/icon-sun.svg';
import logoEx from '../../assets/logo.svg';
import './extensions.css'
function Extension({mode, handleMode}){

    return(
        <header
            style={{
                backgroundColor: mode ? 'white': 'hsl(225, 23%, 24%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <div>
                <img src={logoEx} alt="Extantions_logo" width='85%' style={{color: 'white', filter: mode ?? 'brightness(0) invert(1)'}}/>
            </div>
            <ButtonThemeMode 
                themeClick = {handleMode}
                link = {mode ? iconMoon : iconSun}
                mode={mode}
            />
        </header>
    )
}

export default Extension;