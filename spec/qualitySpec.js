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

    it("The Quality of an item is never negative", function(){
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

  describe("Backstage passes", function(){
    beforeEach(function(){
      this.gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)])
    })

    it("Increases by 1 when there are more than 10 days to sell in", function(){
      var items = this.gildedRose.updateQuality();
      expect(items[0].quality).toEqual(11);
    })

    it("Increases by 2 when there are 10 days or less to sell in", function(){
      for(var i=0; i<6; i++){
        var items = this.gildedRose.updateQuality();
      }
      expect(items[0].quality).toEqual(17);
    })

    it("Increases by 3 where there are 5 days or less", function(){
      for(var i=0; i<11; i++){
        var items = this.gildedRose.updateQuality();
      }
      expect(items[0].sellIn).toEqual(4);
      expect(items[0].quality).toEqual(28);
    })

    it("Sets the quality to zero after sellIn reaches 0", function(){
      for(var i=0; i<16; i++){
        var items = this.gildedRose.updateQuality();
      }
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    })

    it("The Quality of an item is never negative", function(){
      for(var i=0; i<17; i++){
        var items = this.gildedRose.updateQuality();
      }
      expect(items[0].sellIn).toEqual(-2);
      expect(items[0].quality).toEqual(0);
    })
  });
});
