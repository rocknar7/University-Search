let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let inp = document.querySelector("input").value;
    console.log(inp);

    let colArr = await getcollege(inp);
    show(colArr);
  
});

function show(colArr){
    let list = document.querySelector("#result");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);
        let h1 = document.querySelector("h1");
        h1.innerText = "List Of Colleges And Universities As Follows";
       
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);

    }
}
async function getcollege(inp) {
    try{
        let res = await axios.get (url+inp);
        return res.data;
    }
    catch (e) {
        console.log("error message",e);
        return [];
    }
    
};