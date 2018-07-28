/**
 * Website - App Component - Component
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

/********************************************************************************/
/********************************************************************************/

/*******************************/
/********** COMPONENT **********/
/*******************************/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/********************************************************************************/
/********************************************************************************/

/***********************************/
/********** APP COMPONENT **********/
/***********************************/

export class AppComponent implements OnInit {

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param Router router router used
   */

  constructor(private router: Router) { }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** NG ON INIT **********/
  /********************************/

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
