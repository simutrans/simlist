// ListingProvider which does not persist changes

ListingProvider = function (init_callback) {
    init_callback();
};

ListingProvider.prototype.data = {};

ListingProvider.prototype.findAll = function(callback) {
    if (typeof callback === 'function') { callback(this.data); }
};

ListingProvider.prototype.findById = function(id, callback) {
    var result = null;
    if (this.data.hasOwnProperty(id)) {
        result = this.data[id];
    }
    if (typeof callback === 'function') { callback(result); }
};

ListingProvider.prototype.findByNameId = function(name, id, callback) {
    var result = null;
    if (this.data.hasOwnProperty(name)) {
        result = this.data[name];
    }
    if (result.empty  &&  this.data.hasOwnProperty(id)) {
        result = this.data[id];
    }
    if (typeof callback === 'function') { callback(result); }
};

ListingProvider.prototype.save = function(listing, callback) {
    //console.log(listing);
    this.data[listing.sid] = listing;
    if (typeof callback === 'function') { callback(listing); }
};

ListingProvider.prototype.removeById = function(id, callback) {
    var removed = null;
    if (this.data.hasOwnProperty(sid)) {
        removed = this.data[sid];
        delete this.data[sid];
    }
    if (typeof callback === 'function') { callback(removed); }
};

ListingProvider.prototype.findBySid = function(sid, callback) {
    var result = null;
    if (this.data.hasOwnProperty(sid)) {
        result = this.data[sid];
    }
    if (typeof callback === 'function') { callback(result); }
};

exports.ListingProvider = ListingProvider;
