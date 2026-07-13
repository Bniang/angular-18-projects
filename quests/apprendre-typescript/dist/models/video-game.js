export class VideoGame {
    _label;
    constructor(label) {
        this.label = label;
    }
    get label() {
        return this._label || "Unknown";
    }
    set label(value) {
        if (value.length < 3) {
            throw new Error("Label must be at least 3 characters long.");
        }
        this._label = value;
    }
}
//# sourceMappingURL=video-game.js.map