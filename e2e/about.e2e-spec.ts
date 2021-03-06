/**
 * Website - About e2e - Specs
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { AppPage } from './about.po';
import { browser, ExpectedConditions } from 'protractor';
import * as fs from 'fs';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('about page', () => {
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
    browser.wait(ec.presenceOf(brand), 72000).then(result => {
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

  /****************************************************/
  /********** SHOULD HAVE 5 NAVIGATION ITEMS **********/
  /****************************************************/

  it('should have 5 navigation items', () => {
    page.navigateTo();
    page.getNavigationItems().count().then(result => {
      expect(result).toEqual(5);
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
    browser.wait(ec.presenceOf(page.getFirstNavigationLink()), 72000).then(result => {
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

  /************************************/
  /********** SHOULD HAVE H1 **********/
  /************************************/

  it('should have H1', () => {
    page.navigateTo();
    expect(page.getH1()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /**********************************************/
  /********** SHOULD HAVE COLOR FOR H1 **********/
  /**********************************************/

  it('should have color for h1', () => {
    page.navigateTo();
    const h1 = page.getH1();
    const ec = ExpectedConditions;
    browser.wait(ec.presenceOf(h1), 72000).then(result => {
      expect(h1).toBeTruthy();
      h1.getCssValue('color').then(value => {
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

  /**************************************************/
  /********** SHOULD HAVE SECTIONS WRAPPER **********/
  /**************************************************/

  it('should have sections wrapper', () => {
    page.navigateTo();
    expect(page.getSections()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** SHOULD HAVE SECTIONS **********/
  /******************************************/

  it('should have sections', () => {
    page.navigateTo();
    page.getSectionsContent().count().then(result => {
      expect(result).toEqual(3);
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /****************************************************/
  /********** SHOULD HAVE COLOR FOR SECTIONS **********/
  /****************************************************/

  it('should have color for sections', () => {
    page.navigateTo();
    const pageSections = page.getSectionsContent();
    const ec = ExpectedConditions;
    browser.wait(ec.presenceOf(page.getFirstSectionContent()), 72000).then(result => {
      expect(pageSections).toBeTruthy();
      pageSections.each(item => {
        item.getCssValue('color').then(value => {
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

  /********************************************************************************/
  /********************************************************************************/

  /************************************************/
  /********** SHOULD HAVE SECTION IMAGES **********/
  /************************************************/

  it('should have section images', () => {
    page.navigateTo();
    page.getSectionImages().count().then(result => {
      expect(result).toEqual(3);
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /**************************************************/
  /********** SHOULD HAVE SECTION HEADINGS **********/
  /**************************************************/

  it('should have section headings', () => {
    page.navigateTo();
    page.getSectionHeadings().count().then(result => {
      expect(result).toEqual(3);
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /**********************************************/
  /********** SHOULD HAVE COLOR FOR H2 **********/
  /**********************************************/

  it('should have color for h2', () => {
    page.navigateTo();
    const sectionHeadings = page.getSectionHeadings();
    const ec = ExpectedConditions;
    browser.wait(ec.presenceOf(page.getFirstSectionHeadings()), 72000).then(result => {
      expect(sectionHeadings).toBeTruthy();
      sectionHeadings.each(item => {
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
});
