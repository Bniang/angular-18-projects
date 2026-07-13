"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoGame = void 0;
class VideoGame {
    _label;
    constructor(label) {
        this.label = label;
    }
    get label() {
        return this._label;
    }
    set label(value) {
        if (value.length < 3) {
            throw new Error("Label must be at least 3 characters long.");
        }
        this._label = value;
    }
}
exports.VideoGame = VideoGame;
//# sourceMappingURL=video-game.js.map