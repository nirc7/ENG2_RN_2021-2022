let local = false ;
let WebUri = 'http://proj10.ruppin-tech.co.il/api/'; 
if (local) {
    WebUri = 'localhost://50777/api/'; 
}
export default WebUri;
