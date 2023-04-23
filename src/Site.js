import {useEffect, useState} from "react";
import './Site.css'

function Site(){
    const [windowData, setWindowData] = useState(null);

    useEffect(() => {
        const handleMessage = event => {
            if (event.data === 'site-updated') {
                setWindowData(window.site);
                console.log('in handleMessage const @ site-updated; window.site = ' + window.site, '')
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return(<div className={'current-site'}>@site component data => {windowData}</div>)
}


export default Site;
