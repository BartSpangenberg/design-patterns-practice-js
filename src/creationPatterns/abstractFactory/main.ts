import { RestaurantFactory, JapaneseRestaurantFactory, ItalianRestaurantFactory } from "./RestaurantFactory";

class AbstractFactoryApp {
    restaurantFactory: RestaurantFactory;

    constructor({ restaurantType }: { restaurantType: string }) {
        if (restaurantType == "japanese") {
            this.restaurantFactory = new JapaneseRestaurantFactory();
        } else {
            this.restaurantFactory = new ItalianRestaurantFactory();
        }
    }
}

let abstractFactoryApp: AbstractFactoryApp = new AbstractFactoryApp({ restaurantType: "italian" });
abstractFactoryApp.restaurantFactory.prepareMeal();