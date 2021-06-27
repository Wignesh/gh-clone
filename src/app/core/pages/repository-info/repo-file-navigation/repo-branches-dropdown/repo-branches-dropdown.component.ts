import { Component, OnChanges, OnInit } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-repo-branches-dropdown',
  templateUrl: './repo-branches-dropdown.component.html',
  styleUrls: ['./repo-branches-dropdown.component.scss']
})


export class RepoBranchesDropdownComponent implements OnInit,OnChanges {

  dropdownDisplayed:boolean = false
  dropdownPosition:DOMRect|undefined
  buttonPosition:DOMRect|undefined

  constructor() {
  }

  ngOnInit(): void {

    this.dropdownPosition = document.querySelector('#branch-dropdown-popper')?.getBoundingClientRect()
    this.buttonPosition = document.querySelector('#branch-select-dropdown')?.getBoundingClientRect()

    const branchDropdown = document.querySelector('#branch-select-dropdown') as HTMLElement;
    const tooltip = document.querySelector('#branch-dropdown-popper') as HTMLElement;
    createPopper(branchDropdown, tooltip, {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0,10],
          },
        },
      ]
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

    // console.log(left,right,top,bottom,mouseX,mouseY)

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
    this.dropdownPosition = document.querySelector('#branch-dropdown-popper')?.getBoundingClientRect()
    this.buttonPosition = document.querySelector('#branch-select-dropdown')?.getBoundingClientRect()
  }

}
