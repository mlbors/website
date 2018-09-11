/**
 * Website - Project Detail e2e - Specs
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { AppPage } from './project-detail.po';
import { browser, by, element, ExpectedConditions } from 'protractor';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('project detail page', () => {
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
    browser.wait(ec.presenceOf(brand), 36000).then(result => {
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
    browser.wait(ec.presenceOf(page.getFirstNavigationLink()), 36000).then(result => {
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
    browser.wait(ec.presenceOf(h1), 36000).then(result => {
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

  /*****************************************************/
  /********** SHOULD HAVE PROJECT COVER IMAGE **********/
  /*****************************************************/

  it('should have project cover image', () => {
    page.navigateTo();
    expect(page.getProjectCoverImage()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /*************************************************/
  /********** SHOULD HAVE CONTENT SECTION **********/
  /*************************************************/

  it('should have content section', () => {
    page.navigateTo();
    expect(page.getContentSection()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /***********************************************************/
  /********** SHOULD HAVE COLOR FOR CONTENT SECTION **********/
  /***********************************************************/

  it('should have color for content section', () => {
    page.navigateTo();
    const contentSection = page.getContentSection();
    const ec = ExpectedConditions;
    browser.wait(ec.presenceOf(contentSection), 36000).then(result => {
      expect(contentSection).toBeTruthy();
      contentSection.getCssValue('color').then(value => {
        page.convertRgbToHex(value).then(converted => {
        expect(converted).toEqual('#b4b0b0');
        }).catch(error => {
          console.error(error);
          expect(value).toEqual('#b4b0b0');
        });
      });
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /************************************************/
  /********** SHOULD HAVE IMAGES SECTION **********/
  /************************************************/

  it('should have images section', () => {
    page.navigateTo();
    expect(page.getImagesSection()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /**********************************************/
  /********** SHOULD HAVE META SECTION **********/
  /**********************************************/

  it('should have meta section', () => {
    page.navigateTo();
    expect(page.getMetaSection()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /********************************************************/
  /********** SHOULD HAVE COLOR FOR META SECTION **********/
  /********************************************************/

  it('should have color for meta section', () => {
    page.navigateTo();
    const metaSection = page.getMetaSection();
    const ec = ExpectedConditions;
    browser.wait(ec.presenceOf(metaSection), 36000).then(result => {
      expect(metaSection).toBeTruthy();
      metaSection.getCssValue('color').then(value => {
        page.convertRgbToHex(value).then(converted => {
        expect(converted).toEqual('#b4b0b0');
        }).catch(error => {
          console.error(error);
          expect(value).toEqual('#b4b0b0');
        });
      });
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************************/
  /********** SHOULD NAVIGATE TO LARGER IMAGE **********/
  /*****************************************************/

  it('should navigate to larger image', () => {
    page.navigateTo();
    page.getFirstImage().click().then(result => {
      const imageViewer = element(by.css('.image-viewer'));
      const backButton = element(by.css('.btn-outline-primary'));
      const ec = ExpectedConditions;

      browser.wait(ec.presenceOf(backButton), 36000).then(condition => {
        expect(imageViewer).toBeTruthy();
        expect(backButton).toBeTruthy();
      });
    });
  });
});
