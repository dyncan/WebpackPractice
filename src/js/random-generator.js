/*jshint esversion: 6 */
export class RandomGenerator {
    static randomInteger() {
        return Math.ceil(Math.random() * 100);
    }

    static randomRange(mix, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}