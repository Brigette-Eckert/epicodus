import { Component } from '@angular/core';
import { Recipe } from './recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Simple Omelet',
      ['Fresh Egg x 1', ' Coarse Rock Salt x 1'],
      ['Superb Dish: Soft & Fluffy Omelet - Recovers 100 HP & Cures KO ', 'Regular Dish: Simple Omelet - Recovers 600 HP', 'Peculiar Dish: Solid Omelet Recovers 400 HP & DEF +25% (3 Turns)', 'Unique Dish: Warm Egg Soup - Recovers 600 HP & STR +25% (3 Turns), Cures Freeze'],
      ['Rean: Average', 'Alisa: Good', 'Elliot: Excellent', 'Laura: Average', 'Machias: Average', 'Emma: Great', 'Jusis: Average', 'Fie: Poor', 'Gaius: Good', 'Crow: Average', 'Millium: Average'],
      'Comes with Recipe Book'),
    new Recipe(
      'Sweet Cookie',
      ['Fresh Egg x 1', 'Honey Syrup x 1', 'Hearty Powder x 1'],
      ['Superb Dish: Royal Sable - Recovers 1000 HP & Cures Poison', 'Regular Dish: Sweet Cookie -  Recovers 700 HP', 'Peculiar Dish: Ooze Cookie - Attack (Set) Area- (S) ', 'Unique Dish: White Cookie - Restores 800 HP & Cures Poison/ Burn'],
      ['Rean: Average', 'Alisa: Excellent', 'Elliot: Average', 'Laura: Poor', 'Machias: Average', 'Emma: Great', 'Jusis: Average', 'Fie: Good', 'Gaius: Poor', 'Crow: Average', 'Millium: Good'],
      'Speak to Margot at the Weathercock Inn on April 24th.'),
    new Recipe(
      'Whole Juice',
      ['Starberry x 1', 'Honey Syrup x 1', 'Clear Gelatin x 1'],
      ['Superb Dish: Golden Juice: Recovers 1200 HP & Cures KO', 'Regular Dish: Whole Juice - Recovers 1000 HP & Cures Faint', 'Peculiar Dish: Yellow Liquid - Restores 100 EP', 'Unique Dish: Wild Mix - Restores 1000 HP  & 50 EP, Cures Faint/ Confuse'],
      ['Rean: Average', 'Alisa: Poor', 'Elliot: Average', 'Laura: Good', 'Machias: Great', 'Emma: Average', 'Jusis: Average', 'Fie: Excellent', 'Gaius: Average', 'Crow: Good', 'Millium: Average'],
      'Speak to Tisel in the Farmhouse located on East Celdic Highway on April 24th or 25th'),
    new Recipe(
      'Tomato Sandwich',
      ['Crisp Onion x 1', 'Acerbic Tomato x 1', 'Assorted Grains x 1', 'Red Beast Flesh x 1'],
      ['Superb Dish: Elegant Sandwich - Recovers 1800 HP & 20 CP', 'Regular Dish: Tomato Sandwich - Recovers 1500 HP & 10 CP', 'Peculiar Dish: Bitter Sandwich - Recovers 100 HP & 40 CP', 'Unique Dish: Victory Sandwich - Recovers 1500 HP & 25 CP, STR +25% (3 Turns)'],
      ['Rean: Average', 'Alisa: Good', 'Elliot: Great', 'Laura: Average', 'Machias: Excellent', 'Emma: Good', 'Jusis: Poor', 'Fie: Average', 'Gaius: Average', 'Crow: Average', 'Millium: Great'],
      'Buy "Manly Munchies - Sandwich" book from Keynes Bookstore on May 29th'),
    new Recipe(
      'Savory Herb Tea',
      ['Fresh Herbs x 1', 'Honey Syrup x 1', 'Healthy Liquor x 1', 'Clear Gelatin x 1'],
      ['Superb Dish: Aromatic Tea - Recovers 2000 HP & Cures Seal/ Mute', 'Regular Dish: Savory Herb Tea - Recovers 1200 HP & Cures Seal', 'Peculiar Dish: Brown Liquid - Recovers 200 EP', 'Unique Dish: Nord Tea - Recovers 1600 HP & SPD + 25% (3 Turns)'],
      ['Rean: Average', 'Alisa: Great', 'Elliot: Average', 'Laura:  Good', 'Machias: Poor', 'Emma: Good', 'Jusis: Great', 'Fie: Average', 'Gaius: Excellent', 'Crow: Poor', 'Millium: Poor'],
      'Speak to Lorna at the Noble District - Residence #2 - 2F on May 29th.'),
    new Recipe(
      'Creamy Chowder',
      ['Fresh Milk x 1', 'Mature Cheese x 1', 'Flaky Potato x 1', 'White Beast Flesh x 1', 'Chitinous Shell x 1'],
      ['Superb Dish: Jewel Potage - Recovers 2400 HP & Cures freeze', 'Regular Dish: Creamy Chowder	 - Recovers 1400 HP & Cures Freeze', 'Peculiar Dish: Frozen Soup - 	Magic Attack - (Set) - Area (S) (Power C) - Freeze (50%)', 'Unique Dish: Deluxe Herb Chowder - Recovers 2000 HP & Cures Poison / Blind / Burn / Freeze'],
      ['Rean: Average', 'Alisa: Average', 'Elliot: Good', 'Laura: Average', 'Machias: Average', 'Emma: Great', 'Jusis: Excellent', 'Fie: Poor', 'Gaius: Average', 'Crow: Average', 'Millium: Good'],
      'Finish "The Bite of Nostalgia" Quest on May 30th.'),
    new Recipe(
      'Berry Tart',
      ['Fresh Egg x 1', 'Starberry x 1', 'Honey Syrup x 1', 'Assorted Grains x 1', 'Clear Gelatin x 1', 'Hearty Powder x 1'],
      ['Superb Dish: Luxury Tart - Recovers 2800 HP & Cures Petrify', 'Regular Dish: Berry Tart - Recovers 1800 HP & Cures Petrify', 'Peculiar Dish: Elementart - Recovers 1200 HP & ATS +25% (5 Turns)', 'Unique Dish: Dish	Soft Chocolate Tart - 	Recovers 2400 HP & Cures Freeze / Petrify'],
      ['Rean: Average', 'Alisa: Great', 'Elliot: Good', 'Laura: Average', 'Machias: Average', 'Emma: Excellent', 'Jusis: Average', 'Fie: Average', 'Gaius: Poor', 'Crow: Poor', 'Millium: Good'],
      'Speak to Hanna in the House in southeast Trista on June 20th'),
    new Recipe(
      'Milk Porridge',
      ['Fresh Milk x 1, Mature Cheese x 1', 'Flaky Potato x 1', 'Assorted Grains x 1', 'White Beast Flesh x 1', 'Chitinous Shell x 1'],
      ['Superb Dish: Nord Porridge - Recovers 2600 HP & DEF/ ADF +25% (5 Turns)', 'Regular Dish: Milk Porridge - Recovers 1800 HP & DEF / ADF +25% (3 Turns)', 'Peculiar Dish: Soggy Porridge - 	Recovers 800 HP & DEF / ADF +50% (3 turns)', 'Unique Dish: Three Cheese Risotto - Recovers 1200 HP & STR / ATS +25% (5 turns)'],
      ['Rean: Average', 'Alisa: Good', 'Elliot: Average', 'Laura: Excellent', 'Machias: Great', 'Emma: Good', 'Jusis: Good', 'Fie: Average', 'Gaius: Great', 'Crow: Good', 'Millium: Average'],
      'Speak to Sheeda at the Worzel Home in the Nord Settlement on June 27th'),
    new Recipe(
      'Crispy Pizza',
      ['Mature Cheese x 1', 'Fresh Herbs x 1', 'Crisp Onion x 1', 'Assorted Grains x 1', 'Red Beast Flesh x 1', 'Heart Powder x 1'],
      ['Superb Dish: Special Pizza - Recovers 2000 HP & 25 CP / Cures stat down', 'Regular Dish: Crispy Pizza - Recovers 1200 HP & 15 CP', 'Peculiar Dish: Mirror Pizza - Restores 50 CP / Magic Reflect (Once)', 'Unique Dish: Teriyaki Chicken Pizza - 	Recovers 2400 HP & 25 CP/ DEF / SPD +25% (3 Turns)'],
      ['Rean: Excellent', 'Alisa: Poor', 'Elliot: Average', 'Laura: Poor', 'Machias: Good', 'Emma: Average', 'Jusis: Good', 'Fie: Average', 'Gaius: Great', 'Crow: Good', 'Millium: Average'],
      'Speak to Marx at the cafeteria section of Zender Gates on June 27th'),
    new Recipe(
      'Roasted Coffee',
      ['Fresh Herbs x 1', 'Assorted Grains x 1', 'Clear Gelatin x 1', 'Globby Fat x 1'],
      ['Superb Dish: Premium Coffee - Recover 3000 HP & Cures Sleep / Nightmare', 'Regular Dish: Roasted Coffee - Recovers 1600 HP & Cures Sleep / Nightmare', 'Peculiar Dish: Black Liquid	 - Restores 250 EP', 'Unique Dish: Double Espresso	- Recovers 2400 HP & Cures Sleep / Nightmare / Faint / Confuse'],
      ['Rean: Average', 'Alisa: Average', 'Elliot: Poor', 'Laura: Average', 'Machias: Excellent', 'Emma: Average', 'Jusis: Good', 'Fie: Good', 'Gaius: Average', 'Crow: Great', 'Millium: Poor'],
      'Buy "Manly Munchies - Coffee" book from Keynes Bookstore on July 18th'),
    new Recipe(
      'Tomato Gratin',
      ['Mature Cheese x 1, Flaky Potato x 1, Acerbic Tomato x 1', 'Globby Fat x 1', 'Hearty Powder x 1'],
      ['Superb Dish: Melted Gratin	- Recovers 2800 HP & 40 CP', 'Regular Dish: Tomato Gratin	- Recovers 2400 HP & 20 CP', 'Peculiar Dish: Dish	Magma Gratin -	Recovers 200 HP & 50 CP', 'Unique Dish: Whole Pumpkin Gratin -	Recovers 2800 HP & 40 CP, ATS +50% (3 turns)'],
      ['Rean: Average', 'Alisa: Good', 'Elliot: Great', 'Laura: Average', 'Machias: Average', 'Emma: Excellent', 'Jusis: Average', 'Fie: Poor', 'Gaius: Average ', 'Crow: Average', 'Millium: Good'],
      '	Speak to Rinoie, the clerk that works at Weston House (Inside Plaza Bifrost, west) on July 24th'),
    new Recipe(
      'Fried Fish',
      ['Fresh Egg x 1', 'Coarse Rock Salt x 1', 'Assorted Grains x 1', 'White Beast Flesh x 2', 'Globby Fat x 1'],
      ['Superb Dish: Elegant Fried Fish	- Recovers 4000 HP & SPD +25% (5 Turns)', 'Regular Dish: Fried Fish -	Recovers 3000 HP & SPD +25% (3 Turns)', 'Peculiar Dish: Roasted Fry-up	- Attack (Set) - Area (S) (Power C) Burn (50 %)', 'Unique Dish: Fish Nuggets -	Recovers 3600 HP & SPD +50% (3 Turns)'],
      ['Rean: Average', 'Alisa: Average', 'Elliot: Average', 'Laura: Great', 'Machias: Poor', 'Emma: Average', 'Jusis: Good', 'Fie: Excellent', 'Gaius: Great', 'Crow: Good', 'Millium: Poor'],
      'Speak to Gamgee at Gamgees Pub (Ost District) on July 25th after watching Machias Event'),
    new Recipe(
      'Custard Pudding',
      ['Fresh Egg x 2', 'Fresh Milk x 1', 'Honey Syrup  x 1', 'Clear Gelatin x 2'],
      ['Superb Dish: Wobbly Pudding	- Recovers 2600 HP & ATS / ADF +25% (5 Turns)', 'Regular Dish: Custard Pudding	- Recovers 1800 HP & ATS / ADF +25% (3 Turns)', 'Peculiar Dish: Egg Custard Pudding	- Recovers 600 HP & Insight (5 Turns)', 'Unique Dish: Dish	Quartet Pudding	Recovers 1400 HP & STR/ DEF / ATS / ADF +25% (4 Turns)'],
      ['Rean: Average', 'Alisa: Great', 'Elliot: Excellent', 'Laura: Average', 'Machias: Good', 'Emma: Good', 'Jusis: Poor', 'Fie: Poor', 'Gaius: Average', 'Crow: Average', 'Millium: Great'],
      'Speak to Ramsay in the Kitchen Area of the  Student Union Building on August 22nd'),
    new Recipe(
      'Refreshing Pasta Soup',
      ['Fresh Herbs x 1', 'Coarse Rock Salt x 1', 'Assorted Grains x 1', 'Healthy Liquor x 1', 'White Beast Flesh x 1', 'Chitinous Shell x 1'],
      ['Superb Dish: Celestial Pasta Soup	- Recovers 3000 HP & 150 EP / Cures Burn', 'Regular Dish: Refreshing Pasta Soup	 - Recovers 2600 HP & 50 EP / Cures Burn', 'Peculiar Dish: Colorless Noodles - Recovers 2400 HP & STR / SPD +25% (3 Turns)', 'Unique Dish: Deluxe Herb Pasta	- Recovers 1800 HP & 100 EP / Cures Abnormal Status'],
      ['Rean: Average', 'Alisa: Average', 'Elliot: Average', 'Laura: Great', 'Machias: Good', 'Emma: Good', 'Jusis: Excellent', 'Fie: Poor', 'Gaius: Poor', 'Crow: Average', 'Millium: Average'],
      'Speak to Seria twice at the Aprikose Inn on August 28th'),
    new Recipe(
      'Hashed Beef Rice',
      ['Crisp Onion x 1', 'Flaky Potato x 1', 'Acerbic Tomato	x 1', 'Assorted Grains x 1', 'Red Beast Flesh x 2', 'Globby Fat x 2'],
      ['Superb Dish: Noble Demi-Glaze Rice -	Recovers 5000 HP & Restores 15 CP / ATS & SPD +25% (3 turns)', 'Regular Dish: Hashed Beef Rice	- Recovers 3000 HP & 10 CP / SPD +25% (3 Turns)', 'Peculiar Dish: Hampering Rice	Attack (Set) - Area (S) (Power B) Delay +20', 'Unique Dish: Artistic Omurice	- Recovers 3600 HP & 20 CP / DEF & ADF +50% (3 Turns)'],
      ['Rean: Average', 'Alisa: Average', 'Elliot: Good', 'Laura: Average', 'Machias: Average', 'Emma: Great', 'Jusis: Poor', 'Fie: Poor', 'Gaius: Average', 'Crow: Good', 'Millium: Excellent'],
      'Examine the notes on the table located at Garrelia Fortress - Barracks (Southwest room) on August 30th.'),
    new Recipe(
      'Stamina Steak',
      ['Fresh Herbs x 1', 'Coarse Rock Salt x 1', 'Red Beast Flesh x 1', 'Chitinous Shell x 1', 'Globby Fat x 1', 'Hearty Powder x 1'],
      ['Superb Dish: Marbled Steak	- Recovers 5600 HP & STR / DEF +25% (5 Turns)', 'Regular Dish: Stamina Steak	- Recovers 3600 HP & STR / DEF +25% (3 Turns)', 'Peculiar Dish: Adamantine Steak -	Recovers 1000 HP / Physical Immunity (O nce)', 'Unique Dish: Juicy Kebab -	Recovers 5200 HP / STR +50% (5 Turns)'],
      ['Rean:  Average', 'Alisa: Average', 'Elliot: Average', 'Laura: Great', 'Machias: Average', 'Emma: Average', 'Jusis: Average', 'Fie: Good', 'Gaius: Excellent', 'Crow: Great', 'Millium: Good'],
      'Buy "Manly Munchies - Steak" book from Keynes Bookstore on July 18th'),
    new Recipe(
      'Tomato Cocktail',
      ['Fresh Herbs x 1', 'Starberry x 1', 'Acerbic Tomato x 1', 'Honey Syrup x 1', 'Healthy Liquor x 2', 'Chitinous Shell x 1', 'Clear Gelatin x 1'],
      ['Superb Dish: Miraculous Cocktail	- Recovers 3200 HP & 45 CP', 'Regular Dish: Tomato Cocktail -	Recovers 2600 HP & 30 CP', 'Peculiar Dish: Red Liquid	- Restores 300 EP & 45 CP', 'Unique Dish: Red Hot Soda	Recovers 2200 HP & 60 CP'],
      ['Rean: Average', 'Alisa: Average', 'Elliot: Average', 'Laura: Average', 'Machias: Poor', 'Emma: Average', 'Jusis: Great', 'Fie: Great', 'Gaius: Average', 'Crow: Excellent', 'Millium: Poor'],
      'Speak to Almina twice at Dining Bar "F" (Roer 2F, south end) on September 25th.'),
    new Recipe(
      'Mixed Gelato',
      ['Fresh Egg x 2', 'Fresh Milk x 2', 'Fresh Herbs x 2', 'Starberry x 2', 'Honey Syrup x 2', 'Clear Gelatin x 2', 'Hearty Powder x2'],
      ['Superb Dish: Heavenly Gelato - Recovers 3200 HP & 150 EP / Cures KO', 'Regular Dish: Mixed Gelato	- Recovers 2000 HP & 100 EP / Cures KO', 'Peculiar Dish: Wonder Gelato	- Recovers 500 HP & 150 EP / Cures Abnormal Status / Stat Down', 'Unique Dish: Salty Gelato	- Recovers 2500 HP, 50 EP & 25 CP / Cures KO'],
      ['Rean: Average', 'Alisa: Good', 'Elliot: Average', 'Laura: Excellent', 'Machias: Average', 'Emma: Good', 'Jusis: Good', 'Fie: Great', 'Gaius: Poor', 'Crow: Average', 'Millium: Good'],
      '	Speak to Casper at the Main Building 2F on October 21st at Noon.'),
    new Recipe(
      'Filling Hotpot',
      ['Coarse Rock Salt x 1', 'Healthy Liquor x 1', 'Red Beast Flesh x 1', 'White Beast Flesh x 1', 'Chitinous Shell x 1', 'Clear Gelatin x 1', 'Globby Fat x 1', 'Hearty Powder x 1'],
      ['Superb Dish: Ultimate Hotpot	- Recovers 12000 HP & STR/ ATS/ SPD +50% (3 Turns)', 'Regular Dish: Filling Hotpot	- Recovers 7000 HP & STR/ ATS/ SPD +25% (3 Turns)', 'Peculiar Dish: Enigmatic Hotpot -	Restores 500 EP & CP +100 or near death', 'Unique Dish: Hurricane Hotpot - Recovers 2500 HP & 150 EP & 45 CP / STR & SPD +50% (5 Turns)'],
      ['Rean: Excellent', 'Alisa: Average', 'Elliot: Average', 'Laura: Poor', 'Machias: Good', 'Emma: Average', 'Jusis: Average', 'Fie: Good', 'Gaius: Good', 'Crow: Average', 'Millium: Poor'],
      'Examine School Notebook at the Libary on October 23rd'),
    new Recipe(
      'Handmade Hamburger',
      ['Fresh Egg x 1', 'Fresh Herbs x 1', 'Crisp Onion x 1', 'Acerbic Tomato x 1', 'Coarse Rock Salt x 1', 'Red Beast Flesh x 2', 'Globby Fat x 1', ' Hearty Powder x 2'],
      ['Superb Dish: Imperial Hamburger	- Recovers 10000 HP & STR / DEF +50% (3 Turns)', 'Regular Dish: Handmade Hamburger	- Recovers 7000 HP & STR / DEF +25% (3 Turns)', 'Peculiar Dish: Dangerous Meatball	- Attack (Set) - Area (M) (Power A) Faint (50%)', 'Unique Dish: Mixed Hamburger Dish -	Recovers 8000 HP & 150 EP & 30 CP / ATS & ADF +50% (5 Turns)'],
      ['Rean: Average', 'Alisa: Excellent', 'Elliot: Good', 'Laura: Average', 'Machias: Poor', 'Emma: Great', 'Jusis: Average', 'Fie: Good', 'Gaius: Good', 'Crow: Average', 'Millium: Poor'],
      'Speak to Nicolas in the EC Room (Main Building 2F) on October 23rd (Evening).')
  ];

  selectedRecipe: Recipe = this.recipes[0];

  //clicked recipe is named recipe in html bc of for recipe in recipes
  toggleDisplay(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
    if(this.selectedRecipe.isActive == true){
       this.selectedRecipe.isActive = false;
    }else{
       this.selectedRecipe.isActive = true;
    }
    console.log(this.selectedRecipe.isActive);
    return this.selectedRecipe.isActive;
  }

  //need to get array from form for results, skill and ingredients
  editRecipe(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
    if(this.selectedRecipe.editMode == true){
      this.selectedRecipe.editMode = false;
    }else{
      this.selectedRecipe.editMode = true;
    }
    console.log(this.selectedRecipe.editMode);
    return this.selectedRecipe.editMode
  }
}
