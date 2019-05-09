var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function(){
  describe("updateQuality for standard items", function(){

    beforeEach(function(){
      // standard item that should sell within 5 days and starts with a quality of 15
      this.gildedRose = new Shop([ new Item("Standard Item", 5, 15)]);
    })

    it("contains the item added to the shop", function(){
      expect(this.gildedRose.items[0].name).toEqual("Standard Item");
    })

    it("decreases the SellIn value each day", function(){
      var items = this.gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4);
    })

    it("decreases the Quality value each day", function(){
      var items = this.gildedRose.updateQuality();
      expect(items[0].quality).toEqual(14);
    })

    it("Once the sell by date has passed, Quality degrades twice as fast", function(){
      for(var i=0; i<7; i++){
        var items = this.gildedRose.updateQuality();
      }
      expect(items[0].quality).toEqual(6);
    })

    it("the quality is never negative", function(){
      for(var i=0; i<11; i++){
        var items = this.gildedRose.updateQuality();
      }
      expect(items[0].quality).toEqual(0);
    })
  });

  describe("Aged brie quality increases", function(){
    beforeEach(function(){
      // Aged Brie item that increases in quality
      this.gildedRose = new Shop([ new Item("Aged Brie", 20, 30)]);
    })

    it("Increases in Quality the older it gets", function(){
      var items = this.gildedRose.updateQuality();
      expect(items[0].quality).toEqual(31);
    });

    it("Increases in Quality over a number of days", function(){
      for(var i=0; i<10; i++){
        var items = this.gildedRose.updateQuality();
      }
      expect(items[0].quality).toEqual(40);
    })

    it("ensures that the Quality of an item is never more than 50", function(){
      for(var i=0; i<30; i++){
        var items = this.gildedRose.updateQuality();
      }
      expect(items[0].quality).toEqual(50);
    })
  });

  describe("Sulfuras quality and sellIn do not change", function(){
    beforeEach(function(){
      this.gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 20)])
    })

    it("Doesn't change the quality for sulfuras", function(){
      var items = this.gildedRose.updateQuality();
      expect(items[0].quality).toEqual(20);
    })

    it("Doesn't change the sellIn for sulfuras", function(){
      var items = this.gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(10);
    })
  });
});
