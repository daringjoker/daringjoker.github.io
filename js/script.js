let writearea=document.querySelector("#whoami");
let iam=["a PROGRAMMER","an INTERN","an ENGINEER","a WEBDEV","a PROUD NEPALI"]
let timestep=0;
let selectedword=0;
let letter_count=0;
let to_add=true;
let next_start=0;
let hold=2500;
let delay=50;


function typewrite(){
    if(timestep>=next_start){
        let curword=iam[selectedword]+" ";
        if(to_add){
            letter_count++;
            let to_put=(curword).substr(0,letter_count);
            writearea.innerHTML=to_put+`<span class="cursor blink" id="cursor"></span>`;
            if(to_put==curword){
                to_add=false;
                timestep=0;
                next_start=(hold/delay);
            }

        }else{
            letter_count--;
            let to_put=(curword).substr(0,letter_count);
            writearea.innerHTML=to_put+`<span class="cursor blink" id="cursor"></span>`;
            if(to_put==""){
                to_add=true;
                timestep=0;
                next_start=200/delay;
                selectedword=(selectedword+1)%(iam.length)
            }
        }
    }
    timestep++;
}

setInterval(typewrite,delay);