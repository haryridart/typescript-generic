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
    class Entry {
        constructor(key, value) {
            this.key = key;
            this.value = value;
        }
    }
    class Triple {
        constructor(first, second, third) {
            this.first = first;
            this.second = second;
            this.third = third;
        }
    }
    it('should support multiple generic types', () => __awaiter(void 0, void 0, void 0, function* () {
        const entry = new Entry(1, 'Hary');
        expect(entry.key).toBe(1);
        expect(entry.value).toBe('Hary');
        const triple = new Triple(1, 'Hary', true);
        expect(triple.first).toBe(1);
        expect(triple.second).toBe('Hary');
        expect(triple.third).toBe(true);
    }));
    it('should support optional generic type', () => __awaiter(void 0, void 0, void 0, function* () {
        const entry = new Entry(1, 'Hary');
        expect(entry.key).toBe(1);
        expect(entry.value).toBe('Hary');
    }));
    class SimpleGeneric {
        setValue(value) {
            this.value = value;
        }
        getValue() {
            return this.value;
        }
    }
    it('should create simple generic', () => __awaiter(void 0, void 0, void 0, function* () {
        const simple = new SimpleGeneric();
        simple.setValue('Hary');
        // simple.setValue(1);
        // simple.setValue(true);
        // produce error because generic value become any
        // expect(simple.getValue()).toUpperCase().toBe('HARY');
        expect(simple.getValue().toUpperCase()).toBe('HARY');
    }));
    class EmployeeData {
        constructor(employee) {
            this.employee = employee;
            this.employee = employee;
        }
    }
    it('should support constraint', () => __awaiter(void 0, void 0, void 0, function* () {
        const data1 = new EmployeeData({
            name: 'Hary', age: 30
        });
        const data2 = new EmployeeData({
            name: 'Hary', age: 30, totalEmployee: 100
        });
        const data3 = new EmployeeData({
            name: 'Hary', age: 30, totalEmployee: 100, totalManager: 10
        });
        // produce error because generic only accept Employee and it's inherited interface
        // const data4 = new EmployeeData<string>('Hary');
    }));
    it('should support array', () => __awaiter(void 0, void 0, void 0, function* () {
        const array = new Array();
        array.push('Hary');
        array.push('Hary');
        array.push('Hary');
        expect(array).toEqual(['Hary', 'Hary', 'Hary']);
        expect(array[0]).toBe('Hary');
    }));
    it('should support Set', () => __awaiter(void 0, void 0, void 0, function* () {
        const set = new Set();
        set.add('Hary');
        set.add('Ridart');
        expect(set).toEqual(new Set(['Hary', 'Ridart']));
        expect(set.size).toBe(2);
        expect(set.has('Hary')).toBe(true);
    }));
    it('should support map', () => __awaiter(void 0, void 0, void 0, function* () {
        const map = new Map();
        map.set('Hary', 100);
        map.set('Ridart', 99);
        expect(map.get('Hary')).toBe(100);
        expect(map.get('Ridart')).toBe(99);
    }));
    function fetchData(value) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (value === 'Hary') {
                        resolve('Hello ' + value);
                    }
                    else {
                        reject('Not found');
                    }
                }, 1000);
            });
        });
    }
    it('should support promise', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield fetchData('Hary');
        expect(result.toUpperCase()).toBe('HELLO HARY');
        expect(result).toBe('Hello Hary');
        try {
            yield fetchData('Ridart');
        }
        catch (err) {
            expect(err).toBe('Not found');
        }
    }));
});
