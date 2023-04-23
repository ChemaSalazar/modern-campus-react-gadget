$(document).ready(function(){

    //Initialize gadget in single call.
    gadget.ready().then(function () {
        console.log('gadget.ready() finished');
        window.myVariable = "Hello, from site:" + gadget.site;
        console.log('after fetch');
        setSite(gadget.site);
        setUser(gadget.user);
        setGadgetToken(gadget.token);
    }).catch(NoCMS());


    function setSite(data) {
        window.site = data;
        window.postMessage('site-updated', '*');
    }

    function setUser(data){
        window.user = data;
        window.postMessage('user-updated', '*');
    }

    function setGadgetToken(data) {
        window.token = data;
        window.postMessage('token-updated', '*');
    }

    //function to run when the application is invoked outside OmniCMS.
    function NoCMS(){
        setSite('No site, application not loaded within Omni CMS');
        setUser('No user, application not loaded within Omni CMS');
        setGadgetToken(null);
        console.log('Omni CMS is not detected by Application. Error: ');
    }


});