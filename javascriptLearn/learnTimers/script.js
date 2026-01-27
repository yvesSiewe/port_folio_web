let minute = document.querySelector('#minute');
let seconde = document.querySelector('#seconde');
let tires = document.querySelector('#tiers');

let start = document.querySelector('#start');
let stop1 = document.querySelector('#stop');
let reset = document.querySelector('#reset');




class chronometre{
    timer;
    constructor (min=0, tiers=0, second=0){
        this.min = min;
        this.tiers =tiers;
        this.seconde = second;
    }

    #display(){
        minute.innerHTML = this.min < 10 ? `0${this.min}` : this.min;
        seconde.innerHTML = this.seconde < 10 ? `0${this.seconde}` : this.seconde;
        tires.innerHTML  = this.tiers < 10 ? `0${this.tiers}` : this.tiers;
    }

    start(){
        this.timer = setInterval(()=>{
            this.seconde ++
            this.#display();
            
            if(this.seconde === 60){
                this.seconde = 0;
                this.tiers++;
                if(this.tiers === 60){
                    this.tiers = 0;
                    this.min++
                }
            }
            
        }, 1000);
    }

    stop(){
        clearInterval(this.timer);
        this.#display();
    }

    reset(){
        clearInterval(this.timer);
        this.min = 0;
        this.seconde = 0;
        this.tiers = 0;
        this.#display();
    }
    
}

const chrono1 = new chronometre()

start.addEventListener('click', ()=> chrono1.start());
reset.addEventListener('click', ()=> chrono1.reset());
stop1.addEventListener('click', ()=> chrono1.stop());