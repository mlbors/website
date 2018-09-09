/**
 * Website - Projects List e2e - Functions
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
    return browser.get('/projects');
  }

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** GET NAVIGATION **********/
  /************************************/

  getNavigation() {
    return element(by.css('.navbar'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /*******************************/
  /********** GET BRAND **********/
  /*******************************/

  getBrand() {
    return element(by.css('.navbar-brand'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** GET NAVBAR **********/
  /********************************/

  getNavigationList() {
    return element(by.css('.navbar-nav'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** GET NAVIGATION ITEMS **********/
  /******************************************/

  getNavigationItems() {
    return element.all(by.css('.nav-item'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** GET NAVIGATION LINKS **********/
  /******************************************/

  getNavigationLinks() {
    return element.all(by.css('.nav-link'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** GET CONTENT **********/
  /*********************************/

  getContent() {
    return element(by.css('.content'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /****************************/
  /********** GET H1 **********/
  /****************************/

  getH1() {
    return element(by.css('h1'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /***********************************************/
  /********** GET PROJECT TERMS WRAPPER **********/
  /***********************************************/

  getProjectTermsWrapper() {
    return element(by.css('.project-category-terms-list-wrapper'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** GET TERMS BUTTONS **********/
  /***************************************/

  getTermsButtons() {
    return element.all(by.css('.project-category-terms-list-wrapper ul li'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************************/
  /********** GET TERMS BUTTON LINKS **********/
  /********************************************/

  getTermsButtonLinks() {
    return element.all(by.css('.project-category-terms-list-wrapper ul li button'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** GET PROJECTS LIST **********/
  /***************************************/

  getProjectsList() {
    return element(by.css('section.projects-list'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** GET PROJECT CARDS **********/
  /***************************************/

  getProjectCards() {
    return element.all(by.css('section.projects-list .card'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /****************************************/
  /********** GET PROJECT TITLES **********/
  /****************************************/

  getProjectTitles() {
    return element.all(by.css('section.projects-list .card h5'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** GET FIRST TITLE **********/
  /**************************************/

  getFirstProjectTitle() {
    return element(by.css('section.projects-list .card h5'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** GET PROJECTS TEXT **********/
  /***************************************/

  getProjectsText() {
    return element.all(by.css('section.projects-list .card .card-text'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** GET PROJECT BUTTONS **********/
  /*****************************************/

  getProjectButtons() {
    return element.all(by.css('section.projects-list .card .btn'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** GET FIRST BUTTON **********/
  /**************************************/

  getFirstProjectButton() {
    return element(by.css('section.projects-list .card .btn'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /****************************************/
  /********** CONVERT RGB TO HEX **********/
  /****************************************/

  convertRgbToHex(color: string) {
    if (color.substr(0, 1) === '#') {
      return color;
    }
    const digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    const red = parseInt(digits[2]);
    const green = parseInt(digits[3]);
    const blue = parseInt(digits[4]);

    const rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16).padStart(6, '0');
  }
}
