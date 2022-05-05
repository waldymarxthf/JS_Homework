//задание 1
function Cat(name) {
    this.name = name;
    this.feed = function() {
    };
}

var barsik = new Cat('Барсик');
console.log(barsik.name);
barsik = null;

//задание 2
function Cat(name) {
    this.name = name;
    this.foodAmount = 50;

    var self = this;
    function formatFoodAmount() {
        return self.foodAmount + 'гp.';
      }
    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    }
}
var barsik = new Cat('Барсик');
barsik.feed();
