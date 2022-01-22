
function loadCard() {
    var gridContainer = document.querySelector('.grid-container');
    var gridContainerChildren = "";
    fetch('./card_data.json').then(response => response.json())
    .then(data => { 
        console.log(data);
        for (var index=0; index < 6 ; index++) {
            gridContainerChildren += `
            <div class="card">
                <div class="card-up" style="background-color:${data[index].color};">
                    <button id="free" style="color:${data[index].color};">Free</button>
                    <div><p id="para-4">Data Scientist</p></div>
                    <div class="icon">
                        <div id="icon"><img src="./images/eye.png" alt=""/><p>5.6k views</p></div>
                        <div id="icon"><img src="./images/blog.png" alt=""/><p>Blog Included</p></div>
                        <div id="icon"><img src="./images/presentation.png" alt=""/><p>13 courses</p></div>
                    </div>
                </div>
                <div class="card-down">
                    <p id="para-5">You'll extract, analyse and interpret large amounts of data from a range of sources, using algorithmic, data mining, artificial intelligence, machine learning and statistical tools, in order to make it accessible to businesses. </p>
                    <button id="view" onmouseover="this.style.backgroundColor='${data[index].color}';" onmouseout="this.style.backgroundColor='';"  >View Roadmap</button>
               </div>
            </div>
            `
        }
        gridContainer.innerHTML = gridContainerChildren;
    })
    .catch(err => console.log(err));
}

function loadOnClick(value){
    if(value==12){
        document.querySelector("#more").style.display = "none";
        var btn=document.querySelectorAll("#hide-btn");
        for(var k=0;k<btn.length;k++){
            btn[k].style.display = "inline";                  
         }
    
        var widbtn=document.querySelectorAll(".page-buttons-1 button");
        for(var t=0;t<widbtn.length;t++){
           widbtn[t].style.width="7%"; 
           widbtn[t].style.padding="0.3rem"; 
         }
         var next=document.querySelector("#next,#pre");
         next.style.width="9%";
         document.querySelector("#pre").style.border="none";
        }

    var gridContainer = document.querySelector('.grid-container');
    var gridContainerChildren = "";
    fetch('./card_data.json').then(response => response.json())
    .then(data => {
        for (var index=(value - 1) * 6; index < value * 6 ; index++) {
            gridContainerChildren += ` 
            <div class="card">
              <div class="card-up" style="background-color:${data[index].color};">
                <button id="free" style="color:${data[index].color};">Free</button>
                <div><p id="para-4">Data Scientist</p></div>
                <div class="icon">
                    <div id="icon"><img src="./images/eye.png" alt=""/><p>5.6k views</p></div>
                    <div id="icon"><img src="./images/blog.png" alt=""/><p>Blog Included</p></div>
                    <div id="icon"><img src="./images/presentation.png" alt=""/><p>13 courses</p></div>
                </div>
               </div>
               <div class="card-down">
                    <p id="para-5">You'll extract, analyse and interpret large amounts of data from a range of sources, using algorithmic, data mining, artificial intelligence, machine learning and statistical tools, in order to make it accessible to businesses. </p>
                    <button id="view">View Roadmap</button>
           </div>
        </div>
        `
        }
       gridContainer.innerHTML = gridContainerChildren;
    })
    .catch(err => console.log(err));
}
loadCard();