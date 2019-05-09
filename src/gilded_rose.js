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

      if (name != 'Aged Brie' && name != 'Backstage passes to a TAFKAL80ETC concert') {
        if(name != 'Conjured'){
          this.decreaseQuality(i, 1);
        } else {
          this.decreaseQuality(i, 2);
        }

      } else {
        if (this.items[i].quality < 50) {
          this.increaseQuality(i, 1);
          if (name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.increaseQuality(i, 1);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.increaseQuality(i, 1);
              }
            }
          }
        }
      }

      if (name != 'Sulfuras, Hand of Ragnaros') {
        this.decreaseSellInDays(i);
      }

      if (this.items[i].sellIn < 0) {
        if (name != 'Aged Brie') {
          if (name != 'Backstage passes to a TAFKAL80ETC concert') {
              this.decreaseQuality(i, 1);
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.increaseQuality(i, 1);
          }
        }
      }
    }

    return this.items;
  }

  decreaseQuality(i, amount) {
    if(this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].quality > 0){
      this.items[i].quality = this.items[i].quality - amount;
    }
  }

  increaseQuality(i, amount) {
    this.items[i].quality = this.items[i].quality + amount;
  }

  decreaseSellInDays(i) {
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }

  isMaxQuality(i) {
    const MAX_QUALITY = 50;
    if(this.items[i].quality < this.MAX_QUALITY) return false;
    return true;
  }
}
module.exports = {
  Item,
  Shop
}
