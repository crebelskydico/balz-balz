var {
    Router
} = Backbone;
import $ from 'jquery';
import {AppView} from './views/app';

export class MainRouter extends Router {
    constructor() {
        super();
        this.routes = {
            '*actions': 'black'
        }
        this._bindRoutes();

    }
    black(actions) {
      const view = new AppView({theme: 'black'});
      $('body').removeClass().addClass('black');
      $('#main').append(view.render());
    }
};
