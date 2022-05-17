function runDemo(){
    //get element to display output of demoData(variable from Java)
    let outputDataElement = document.querySelector("#jsReturnData");

    //set innerHTML of element to demoData (stored in data-demo attribute) replacing a substring
    outputDataElement.innerHTML = outputDataElement.getAttribute("data-demo").replace("Java Controller","Javascript Function");

    //get element to display output of demoList(variable from Java)
    let outputDataListElement = document.querySelector("#jsReturnList");

    //get demoList (stored in data-list attribute) and split into array
    let list = outputDataListElement.getAttribute("data-list").split(",");

    //loop through list array and add <li> element to demoList output element replacing substring and []'s
    for(let item in list){
        outputDataListElement.innerHTML += `<li>${list[item].replace("Java","Javascript").replace("[","").replace("]","")}</li>`;
    }
}
