/**
 * Website - App e2e - Specs
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { AppPage } from './app.po';
import { browser, ExpectedConditions } from 'protractor';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('homepage', () => {
  let page: AppPage;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BEFORE EACH **********/
  /*********************************/

  beforeEach(() => {
    page = new AppPage();
  });

  /********************************************************************************/
  /********************************************************************************/

  /********************************************/
  /********** SHOULD HAVE NAVIGATION **********/
  /********************************************/

  it('should have navigation', () => {
    page.navigateTo();
    expect(page.getNavigation()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** SHOULD HAVE BRAND **********/
  /***************************************/

  it('should have brand', () => {
    page.navigateTo();
    expect(page.getBrand()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /*************************************************/
  /********** SHOULD HAVE COLOR FOR BRAND **********/
  /*************************************************/

  it('should have color for brand', () => {
    page.navigateTo();
    const brand = page.getBrand();
    const ec = ExpectedConditions;
    browser.wait(ec.presenceOf(brand), 24000).then(result => {
      expect(brand).toBeTruthy();
      brand.getCssValue('color').then(value => {
        page.convertRgbToHex(value).then(converted => {
        expect(converted).toEqual('#00c3b6');
        }).catch(error => {
          console.error(error);
          expect(value).toEqual('#00c3b6');
        });
      });
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /*************************************************/
  /********** SHOULD HAVE NAVIGATION LIST **********/
  /*************************************************/

  it('should have navigation list', () => {
    page.navigateTo();
    expect(page.getNavigationList()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /**************************************************/
  /********** SHOULD HAVE NAVIGATION ITEMS **********/
  /**************************************************/

  it('should have navigation items', () => {
    page.navigateTo();
    expect(page.getNavigationItems()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /********************************************************/
  /********** SHOULD HAVE THREE NAVIGATION ITEMS **********/
  /********************************************************/

  it('should have three navigation items', () => {
    page.navigateTo();
    page.getNavigationItems().count().then(result => {
      expect(result).toEqual(3);
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /************************************************************/
  /********** SHOULD HAVE COLOR FOR NAVIGATION ITEMS **********/
  /************************************************************/

  it('should have color for navigation items', () => {
    page.navigateTo();
    const navigationLinks = page.getNavigationLinks();
    const ec = ExpectedConditions;
    browser.wait(ec.presenceOf(page.getFirstNavigationLink()), 24000).then(result => {
      expect(navigationLinks).toBeTruthy();
      navigationLinks.each(item => {
        item.getCssValue('color').then(value => {
          page.convertRgbToHex(value).then(converted => {
          expect(converted).toEqual('#00c3b6');
          }).catch(error => {
            console.error(error);
            expect(value).toEqual('#00c3b6');
          });
        });
      });
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** SHOULD HAVE CONTENT **********/
  /*****************************************/

  it('should have content', () => {
    page.navigateTo();
    expect(page.getContent()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /**************************************************/
  /********** SHOULD HAVE POST COVER IMAGE **********/
  /**************************************************/

  it('should have post cover image', () => {
    page.navigateTo();
    expect(page.getPostCoverImage()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** SHOULD HAVE EXCERPT **********/
  /*****************************************/

  it('should have excerpt', () => {
    page.navigateTo();
    expect(page.getExcerpt()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /***************************************************/
  /********** SHOULD HAVE COLOR FOR EXCERPT **********/
  /***************************************************/

  it('should have color for excerpt', () => {
    page.navigateTo();
    const excerpt = page.getExcerpt();
    const ec = ExpectedConditions;
    browser.wait(ec.presenceOf(excerpt), 24000).then(result => {
      expect(excerpt).toBeTruthy();
      excerpt.getCssValue('color').then(value => {
        page.convertRgbToHex(value).then(converted => {
        expect(converted).toEqual('#b4b0b0');
        }).catch(error => {
          console.error(error);
          expect(value).toEqual('#b4b0b0');
        });
      });
    });
  });
});
