import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props){
    return <div>
        <MainNavigation/>
        <main className={classes.main}>
            {props.children}
            {/*ustteki ifade ile wrap edilen diger komponentlerin icerikleri layouta pass edilecek seklinde dusunebiliriz*/}
       </main>
    
    </div>
}
export default Layout;