import { NewsfeedScreen } from "./NewsfeedScreen";
import { UserPrivatePublisher } from "./UserPrivatePublisher";
import { UserProfileScreen } from "./UserProfileScreen";

const main = () => {
    let userPrivate: UserPrivatePublisher = new UserPrivatePublisher();

    let newsfeedScreen: NewsfeedScreen = new NewsfeedScreen();
    userPrivate.subscribe(newsfeedScreen);

    let userProfileScreen: UserProfileScreen = new UserProfileScreen();
    userPrivate.subscribe(userProfileScreen);

    userPrivate.onChangeName("The Green Force");
    userPrivate.onChangeName("NewU");
}

main();