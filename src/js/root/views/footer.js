var Marionette          = require('backbone.marionette'),
    Model               = require('../models/display'),
    tmpl                = require('../templates/footer.chbs'),
    _self;

module.exports = Marionette.View.extend({
  initialize: function () {
    if (!this.model) {
      console.log('no model passed in to the footer view');
      this.model = new Model();
    }

    _self = this;
  },
  template: function () {
    return tmpl(_self.model.toJSON());
  }
});
