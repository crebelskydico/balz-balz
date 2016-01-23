import $ from 'jquery';
import _ from 'lodash';
var {
    View
} = Backbone;

export class AppView extends View {

    constructor(options) {
        super(options);

        this.setElement($('#main'), true);

        this.template = _.template($('#' + options.theme + '-template').html());
        this.events = {};

    }

    render() {
        this.$el.html(this.template());
    }
};
