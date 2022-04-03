"use strict";

export class CustomConsole {

    prettyPrint(message : string) {
        console.log("<pretty>%s</pretty>", message)
    }

    public print(message : string) {
        console.log(message)
    }
}