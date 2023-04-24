import { Curtains } from "./Curtains";
import { Light } from "./Light";
import { LightSwitchCommand } from "./LightSwitchCommand";
import { OpenCurtainsCommand } from "./OpenCurtainsCommand";
import { Room } from "./Room";
import { LivingRoom } from "./rooms/LivingRoom";

/* 

Command pattern:
-- Seperate classes that invoke operations from classes that perform operations.

Benefits?
-- Turns a request or behavior into a stand-alone object that contains everything about that request
-- Encapsulates all the relevant information needed to perform an action or trigger an event


*/

const main = () => {
    /**
        * The client code can parameterize an invoker with any commands.
    */

    let livingRoom: Room = new LivingRoom();
    let livingRoomLight: Light = new Light();
    let livingRoomCurtains: Curtains = new Curtains();

    livingRoom.setCommand(new LightSwitchCommand(livingRoomLight));
    livingRoom.executeCommand();

    livingRoom.setCommand(new OpenCurtainsCommand(livingRoomCurtains));
    livingRoom.executeCommand();

}

main();