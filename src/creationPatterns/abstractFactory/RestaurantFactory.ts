import { Food, ItalianFood, JapaneseFood } from "./FoodProduct";
import { Kitchen, JapaneseKitchen, ItalianKitchen } from "./KitchenProduct";

// Abstract factory
export class RestaurantFactory {
    buildKitchen(): Kitchen {
        // TODO override in subclass
        return new Kitchen([]);
    }

    buyFood(): Food {
        // TODO override in subclass
        return new Food([]);
    }

    prepareMeal() {
        let kitchen: Kitchen = this.buildKitchen();
        let food: Food = this.buyFood();
        console.log(`The dish was created with ${kitchen.tools}, it contains ${food.ingredients}. Enjoy!`)

    }
}

// Concrete factories
export class JapaneseRestaurantFactory extends RestaurantFactory {
    buildKitchen(): Kitchen {
        return new JapaneseKitchen(["Big pans", "Sharp knives"]);
    }

    buyFood(): Food {
        return new JapaneseFood(["Fresh fish", "Green vegetables", "Noodles"]);
    }
}

export class ItalianRestaurantFactory extends RestaurantFactory {
    buildKitchen(): Kitchen {
        return new ItalianKitchen(["Pizza oven", "High chef hats"]);
    }

    buyFood(): Food {
        return new ItalianFood(["Tomatoes", "Olives"]);
    }
}