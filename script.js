class DivWordElement{
   
    constructor(word){
        this.word=word;
        this.addDiv();
    }

    addDiv(){
        const tablicaZnakow=[...this.word];
        tablicaZnakow.forEach((e)=>{
            const div=document.createElement('div');
            div.textContent=e;
            document.body.appendChild(div);
        })
        
    }


}

const wypisz=new DivWordElement('oddawaj hajs');