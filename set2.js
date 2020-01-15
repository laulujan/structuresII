function Set() {
  this.data = [];
}

Set.prototype.add = function (value) {
  if (this.data.indexOf(value) < 0) {
    this.data.push(value);
    return true;
  }
  return false;
}

Set.prototype.delete = function (value) {

  var pos = this.data.indexOf(value);

  if (pos > -1) {
    this.data.splice(pos, 1);
    return true;
  }

  return false;
};

Set.prototype.has = function (value) {

  if (this.data.indexOf(value) > -1) {
    return true;
  }

  return false;
};

Set.prototype.size = function () {

  return this.data.length;
};
