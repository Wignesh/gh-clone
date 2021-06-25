import { Component, OnChanges, OnInit } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-issues-filter-dropdown',
  templateUrl: './issues-filter-dropdown.component.html',
  styleUrls: ['./issues-filter-dropdown.component.scss']
})
export class IssuesFilterDropdownComponent implements OnInit,OnChanges {
  dropdownDisplayed:boolean = false
  dropdownPosition:DOMRect|undefined
  buttonPosition:DOMRect|undefined

  constructor() {
  }

  ngOnInit(): void {

    this.dropdownPosition = document.querySelector('.issues-filter-dropdown-popper')?.getBoundingClientRect()
    this.buttonPosition = document.querySelector('.filter-btn')?.getBoundingClientRect()

    const buttonDropdown = document.querySelector('.filter-btn') as HTMLElement;
    const tooltip = document.querySelector('.issues-filter-dropdown-popper') as HTMLElement;
    createPopper(buttonDropdown, tooltip, {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });

    this.dismissOnClickingOutsideBoundary()

  }

  checkIfButtonIsClicked(mouseX:number,mouseY:number){
    const {left,right,top,bottom} = this.buttonPosition as DOMRect
    if((left<=mouseX && mouseX<=right)&&(top<=mouseY && mouseY<=bottom)){
      return true
    }
    return false
  }


  checkIfDropdownIsClicked(mouseX:number,mouseY:number){
    const {left,right,top,bottom} = this.dropdownPosition as DOMRect

    if((left<=mouseX && mouseX<=right)&&(top<=mouseY && mouseY<=bottom)){
      return true
    }
    return false

  }

  dismissOnClickingOutsideBoundary(){
    document.querySelector("body")?.addEventListener('click',(evt)=>{
      const {pageX,pageY} = evt

      const dropdownIsClicked = this.checkIfDropdownIsClicked(pageX,pageY)
      const buttonIsClicked = this.checkIfButtonIsClicked(pageX,pageY)

      if(dropdownIsClicked || buttonIsClicked ){
        return
      }

      if(this.dropdownDisplayed===true){
        this.dropdownDisplayed = false;
      }
    })
  }



  toggleDropDownVisibility(){
    setTimeout(()=>{
      this.dropdownDisplayed = !this.dropdownDisplayed
    },100)
  }

  removeDropDownFromDOM(){
    this.dropdownDisplayed = false
  }

  ngOnChanges(): void {
    this.dropdownPosition = document.querySelector('.issues-filter-dropdown-popper')?.getBoundingClientRect()
    this.buttonPosition = document.querySelector('.filter-btn')?.getBoundingClientRect()
  }

}
