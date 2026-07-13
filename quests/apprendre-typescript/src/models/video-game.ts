export class VideoGame {

    _label: string | undefined;

    constructor(label:string) {
        this.label = label;
    }

    get label(): string {
    return this._label || "Unknown";
    }

    set label(value: string) {
        if (value.length < 3) {
            throw new Error("Label must be at least 3 characters long.");
        }
        this._label = value;
    }
}