class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      var name = this.items[i].name;

      if(name != 'Sulfuras, Hand of Ragnaros'){

        this.decreaseSellInDays(i);

        var sellIn = this.items[i].sellIn
        switch(name){
          case 'Aged Brie':
            this.increaseQuality(i, 1);
            if(this.isPassedSellByDate(sellIn)) this.increaseQuality(i, 1);
            break;
          case 'Backstage passes to a TAFKAL80ETC concert':
            this.increaseQuality(i, 1);
            if (sellIn < 10) {
              this.increaseQuality(i, 1);
            }
            if (sellIn < 5) {
              this.increaseQuality(i, 1);
            }
            if (this.isPassedSellByDate(sellIn)) {
              this.decreaseQuality(i, this.items[i].quality);
            }
            break;
          case 'Conjured':
            this.decreaseQuality(i, 2);
            if(this.isPassedSellByDate(sellIn)) this.decreaseQuality(i, 2);
            break;
          default:
            this.decreaseQuality(i, 1);
            if(this.isPassedSellByDate(sellIn)) this.decreaseQuality(i, 1);
            break;
        }
      }
    }
    return this.items;
  }

  isPassedSellByDate(sellIn){
    if (sellIn < 0) return true ;
    else return false;
  }

  decreaseQuality(i, amount) {
    if(this.items[i].quality > 0){
      this.items[i].quality -= amount;
    }
  }

  increaseQuality(i, amount) {
    // look at how to take out magic numbers - understand JavaScript scope with constants
    if(this.items[i].quality < 50) this.items[i].quality += amount;
  }

  decreaseSellInDays(i) {
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }

}
module.exports = {
  Item,
  Shop
}
