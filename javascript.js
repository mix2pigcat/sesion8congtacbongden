function electriclamp(status) {
    this.status=status;

}
function switchbutton(status) {
this.status=status;
this.switchOnButton=function (lamp) {
    if(this.status==true){
        alert('Bong den da bat roi')
    }else {
        alert('se bat bong den sau')
        this.status=true
        lamp.status=this.status;
    }
}
    this.switchOffButton=function (lamp) {
    if (this.status=true){
        alert('bong den se tat')
        this.status=false
        lamp.status=this.status;
    }else {
        alert('Den van dang tat')
    }
    }
}
lamp1=new electriclamp(true);
switchbutton1=new switchbutton(true);
