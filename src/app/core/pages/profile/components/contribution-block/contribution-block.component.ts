import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contribution-block',
  templateUrl: './contribution-block.component.html',
  styleUrls: ['./contribution-block.component.scss']
})
export class ContributionBlockComponent implements OnInit {

  @ViewChild('hiddentimeline') timeline:any;
  constructor() { }

  ngOnInit(): void {
  }
  showhiddentimeline()
  {
    this.timeline.nativeElement.style.display="block"
  }

}
