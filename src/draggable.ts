import { getMessage } from "./helpMessage";

function handleStages(id:number | string) : string{
    switch (id) {
        case '0': 
            return  '/assets/stage3-capsicum-onion.svg';
        case '1':
            return  '/assets/stage3-olive-mashrom-capsicum.svg';
        case '2':
            return '/assets/stage3-tomato-onion-mashrom.svg';
        case '3': 
            return '/assets/stage1.svg';
        case '4': 
            return '/assets/crust2.svg';
        default :
            return '/assets/stage1.svg';
    }

}
export class DragAndDrop {
    dragElement: HTMLElement;
    dropElement : HTMLElement;
    constructor(dragElement:HTMLElement, dropElement :HTMLElement){
        this.dragElement = dragElement;
        this.dropElement = dropElement;
    }
    public onInit(step: {step: number}) : void{
        // utility
        let items = document.querySelectorAll('.menuItem');
        let plate = this.dropElement;
        let menu = this.dragElement;
        const ToolTip = document.querySelector('.tooltip_') as HTMLDivElement;
        const treyPlaceHolder = document.querySelector('#trey-img') as HTMLImageElement;
        const AssisIamge = document.querySelector('#assis-image') as HTMLImageElement;
        const AssisIamge2 = document.querySelector('#assis-image2') as HTMLImageElement;
        ToolTip.innerHTML = getMessage(step.step);
        step.step++;

        items.forEach(function(item) {

            item.addEventListener('dragstart', (e)=>{

                let selected:any = e.target;
                if((step.step === 1 && ['3','4'].includes(selected.id)) || (step.step >= 2 && ['0','1','2'].includes(selected.id) )){

                    plate.addEventListener('dragover',(e)=>{
                        e.preventDefault();
                    })

                    plate.addEventListener('drop',()=>{
                        
                        if(selected && (selected.id == '3' || selected.id == '4' ))
                        {
                            AssisIamge.style.display = 'inline-block';
                            treyPlaceHolder.src = handleStages(selected?.id);
                            treyPlaceHolder.src = '/assets/crust2.svg';
                            setTimeout(() => {
                                treyPlaceHolder.src = '/assets/stage2-1.svg';
                                AssisIamge.style.display = 'none';
                            }, 1000);

                            AssisIamge2.style.display = 'inline-block';
                            // treyPlaceHolder.src = handleStages(selected?.id);
                            // treyPlaceHolder.src = '/public/assets/crust2.svg';
                            setTimeout(() => {
                                treyPlaceHolder.src = '/assets/stage2.svg';
                                AssisIamge2.style.display = 'none';
                            }, 2000);

                            document.querySelectorAll('.base').forEach((item:HTMLElement)=>{
                                item.style.display = 'none';
                                item.id = '';
                            })
                        }
                        else if(selected && (selected.id == '0' || selected.id == '1' || selected == '2') || step.step > 2)
                        {
                            treyPlaceHolder.src = handleStages(selected?.id);
                            document.querySelectorAll('.topping').forEach((item:HTMLElement)=>{
                                item.innerHTML = '';
                            })
                            selected = null;
                            return;
                        }
                        step.step++;

                        ToolTip.innerHTML = getMessage(step.step);
                        // selected = null;
                    })

                    menu.addEventListener('dragover',(e)=>{
                        e.preventDefault();
                    })

                    menu.addEventListener('drop',()=>{
                        treyPlaceHolder.src = handleStages(selected.id);
                        selected = null;
                    })
                }
                else {
                    return 
                }
            })
        });
    }
}