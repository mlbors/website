/**
 * Website - About e2e - Functions
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { browser, by, element, ExpectedConditions } from 'protractor';

/********************************************************************************/
/********************************************************************************/

/************************************/
/********** APP PAGE CLASS **********/
/************************************/

export class AppPage {

  /*****************************************/
  /********** SET SYNCHRONIZATION **********/
  /*****************************************/

  setSynchronization() {
    return new Promise((resolve, reject) => {
      browser.getCapabilities().then(cap => {
        const testName = cap.get('name');
        browser.ignoreSynchronization = false;
        if (testName === 'safari-ios-tests' || testName === 'firefox-linux-tests') {
          browser.ignoreSynchronization = true;
        }
        resolve();
        return;
      }).catch(error => {
        browser.ignoreSynchronization = false;
        resolve();
        return;
      });
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** NAVIGATE TO **********/
  /*********************************/

  navigateTo() {
    browser.ignoreSynchronization = true;
    return browser.get(browser.baseUrl + 'about');
    //return browser.get('/about');
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

  /***********************************************/
  /********** GET FIRST NAVIGATION LINK **********/
  /***********************************************/

  getFirstNavigationLink() {
    return element(by.css('.nav-link'));
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

  /*************************************/
  /********** GET COVER IMAGE **********/
  /*************************************/

  getPostCoverImage() {
    return element(by.css('.post-cover-image'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** GET EXCERPT **********/
  /*********************************/

  getExcerpt() {
    return element(by.css('.excerpt'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /**********************************/
  /********** GET SECTIONS **********/
  /**********************************/

  getSections() {
    return element(by.css('.content-sections'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** GET SECTIONS CONTENT **********/
  /******************************************/

  getSectionsContent() {
    return element.all(by.css('.content-sections .content-section'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** GET SECTIONS CONTENT **********/
  /******************************************/

  getFirstSectionContent() {
    return element(by.css('.content-sections .content-section'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /****************************************/
  /********** GET SECTION IMAGES **********/
  /****************************************/

  getSectionImages() {
    return element.all(by.css('.content-sections .image-section'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** GET SECTION HEADINGS **********/
  /******************************************/

  getSectionHeadings() {
    return element.all(by.css('.content-sections h2'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /************************************************/
  /********** GET FIRST SECTION HEADINGS **********/
  /************************************************/

  getFirstSectionHeadings() {
    return element(by.css('.content-sections h2'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /****************************************/
  /********** CONVERT RGB TO HEX **********/
  /****************************************/

  convertRgbToHex(color: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (color.substr(0, 1) === '#') {
        resolve(color);
        return;
      }
      try {
        if (color.replace(/\s/g, '').match(/^rgba\((\d+),(\d+),(\d+)/i) != null) {
          const rgb = color.replace(/\s/g, '').match(/^rgba\((\d+),(\d+),(\d+)/i);
          const answer = (rgb && rgb.length === 4) ? '#' +
           ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
           ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
           ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : color;
           resolve(answer);
           return;
        } else if (color.replace(/\s/g, '').match(/^rgb\((\d+),(\d+),(\d+)/i) != null) {
          const rgb = color.replace(/\s/g, '').match(/^rgb\((\d+),(\d+),(\d+)/i);
          const answer = (rgb && rgb.length === 4) ? '#' +
           ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
           ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
           ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : color;
           resolve(answer);
           return;
        } else {
          resolve(color);
          return;
        }
      } catch (error) {
        reject(color);
      }
    });
  }
}
