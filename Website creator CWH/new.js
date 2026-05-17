function createcard(title,cname,views,months,duration,thumbnail){
    document.body.insertAdjacentHTML("beforeend",`<div class="container">
            <div class="logo">
                <img src="${thumbnail}">
                <div class="duration">${duration}</div>
            </div>
            <div class="texts">
                <div class="title">${title}</div>
            <div class="channel"> 
                <li class="channelname">${cname}</li>
                <li class="views">${views} views</li>
                <li class="months">${months} ago</li>
            </div>
            </div>
            
        </div>`)
}
document.addEventListener("keydown",(e)=>{
    if(e.key=="ArrowRight")
    {
        let title=prompt("enter the title");
        let cname=prompt("enter the channel name");
        let views=prompt("enter the views");
        let months=prompt("enter the months");
        let duration=prompt("enter the duration");
        let thumbnail=prompt("enter the thumbnail");
        createcard(title,cname,views,months,duration,thumbnail);
    }
})

