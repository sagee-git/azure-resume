window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://azresumecounter.azurewebsites.net/api/GetResumeCounter?code=o611RoQ21Lca8Zry0BNxkqQv2DugO5JYu6axQ8YDQ8uXAzFuDwp5fA==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

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