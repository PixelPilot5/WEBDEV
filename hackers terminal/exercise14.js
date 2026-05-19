const randromdelay = () => {
    return new Promise((resolve, reject) => {
        let x = Math.random() * 6 + 1;
        setTimeout(() => {
            console.log(x);
            resolve(x);
        }, x * 1000);
    })
}
async function main() {

    setInterval(() => {
        let last=document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3);
        }else{
            last.innerHTML=last.innerHTML+".";
        }
    }, 700);
    let tex = ["Initializing Hacking", "Reading Your Files", "Password Files Detected", "sending all your passwords and all personal files to server", "Cleaning Up"];
    for (const item of tex) {
        await additem(item);
    }
}
async function additem(item) {
    await randromdelay();
    // console.log(item);
    document.body.insertAdjacentHTML("beforeend", `<p>${item}</p>`);
}
main()