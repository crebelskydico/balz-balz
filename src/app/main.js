import $ from 'jquery';
import Backbone from 'backbone';
import {MainRouter} from './router';

$(() => {
    new MainRouter();
    Backbone.history.start();
});
