var list= document.querySelector('[aria-label="Followers"]').getElementsByClassName("_1XyCr")[0].getElementsByClassName("isgrP")[0].getElementsByClassName("PZuss")[0].getElementsByClassName("wo9IH") 
var followers = []



for (var i = 0; i < list.length; i++) {
    followers.push(
    list[i].getElementsByClassName("uu6c_")[0].getElementsByClassName("t2ksc")[0].getElementsByClassName("enpQJ")[0].getElementsByClassName("wFPL8")[0].innerText)
}

console.log(followers)

/////// COPY UP TO HERE FOR FOLLOWERS 

var list = document.getElementsByClassName("PZuss")[0].getElementsByClassName("wo9IH") 
var following = []


for (var i = 0; i < list.length; i++) {
    following.push(
    list[i].getElementsByClassName("uu6c_")[0].getElementsByClassName("t2ksc")[0].getElementsByClassName("enpQJ")[0].getElementsByClassName("wFPL8")[0].innerText)
}


let difference = following.filter(x => !followers.includes(x));

console.log(difference)
/////// COPY UP TO HERE FOR FOLLOWING 

