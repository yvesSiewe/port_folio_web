import  ButtonThemeMode  from './buttonmode.jsx';
import iconMoon from '../../assets/icon-moon.svg';
import iconSun from '../../assets/icon-sun.svg';
import logoEx from '../../assets/logo.svg';
import './extensions.css'
function Extension({mode, handleMode}){

    return(
        <header>
            <div>
                <img src={logoEx} alt="Extantions_logo" />
            </div>
            <ButtonThemeMode 
                themeClick = {handleMode}
                link = {mode ? iconMoon : iconSun}
            />
        </header>
    )
}

export default Extension;