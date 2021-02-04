const allTypes = ["Education", "Recreational", "Social", "Diy", "Charity", "Cooking", "Relaxation", "Music", "Busywork",""];
var typed = new Typed(".typing-1", {
    strings:["Education", "Recreational", "Social", "Diy", "Charity", "Cooking", "Relaxation", "Music", "Busywork"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

function doFetch(type){
    var searchAdd = "https://www.boredapi.com/api/activity";
    if(type!="all" && type !=""){
        searchAdd += "?type="+type;
    }
    console.log(searchAdd);
    fetch(searchAdd)
    .then(res => res.json())
    .then(data =>{
        document.getElementById('work').innerText = data.activity;
    });
}

var searchBtn = document.getElementById("search");
searchBtn.addEventListener("click",function(){
    var inputWork = document.getElementById("typeOfWork").value;
    inputWork = inputWork.charAt(0).toUpperCase() + inputWork.slice(1).toLowerCase();
    if(allTypes.indexOf(inputWork)==-1){
        document.getElementById('work').innerText = "Sorry!!! Your search didn't match a types! :(";
    }
    else{
        var x = setInterval(() => {
            doFetch(inputWork.toLowerCase());
        }, 3000);
    }
})