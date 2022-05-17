function runDemo(){
    let outputDataElement = document.querySelector("#jsReturnData");
    outputDataElement.innerHTML = outputDataElement.getAttribute("data-demo").replace("Java Controller","Javascript Function");
    let outputDataListElement = document.querySelector("#jsReturnList");
    let list = outputDataListElement.getAttribute("data-list").split(",");
    for(let item in list){
        outputDataListElement.innerHTML += `<li>${list[item].replace("Java","Javascript").replace("[","").replace("]","")}</li>`;
    }
}
