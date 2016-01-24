import $ from 'jquery';
import Backbone from 'backbone';
import chai from 'chai';

let expect = chai.expect;

import {
    MainRouter
}
from '../src/app/router';


describe('Integration tests', function() {
    const router = new MainRouter();
    Backbone.history.start();

    let $app = $('#main');

    describe('Coming Soon Page simple testing', function() {
        it('should render logo', function() {
            expect($app).to.be.ok;
        });
    });

});
