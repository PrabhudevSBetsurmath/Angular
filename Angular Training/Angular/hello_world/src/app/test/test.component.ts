import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
public name = "Prabhudev";
public one =true;
public two =false;
public three =true;
public message = {"one":this.one,"two":this.two,"three":this.three}
public color = {
  color:'red',
  fontStyle :'italic'
}
public colors = 'red';
public greeting =""
public ip=""
myfun(inp:string){
  this.greeting = inp
}
public colo=false
public val = ['red','green','yellow','pink']
@Input() public parentdata:any;

@Output() public child = new EventEmitter();
fireEvent(){
  this.child.emit('helloooo');
}
}
