import { Component, OnInit } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-repo-branches-dropdown',
  templateUrl: './repo-branches-dropdown.component.html',
  styleUrls: ['./repo-branches-dropdown.component.scss']
})
export class RepoBranchesDropdownComponent implements OnInit {

  dropdownDisplayed:boolean = false


  constructor() { }

  ngOnInit(): void {


    const branchDropdown = document.querySelector('#branch-select-dropdown') as HTMLElement;
    const tooltip = document.querySelector('#branch-dropdown-popper') as HTMLElement;
    createPopper(branchDropdown, tooltip, {
      placement: 'bottom-start',
    });

    this.dismissOnClickingOutsideBoundary()

  }

  dismissOnClickingOutsideBoundary(){

  }



  toggleDropDownVisibility(){
    this.dropdownDisplayed = !this.dropdownDisplayed
  }

  removeDropDownFromDOM(){
    this.dropdownDisplayed = false
  }

}
