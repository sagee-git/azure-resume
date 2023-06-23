window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://azresumecounter.azurewebsites.net/api/GetResumeCounter?code=gTjktu8AwGXncG_IeOLaS_4_FicEysXY2ijqPyJNpT2-AzFuFx7YXQ==';
// const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then( response => {
        return response.json()
    }).then(response => {
        console.log("When called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}