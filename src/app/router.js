var {
    Router
} = Backbone;
import $ from 'jquery';
import {AppView} from './views/app';

export class MainRouter extends Router {
    constructor() {
        super();
        this.routes = {
            'bk': 'black',
            'wt': 'white'
        }
        this._bindRoutes();

    }
    black() {
      const view = new AppView({theme: 'black'});
      $('body').removeClass().addClass('black');
      $('#main').append(view.render());
    }
    white() {
      const view = new AppView({theme: 'white'});
      $('body').removeClass().addClass('white');
      $('#main').append(view.render());
    }
};
