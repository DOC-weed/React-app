export function unregister(){
    if('serviceEorker' in navigator){
        navigator.serviceWorker.ready.then(registration =>{
            registration.unregister();
            console.log('unregister');
        });
    }
}