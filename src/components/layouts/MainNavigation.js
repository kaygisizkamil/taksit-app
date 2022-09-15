import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return(
        <header className={classes.header}>           
            <nav>               
                <ul>
                    <li>
                    <Link to='/'>Taksit Hesaplama Formu</Link>
                    </li>
                
                    <li>
                    <Link to='/kayitli'>Kayıtlı Hesaplamaları Getir</Link>   
                    </li>

                    <li>
                    <Link to='/hesaplama-duzenle'>Kayıtlı Hesaplamaları Duzenle</Link>   
                    </li>               
                </ul>
                
            </nav>
        
        </header>
    );
}
export default MainNavigation;