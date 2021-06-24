import { Component, OnInit } from '@angular/core';
import randomColor from 'randomcolor'

interface langDetails{
  language:string,
  color?:string,
  percent:string
}


@Component({
  selector: 'app-languages-used-indicator',
  templateUrl: './languages-used-indicator.component.html',
  styleUrls: ['./languages-used-indicator.component.scss']
})
export class LanguagesUsedIndicatorComponent implements OnInit {

  languagesUsed : langDetails[] = [

    {
      language:'TypeScript',
      percent: '82.9%'
    },
    {
      language:'SCSS',
      percent: '6.0%'
    },
    {
      language:'HTML',
      percent: '5.7%'
    },
    {
      language:'Starlark',
      percent: '3.9%'
    },
    {
      language:'JavaScript',
      percent: '0.9%'
    },
    {
      language:'CSS',
      percent: '0.4%'
    },
    {
      language:'Other',
      percent: '0.2%'
    }
  ]

  constructor() {

    this.languagesUsed = this.languagesUsed.map((langDetails:any)=>{
      langDetails = {...langDetails,color:randomColor( {luminosity: 'dark'})}
      return langDetails
    })

    console.log(this.languagesUsed)

   }

  ngOnInit(): void {
  }

}
