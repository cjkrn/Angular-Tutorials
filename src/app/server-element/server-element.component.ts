import { Component, Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit
, OnChanges
, DoCheck
, AfterContentInit
, AfterContentChecked
, AfterViewInit
, AfterViewChecked
{
  
  @Input('srvElement') element: {type:string, name: string, content: string } // https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656066#announcements
  @ViewChild('heading') header: ElementRef;
  AccessServerInParent: boolean = false;

  constructor(){
    console.log("Server Element Component Constructor called");
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("Server Element Component ngOnChanges called");
    console.log("Changes called",changes);
  }
  ngOnInit(){
    console.log("Server Element Component ngOnInit called");
    console.log("Blank after ngOnit for ViewChild ", this.header.nativeElement.value)
  }

  ngDoCheck(){
    console.log("Server Element Component ngDoCheck called");
  }
  ngAfterContentInit() {
      console.log("Server Element Component ngAfterContentInit called");
  }

  ngAfterContentChecked(){
    console.log("Server Element Component ngAfterContentChecked called");
  }
  ngAfterViewInit() {
      console.log("Server Element Component ngAfterViewInit called");
      console.log("Not blank after ViewInit for ViewChild ", this.header.nativeElement.value)

    }
  ngAfterViewChecked(){
    console.log("Server Element Component ngAfterViewChecked called");
  }
  ngOnDestroy(){
    console.log("Server Element Component ngOnDestroy called");
  }
  
}
