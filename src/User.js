import {useEffect, useState} from "react";
import './User.css'

function User(){
    const [windowData, setWindowData] = useState(null);

    useEffect(() => {
        const handleMessage = event => {
            if (event.data === 'user-updated') {
                setWindowData(window.user);
                console.log('in handleMessage const @ user-updated; window.user = ' + window.user, '')
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return(<div className={'current-site'}>@user component data => {windowData}</div>)
}


export default User;
