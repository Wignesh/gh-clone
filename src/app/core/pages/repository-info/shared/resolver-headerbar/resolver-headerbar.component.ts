import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolver-headerbar',
  templateUrl: './resolver-headerbar.component.html',
  styleUrls: ['./resolver-headerbar.component.scss'],
})
export class ResolverHeaderbarComponent implements OnInit {
  @Input() rtype: string = '';
  constructor() {}

  ngOnInit(): void {}
}
