/**
 * Website - Projects List e2e - Specs
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { AppPage } from './projects-list.po';
import { browser, by, element, ExpectedConditions } from 'protractor';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('projects list page', () => {
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
    browser.wait(ec.presenceOf(h1), 24000).then(result => {
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

  /***********************************************/
  /********** SHOULD HAVE TERMS WRAPPER **********/
  /***********************************************/

  it('should have terms wrapper', () => {
    page.navigateTo();
    expect(page.getProjectTermsWrapper()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /***********************************************/
  /********** SHOULD HAVE TERMS BUTTONS **********/
  /***********************************************/

  it('should have terms wrapper', () => {
    page.navigateTo();
    page.getTermsButtons().count().then(result => {
      expect(result).toBeGreaterThan(0);
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /**************************************************************************/
  /********** SHOULD HAVE SAME NUMBER OF TERMS LI AND TERMS BUTTON **********/
  /**************************************************************************/

  it('should have same number of terms li and terms button', () => {
    page.navigateTo();
    page.getTermsButtons().count().then(li => {
      page.getTermsButtonLinks().count().then(links => {
        expect(li).toEqual(links);
      });
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /*********************************************************/
  /********** SHOULD HAVE COLOR FOR TERMS BUTTONS **********/
  /*********************************************************/

  it('should have color for terms buttons', () => {
    page.navigateTo();
    const termsButtonLinks = page.getTermsButtonLinks();
    const ec = ExpectedConditions;
    browser.wait(ec.presenceOf(page.getFirstTermButtonLinks()), 24000).then(result => {
      expect(termsButtonLinks).toBeTruthy();
      termsButtonLinks.each(item => {
        item.getCssValue('color').then(value => {
          page.convertRgbToHex(value).then(converted => {
          expect(converted).toEqual('#00c3b6');
          }).catch(error => {
            console.error(error);
            expect(value).toEqual('#00c3b6');
          });
        });
        item.getCssValue('border-left-color').then(value => {
          page.convertRgbToHex(value).then(converted => {
          expect(converted).toEqual('#00c3b6');
          }).catch(error => {
            console.error(error);
            expect(value).toEqual('#00c3b6');
          });
        });
        item.getCssValue('border-top-color').then(value => {
          page.convertRgbToHex(value).then(converted => {
          expect(converted).toEqual('#00c3b6');
          }).catch(error => {
            console.error(error);
            expect(value).toEqual('#00c3b6');
          });
        });
        item.getCssValue('border-right-color').then(value => {
          page.convertRgbToHex(value).then(converted => {
          expect(converted).toEqual('#00c3b6');
          }).catch(error => {
            console.error(error);
            expect(value).toEqual('#00c3b6');
          });
        });
        item.getCssValue('border-bottom-color').then(value => {
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

  /***********************************************/
  /********** SHOULD HAVE PROJECT LISTS **********/
  /***********************************************/

  it('should have project lists', () => {
    page.navigateTo();
    expect(page.getProjectsList()).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /***********************************************/
  /********** SHOULD HAVE PROJECT CARDS **********/
  /***********************************************/

  it('should have project cards', () => {
    page.navigateTo();
    page.getProjectCards().count().then(result => {
      expect(result).toBeGreaterThan(0);
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /************************************************/
  /********** SHOULD HAVE PROJECT TITLES **********/
  /************************************************/

  it('should have project titles', () => {
    page.navigateTo();
    page.getProjectTitles().count().then(result => {
      expect(result).toBeGreaterThan(0);
      page.getProjectCards().count().then(cards => {
        expect(result).toEqual(cards);
      });
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /**********************************************************/
  /********** SHOULD HAVE COLOR FOR PROJECT TITLES **********/
  /**********************************************************/

  it('should have color for project titles', () => {
    page.navigateTo();
    const projetTitles = page.getProjectTitles();
    const ec = ExpectedConditions;
    browser.wait(ec.presenceOf(page.getFirstProjectTitle()), 24000).then(result => {
      expect(projetTitles).toBeTruthy();
      projetTitles.each(item => {
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

  /***********************************************/
  /********** SHOULD HAVE PROJECTS TEXT **********/
  /***********************************************/

  it('should have projects text', () => {
    page.navigateTo();
    page.getProjectsText().count().then(result => {
      expect(result).toBeGreaterThan(0);
      page.getProjectCards().count().then(cards => {
        expect(result).toEqual(cards);
      });
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /*********************************************************/
  /********** SHOULD HAVE COLOR FOR PROJECTS TEXT **********/
  /*********************************************************/

  it('should have color for projects text', () => {
    page.navigateTo();
    const projectsText = page.getProjectsText();
    const ec = ExpectedConditions;
    browser.wait(ec.presenceOf(page.getFirstProjectText()), 24000).then(result => {
      expect(projectsText).toBeTruthy();
      projectsText.each(item => {
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

  /*************************************************/
  /********** SHOULD HAVE PROJECT BUTTONS **********/
  /*************************************************/

  it('should have project buttons', () => {
    page.navigateTo();
    page.getProjectButtons().count().then(result => {
      expect(result).toBeGreaterThan(0);
      page.getProjectCards().count().then(cards => {
        expect(result).toEqual(cards);
      });
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /***********************************************************/
  /********** SHOULD HAVE COLOR FOR PROJECT BUTTONS **********/
  /***********************************************************/

  it('should have color for project buttons', () => {
    page.navigateTo();
    const projectButtons = page.getProjectButtons();
    const ec = ExpectedConditions;
    browser.wait(ec.presenceOf(page.getFirstProjectButton()), 24000).then(result => {
      expect(projectButtons).toBeTruthy();
      projectButtons.each(item => {
        item.getCssValue('color').then(value => {
          page.convertRgbToHex(value).then(converted => {
          expect(converted).toEqual('#00c3b6');
          }).catch(error => {
            console.error(error);
            expect(value).toEqual('#00c3b6');
          });
        });
        item.getCssValue('border-left-color').then(value => {
          page.convertRgbToHex(value).then(converted => {
          expect(converted).toEqual('#00c3b6');
          }).catch(error => {
            console.error(error);
            expect(value).toEqual('#00c3b6');
          });
        });
        item.getCssValue('border-top-color').then(value => {
          page.convertRgbToHex(value).then(converted => {
          expect(converted).toEqual('#00c3b6');
          }).catch(error => {
            console.error(error);
            expect(value).toEqual('#00c3b6');
          });
        });
        item.getCssValue('border-right-color').then(value => {
          page.convertRgbToHex(value).then(converted => {
          expect(converted).toEqual('#00c3b6');
          }).catch(error => {
            console.error(error);
            expect(value).toEqual('#00c3b6');
          });
        });
        item.getCssValue('border-bottom-color').then(value => {
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

  /***********************************************/
  /********** SHOULD NAVIGATE TO DETAIL **********/
  /***********************************************/

  it('should navigate to detail', () => {
    page.navigateTo();
    page.getFirstProjectTitle().getText().then(result => {
      page.getFirstProjectButton().click().then(project => {
        const projectImage = element(by.css('.project-cover-image'));
        const projectDetailTitle = element(by.css('h1'));
        const ec = ExpectedConditions;

        browser.wait(ec.presenceOf(projectDetailTitle), 24000).then(condition => {
          expect(projectImage).toBeTruthy();
          expect(projectDetailTitle).toBeTruthy();
          projectDetailTitle.getText().then(projectDetailTitleText => {
            expect(projectDetailTitleText).toEqual(result);
          });
        });
      });
    });
  });
});
