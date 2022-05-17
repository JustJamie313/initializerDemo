function runDemo(){
    let outputData = document.querySelector("#jsReturnData");
    outputData.innerHTML = outputData.getAttribute("data-demo").replace("Java Controller","Javascript Function");
    let outputList = document.querySelector("#jsReturnList");
    let list = outputList.getAttribute("data-list");
    list.replace("[","").replace("]","");
    list = list.split(",");
    for(let a=0;a<list.length;a++){
        outputList.innerHTML += `<li> The Javascript function changed ${list[a]} to ${list[a].replace("Java","JavaScript")}</li>`;
    }
}