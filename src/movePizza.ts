let pizzaMoved = false;
export default function MovePizza(step):void{
    if(step.step <= 2){
        alert("Please Complete your pizza.")
        return ;
    } 
    const Pizza = document.getElementById('trey-img') as HTMLImageElement;
    const Trey = document.querySelector('#droppable') as HTMLImageElement;
    if(pizzaMoved){
        alert("You have alreay made a Pizza. Click Ok to make new")
        window.location.reload();
    }


    Pizza.style.transition = "1s ease-in-out transform"
    Pizza.style.transform = "translateZ(2000px)"
    setTimeout(()=>{
        Pizza.style.transition = "1s ease-in-out transform"
        Pizza.src = '/assets/pizza-box.svg'
        Trey.style.transform = "rotateX(0deg)"
        Trey.style.boxShadow = "0px 0px 0px #ffff"
        Pizza.style.transform = null
        Trey.style.background = "none";
        pizzaMoved = true;
        document.querySelector('.btn-pizza').innerHTML = "Make new Pizza"
    },1000)

}