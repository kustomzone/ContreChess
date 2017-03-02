var Marionette          = require('backbone.marionette'),
    Model               = require('../models/user'),
    tmpl                = require('../templates/signup.chbs'),
    _self;

module.exports = Marionette.View.extend({
  initialize: function () {
    if (!this.model) {
      console.log('no model passed in to the signup view');
      this.model = new Model();
    }

    _self = this;
  },
  template: function () {
    return tmpl(_self.model.toJSON());
  }
});