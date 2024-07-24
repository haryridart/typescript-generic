"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
describe('Generic', () => {
    class GenericData {
        constructor(value) {
            this.value = value;
        }
        get() {
            return this.value;
        }
        set(value) {
            this.value = value;
        }
    }
    it('should support multiple data types', () => __awaiter(void 0, void 0, void 0, function* () {
        const dataNumber = new GenericData(1);
        // dataNumber.value = 'Hary'; // error
        const dataString = new GenericData('Hary');
        // dataString.value = 1; // error
        expect(dataNumber.value).toBe(1);
        expect(dataString.value).toBe('Hary');
        const upper = dataString.value.toUpperCase();
        expect(upper).toBe('HARY');
    }));
    function create(value) {
        return value;
    }
    it('should support function generic', () => __awaiter(void 0, void 0, void 0, function* () {
        const data = create('Hary');
        expect(data.toUpperCase()).toBe('HARY');
        const data2 = create(1);
        expect(data2).toBe(1);
    }));
});
