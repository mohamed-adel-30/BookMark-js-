var siteNameINP = document.getElementById("siteNameINP");
var webSiteUrlINP = document.getElementById("webSiteUrlINP");
var submitBtn = document.getElementById("submitBtn");
var favSitesContainer = [];
submitBtn.onclick = function () {
    if (siteNameINP.value == '' || webSiteUrlINP.value == '') {
        alert("fill the fields first");
    }
    addSite();
    showSite();
    clear();
}

function addSite() {
    if (siteNameINP.value !== '' || webSiteUrlINP.value !== '') {
        let siteData = {
            name: siteNameINP.value,
            url: webSiteUrlINP.value,
        }
        favSitesContainer.push(siteData);
    }
    
}
function showSite() {
    let site = "";
    for (let i = 0; i < favSitesContainer.length; i++) {
        site += '<div class="raw d-flex mt-5"><div class="container Form mx-2 py-3"> <h2 class="float-left" >' + favSitesContainer[i].name + '</h2 ><a class="btn btn-primary ml-5 mr-2" href="#">Visit</a><button class="btn btn-danger btndelete" onclick = "deleteSite(' + i +')">Delete</button></div></div>'
    }
    document.getElementById('siteInfo').innerHTML = site;

}
function clear() {
    let inp = document.getElementsByClassName('form-control');
    for (let i = 0; i < inp.length; i++) {
        inp[i].value = "";
    }
}
function deleteSite(id) {
    favSitesContainer.splice(id, 1);
    localStorage.setItem("favSitesContainer", JSON.stringify(favSitesContainer));

    showSite();
}