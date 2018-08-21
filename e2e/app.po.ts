/**
 * Website - App e2e - Functions
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { browser, by, element } from 'protractor';

/********************************************************************************/
/********************************************************************************/

/************************************/
/********** APP PAGE CLASS **********/
/************************************/

export class AppPage {

  /*********************************/
  /********** NAVIGATE TO **********/
  /*********************************/

  navigateTo() {
    return browser.get('/');
  }

  /********************************************************************************/
  /********************************************************************************/

  /****************************************/
  /********** GET PARAGRAPH TEXT **********/
  /****************************************/

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
