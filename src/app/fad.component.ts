export class Fad{
    
    
    public text:string;
    public width:string;
   
     
    //states
    public unselected:boolean;
    public readyToMerge:boolean;
    public selected:boolean;
    public hidden:boolean;
    public found:boolean;
    
   
    
    constructor( 
        public title:string,
        public url:string,
        public image:string,
        public id:string
    ){
        this.selected = false;
        this.unselected = true;
        this.readyToMerge = false;
        this.hidden = false;
        this.found = true;
        this.text = 'Select this fad';
        this.width = '25%';
    }
    setStateSelected(){
        if (!this.hidden){
            this.selected = true;
            this.unselected = false;
            this.readyToMerge = false;
            this.text =  'Unselect this fad'
        }        
    }
    setStateReadyToMerge(){
        if (!this.hidden){
            this.selected = false;
            this.unselected = false;
            this.readyToMerge = true;
            this.text = 'Merge with selected Fad';
        }      
    }
    setStateMerged(){
        if (!this.hidden){
            this.selected = false;
            this.unselected = false;
            this.readyToMerge = false;
            this.hidden = true;
            this.text = 'Merged, click to undo';
        }  
    }
    setStateUnselected(){
        if (!this.hidden){
            this.selected = false;
            this.unselected = true;
            this.readyToMerge = false;
            this.text = "Select this fad";
        }  
    }
    setFound(){
        if(!this.hidden){
            this.found = true;
        }
    }
    setNotFound(){
        if(!this.hidden){
            this.found = false;
        }
    }
}