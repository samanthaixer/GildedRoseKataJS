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
  })
})
