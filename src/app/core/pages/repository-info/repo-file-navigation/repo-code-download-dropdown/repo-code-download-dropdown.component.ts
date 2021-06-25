import { Component, OnInit } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-repo-code-download-dropdown',
  templateUrl: './repo-code-download-dropdown.component.html',
  styleUrls: ['./repo-code-download-dropdown.component.scss']
})
export class RepoCodeDownloadDropdownComponent implements OnInit {


  dropdownDisplayed:boolean = false
  dropdownPosition:DOMRect|undefined
  buttonPosition:DOMRect|undefined

  constructor() { }

  ngOnInit(): void {
    this.dropdownPosition = document.querySelector('.repo-code-dropdown-popper')?.getBoundingClientRect()
    this.buttonPosition = document.querySelector('.code-download-btn')?.getBoundingClientRect()

    const branchDropdown = document.querySelector('.code-download-btn') as HTMLElement;
    const tooltip = document.querySelector('.repo-code-dropdown-popper') as HTMLElement;
    createPopper(branchDropdown, tooltip, {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [-290,10],
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

    console.log(left,right,top,bottom,mouseX,mouseY)

    // to account for the relative position shift due to popper
    // solves the issues for now but should check later
    if((left<=mouseX && mouseX<=right)&&(top<=mouseY && mouseY<=bottom)){
      return true
    }
    return false

  }

  dismissOnClickingOutsideBoundary(){
    document.querySelector("body")?.addEventListener('click',(evt)=>{
      const {clientX,clientY} = evt

      const dropdownIsClicked = this.checkIfDropdownIsClicked(clientX,clientY)
      const buttonIsClicked = this.checkIfButtonIsClicked(clientX,clientY)

      if(dropdownIsClicked || buttonIsClicked ){
        return
      }

      console.log("changing state")

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
    this.dropdownPosition = document.querySelector('.repo-code-dropdown-popper')?.getBoundingClientRect()
    this.buttonPosition = document.querySelector('.code-download-btn')?.getBoundingClientRect()
  }

}
