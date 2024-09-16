$.mixin('Smile_ElasticsuiteCatalog/js/attribute-filter', {
    loadAdditionalItems: function (parent, callback) {
        $.get(this.ajaxLoadUrl, {}, function (data) {
            this.items = data.map(this.addItemId.bind(parent));
            this.hasMoreItems  = false;
            
            if (callback) {
                return callback();
            }
        }.bind(this));
    },
});