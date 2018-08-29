/**
 * Website - Post Taxonomy - Specs
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { IDataService } from '../interfaces/idata-service';
import { IMetaData } from '../interfaces/imeta-data';
import { IPost } from '../interfaces/ipost';
import { IPostService } from '../interfaces/ipost-service';
import { IQueryable} from '../interfaces/iqueryable';
import { IQueryService } from '../interfaces/iquery-service';
import { ITaxonomy } from '../interfaces/itaxonomy';
import { ITaxonomyService } from '../interfaces/itaxonomy-service';
import { ITerm } from '../interfaces/iterm';
import { ITermService } from '../interfaces/iterm-service';
import { IType } from '../interfaces/itype';
import { IWebData } from '../interfaces/iweb-data';

import { PostTaxonomyPipe } from './post-taxonomy.pipe';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('PostTaxonomyPipe', () => {

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CREATE PIPE **********/
  /*********************************/

  it('create an instance', () => {
    const pipe = new PostTaxonomyPipe();
    expect(pipe).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /**********************************/
  /********** WITH NO SLUG **********/
  /**********************************/

  it('should return items when no slug', () => {
    const pipe = new PostTaxonomyPipe();

    const postType: IType = { id: 'post', name: 'post', slug: 'post' };
    const taxonomy: ITaxonomy = { id: 'taxonomy1', name: 'taxonomy1', slug: 'taxonomy1', terms: null };

    const post: IPost = {
      id: 'foo-id',
      slug: 'foo-slug',
      title: 'foo title',
      excerpt: 'foo excerpt',
      content: 'foo content',
      sections: null,
      image: null,
      images: ['foo', 'foo2'],
      type: postType,
      order: 1,
      taxonomies: [taxonomy],
      terms: null,
      meta: null,
      template: 'foo-template'
    };

    const items: Array<IQueryable> = [post];
    const taxonomySlug = null;

    const result = pipe.transform(items, taxonomySlug);

    expect((result[0] as IPost).id).toEqual('foo-id');
    expect(result.length).toEqual(1);
  });

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** WITH NO TAXONOMY **********/
  /**************************************/

  it('should return empty array with no taxonomy', () => {
    const pipe = new PostTaxonomyPipe();

    const postType: IType = { id: 'post', name: 'post', slug: 'post' };

    const post: IPost = {
      id: 'foo-id',
      slug: 'foo-slug',
      title: 'foo title',
      excerpt: 'foo excerpt',
      content: 'foo content',
      sections: null,
      image: null,
      images: ['foo', 'foo2'],
      type: postType,
      order: 1,
      taxonomies: null,
      terms: null,
      meta: null,
      template: 'foo-template'
    };

    const items: Array<IQueryable> = [post];
    const taxonomySlug = 'foo-taxonomy';

    const result = pipe.transform(items, taxonomySlug);

    expect(result.length).toEqual(0);
  });

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** RETURN RIGHT RESULT **********/
  /*****************************************/

  it('should return filterd items', () => {
    const pipe = new PostTaxonomyPipe();

    const postType: IType = { id: 'post', name: 'post', slug: 'post' };
    const taxonomy1: ITaxonomy = { id: 'taxonomy1', name: 'taxonomy1', slug: 'taxonomy1', terms: null };
    const taxonomy2: ITaxonomy = { id: 'taxonomy2', name: 'taxonomy2', slug: 'taxonomy2', terms: null };

    const items: Array<IQueryable> = [
      {
        id: 'foo-id',
        slug: 'foo-slug',
        title: 'foo title',
        excerpt: 'foo excerpt',
        content: 'foo content',
        sections: null,
        image: null,
        images: ['foo', 'foo2'],
        type: postType,
        order: 1,
        taxonomies: [taxonomy1],
        terms: null,
        meta: null,
        template: 'foo-template'
      },
      {
        id: 'foo2-id',
        slug: 'foo2-slug',
        title: 'foo2 title',
        excerpt: 'foo2 excerpt',
        content: 'foo2 content',
        sections: null,
        image: null,
        images: ['foo', 'foo2'],
        type: postType,
        order: 1,
        taxonomies: [taxonomy1, taxonomy2],
        terms: null,
        meta: null,
        template: 'foo-template'
      },
      {
        id: 'foo3-id',
        slug: 'foo3-slug',
        title: 'foo3 title',
        excerpt: 'foo3 excerpt',
        content: 'foo3 content',
        sections: null,
        image: null,
        images: ['foo', 'foo2'],
        type: postType,
        order: 1,
        taxonomies: [taxonomy2],
        terms: null,
        meta: null,
        template: 'foo-template'
      }
    ];

    const taxonomySlug = 'taxonomy1';

    const result = pipe.transform(items, taxonomySlug);

    expect((result[0] as IPost).id).toEqual('foo-id');
    expect((result[1] as IPost).id).toEqual('foo2-id');
    expect(result.length).toEqual(2);
  });

});
