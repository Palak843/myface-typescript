function changeColor() {
    const posts = document.getElementsByClassName("post");

    for (let i=0; i<posts.length; i++){
        const post = posts[i];
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue =Math.floor(Math.random()*256);

        post.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    }
}
 function dropDownMenu() {
     document.getElementById("menuButton").classList.toggle("show");
     
 }


document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here.
});