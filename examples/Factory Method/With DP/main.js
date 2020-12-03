 class PizzaStore {
     CreatePizza(item) {}

     OrderPizza(type) {
         let pizza = this.CreatePizza(type);
         console.log("--- Making a " + pizza.Name + " ---");
         pizza.Prepare();
         pizza.Bake();
         pizza.Cut();
         pizza.Box();
         return pizza;
     }
 }

 ///////////////////////////////////// creators /////////////////////////////////////
 class NYPizzaStore extends PizzaStore {
     CreatePizza(item) {
         let pizza = null;

         switch (item) {
             case "cheese":
                 pizza = new NYStyleCheesePizza();
                 break;
             case "veggie":
                 pizza = new NYStyleVeggiePizza();
                 break;
             case "clam":
                 pizza = new NYStyleClamPizza();
                 break;
             case "pepperoni":
                 pizza = new NYStylePepperoniPizza();
                 break;
         }

         return pizza;
     }
 }


 class ChicagoPizzaStore extends PizzaStore {
     CreatePizza(item) {
         let pizza = null;

         switch (item) {
             case "cheese":
                 pizza = new ChicagoStyleCheesePizza();
                 break;
             case "veggie":
                 pizza = new ChicagoStyleVeggiePizza();
                 break;
             case "clam":
                 pizza = new ChicagoStyleClamPizza();
                 break;
             case "pepperoni":
                 pizza = new ChicagoStylePepperoniPizza();
                 break;
         }

         return pizza;
     }
 }

 // Simple Factory

 class DependentPizzaStore {
     CreatePizza(style, type) {
         let pizza = null;

         if (style == "NY") {
             switch (type) {
                 case "cheese":
                     pizza = new NYStyleCheesePizza();
                     break;
                 case "veggie":
                     pizza = new NYStyleVeggiePizza();
                     break;
                 case "clam":
                     pizza = new NYStyleClamPizza();
                     break;
                 case "pepperoni":
                     pizza = new NYStylePepperoniPizza();
                     break;
             }
         } else if (style == "Chicago") {
             switch (type) {
                 case "cheese":
                     pizza = new ChicagoStyleCheesePizza();
                     break;
                 case "veggie":
                     pizza = new ChicagoStyleVeggiePizza();
                     break;
                 case "clam":
                     pizza = new ChicagoStyleClamPizza();
                     break;
                 case "pepperoni":
                     pizza = new ChicagoStylePepperoniPizza();
                     break;
             }
         } else {
             console.log("Error: invalid store");
             return null;
         }
         pizza.Prepare();
         pizza.Bake();
         pizza.Cut();
         pizza.Box();

         return pizza;
     }
 }

 ///////////////////////////////////// product /////////////////////////////////////
 class Pizza {
     constructor() {
         this.Toppings = new Array();
         this.Name = '';
         this.Dough = '';
         this.Sauce = '';
     }

     Prepare() {
         console.log("Preparing " + this.Name);
         console.log("Tossing dough...");
         console.log("Adding sauce...");
         console.log("Adding toppings: ");
         this.Toppings.forEach(element => {
             console.log("   " + element);
         });
     }

     Bake() {
         console.log("Bake for 25 minutes at 350");
     }

     Cut() {
         console.log("Cutting the pizza into diagonal slices");
     }

     Box() {
         console.log("Place pizza in official PizzaStore box");
     }
 }

 class ChicagoStyleVeggiePizza extends Pizza {
     constructor() {
        super();
         this.Name = "Chicago Deep Dish Veggie Pizza";
         this.Dough = "Extra Thick Crust Dough";
         this.Sauce = "Plum Tomato Sauce";

         this.Toppings.push("Shredded Mozzarella Cheese");
         this.Toppings.push("Black Olives");
         this.Toppings.push("Spinach");
         this.Toppings.push("Eggplant");
     }

     Cut() {
         console.log("Cutting the pizza into square slices");
     }
 }

 class ChicagoStylePepperoniPizza extends Pizza {
     constructor() {
        super();
         this.Name = "Chicago Style Pepperoni Pizza";
         this.Dough = "Extra Thick Crust Dough";
         this.Sauce = "Plum Tomato Sauce";

         this.Toppings.push("Shredded Mozzarella Cheese");
         this.Toppings.push("Black Olives");
         this.Toppings.push("Spinach");
         this.Toppings.push("Eggplant");
         this.Toppings.push("Sliced Pepperoni");
     }

     Cut() {
         console.log("Cutting the pizza into square slices");
     }
 }

 class ChicagoStyleClamPizza extends Pizza {
     constructor() {
        super();
         this.Name = "Chicago Style Clam Pizza";
         this.Dough = "Extra Thick Crust Dough";
         this.Sauce = "Plum Tomato Sauce";

         this.Toppings.push("Shredded Mozzarella Cheese");
         this.Toppings.push("Frozen Clams from Chesapeake Bay");
     }

     Cut() {
         console.log("Cutting the pizza into square slices");
     }
 }

 class ChicagoStyleCheesePizza extends Pizza {
     constructor() {
        super();
         this.Name = "Chicago Style Deep Dish Cheese Pizza";
         this.Dough = "Extra Thick Crust Dough";
         this.Sauce = "Plum Tomato Sauce";

         this.Toppings.push("Shredded Mozzarella Cheese");
     }

     Cut() {
         console.log("Cutting the pizza into square slices");
     }
 }

 ///////////////////////////////////////////////////////////////////////

 class NYStyleVeggiePizza extends Pizza {

     constructor() {
        super();
         this.Name = "NY Style Veggie Pizza";
         this.Dough = "Thin Crust Dough";
         this.Sauce = "Marinara Sauce";

         this.Toppings.push("Grated Reggiano Cheese");
         this.Toppings.push("Garlic");
         this.Toppings.push("Onion");
         this.Toppings.push("Mushrooms");
         this.Toppings.push("Red Pepper");
     }
 }

 class NYStylePepperoniPizza extends Pizza {

     constructor() {
        super();
         this.Name = "NY Style Pepperoni Pizza";
         this.Dough = "Thin Crust Dough";
         this.Sauce = "Marinara Sauce";

         this.Toppings.push("Grated Reggiano Cheese");
         this.Toppings.push("Sliced Pepperoni");
         this.Toppings.push("Garlic");
         this.Toppings.push("Onion");
         this.Toppings.push("Mushrooms");
         this.Toppings.push("Red Pepper");
     }
 }

 class NYStyleClamPizza extends Pizza {

     constructor() {
        super();
         this.Name = "NY Style Clam Pizza";
         this.Dough = "Thin Crust Dough";
         this.Sauce = "Marinara Sauce";

         this.Toppings.push("Grated Reggiano Cheese");
         this.Toppings.push("Fresh Clams from Long Island Sound");
     }
 }

 class NYStyleCheesePizza extends Pizza {
     constructor() {
         super();
         this.Name = "NY Style Sauce and Cheese Pizza";
         this.Dough = "Thin Crust Dough";
         this.Sauce = "Marinara Sauce";

         this.Toppings.push("Grated Reggiano Cheese");
     }
 }



 //////////////////////////////// Client /////////////////////////////////////////////////////////////
 function run() {
     let nyStore = new NYPizzaStore();
     let chicagoStore = new ChicagoPizzaStore();

     let pizza = nyStore.OrderPizza("cheese");
     console.log("Ethan ordered a " + pizza.Name + "\n");

     pizza = chicagoStore.OrderPizza("cheese");
     console.log("Joel ordered a " + pizza.Name + "\n");

     pizza = nyStore.OrderPizza("clam");
     console.log("Ethan ordered a " + pizza.Name + "\n");

     pizza = chicagoStore.OrderPizza("clam");
     console.log("Joel ordered a " + pizza.Name + "\n");

     pizza = nyStore.OrderPizza("pepperoni");
     console.log("Ethan ordered a " + pizza.Name + "\n");

     pizza = chicagoStore.OrderPizza("pepperoni");
     console.log("Joel ordered a " + pizza.Name + "\n");

     pizza = nyStore.OrderPizza("veggie");
     console.log("Ethan ordered a " + pizza.Name + "\n");

     pizza = chicagoStore.OrderPizza("veggie");
     console.log("Joel ordered a " + pizza.Name + "\n");
 }