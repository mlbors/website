/**
 * Website - Image Viewer Component - Component
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
import { Router, ActivatedRoute } from '@angular/router';

/********************************************************************************/
/********************************************************************************/

/*******************************/
/********** COMPONENT **********/
/*******************************/

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})

/********************************************************************************/
/********************************************************************************/

/********************************************/
/********** IMAGE VIEWER COMPONENT **********/
/********************************************/

export class ImageViewerComponent implements OnInit {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var String imageUrl source of the image
   * @var String previousUrl url to go back to
   */

  public imageUrl: string;
  public previousUrl: string;

  /********************************************************************************/
  /********************************************************************************/

   /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param ActivatedRoute activateRoute information about associated route
   */

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      const img = params.get('img');
      const previous = params.get('previous');
      this._setValues(img, previous);
    });
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** NG ON INIT **********/
  /********************************/

  ngOnInit() {
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** SET VALUES **********/
  /********************************/

  /**
   * @param String slug page slug
   */

  private _setValues(img: string, previous: string) {
    this.imageUrl = img;
    this.previousUrl = previous;
  }

}
