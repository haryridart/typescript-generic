describe('Generic', () => {
    class GenericData<T>{
        value: T;
        constructor(value: T){
            this.value = value;
        }
        get(): T{
            return this.value;
        }
        set(value: T): void{
            this.value = value;
        }
    }
    it('should support multiple data types', async () => {
        const dataNumber = new GenericData<number>(1);
        // dataNumber.value = 'Hary'; // error
        const dataString = new GenericData<string>('Hary');
        // dataString.value = 1; // error
        expect(dataNumber.value).toBe(1);
        expect(dataString.value).toBe('Hary');
        const upper = dataString.value.toUpperCase();
        expect(upper).toBe('HARY');
    });
    function create<T>(value: T): T{
        return value;
    }
    it('should support function generic', async () => {
        const data = create<string>('Hary');
        expect(data.toUpperCase()).toBe('HARY');

        const data2 = create<number>(1);
        expect(data2).toBe(1);
    });
    class Entry<K, V>{
        constructor(public key: K, public value: V){}
    }
    class Triple<K, V, T>{
        constructor(public first:K, public second:V, public third:T){}
    }
    it('should support multiple generic types', async () => {
      const entry = new Entry<number, string>(1, 'Hary');
      expect(entry.key).toBe(1);
      expect(entry.value).toBe('Hary');
      
      const triple = new Triple<number, string, boolean>(1, 'Hary', true);
      expect(triple.first).toBe(1);
      expect(triple.second).toBe('Hary');
      expect(triple.third).toBe(true);
    });

    it('should support optional generic type', async () => {
        const entry = new Entry(1, 'Hary');
        expect(entry.key).toBe(1);
        expect(entry.value).toBe('Hary');
    });

    class SimpleGeneric<T = string>{
        private value?: T;
        setValue(value: T): void{
            this.value = value;
        }
        getValue(): T | undefined{
            return this.value;
        }
    }
    it('should create simple generic', async () => {
        const simple = new SimpleGeneric();
        simple.setValue('Hary');
        // simple.setValue(1);
        // simple.setValue(true);
        
        // produce error because generic value become any
        // expect(simple.getValue()).toUpperCase().toBe('HARY');
        expect(simple.getValue()!.toUpperCase()).toBe('HARY');
    });
    interface Employee{
        name: string;
        age: number;
    }
    interface Manager extends Employee{
        totalEmployee:number;
    }
    interface VicePresident extends Manager{
        totalManager: number;
    }
    class EmployeeData<T extends Employee>{
        constructor(public employee: T){
            this.employee = employee;
        }
    }
    it('should support constraint', async () => {
        const data1 = new EmployeeData<Employee>({
            name: 'Hary', age: 30
        });
        const data2 = new EmployeeData<Manager>({
            name: 'Hary', age: 30, totalEmployee: 100
        });
        const data3 = new EmployeeData<VicePresident>({
            name: 'Hary', age: 30, totalEmployee: 100, totalManager: 10
        });
        // produce error because generic only accept Employee and it's inherited interface
        // const data4 = new EmployeeData<string>('Hary');
    });
    it('should support array', async () => {
        const array = new Array<string>();
        array.push('Hary');
        array.push('Hary');
        array.push('Hary');
        expect(array).toEqual(['Hary', 'Hary', 'Hary']);
        expect(array[0]).toBe('Hary');
    });
    it('should support Set', async () => {
        const set = new Set<string>();
        set.add('Hary');
        set.add('Ridart');
        expect(set).toEqual(new Set(['Hary', 'Ridart']));
        expect(set.size).toBe(2);
        expect(set.has('Hary')).toBe(true);
    });
    it('should support map', async () => {
        const map = new Map<string, number>();
        map.set('Hary', 100);
        map.set('Ridart', 99);
        expect(map.get('Hary')).toBe(100);
        expect(map.get('Ridart')).toBe(99);
    });
    async function fetchData(value: string): Promise<string>{
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                if(value === 'Hary'){
                    resolve('Hello ' + value);
                }else{
                    reject('Not found');
                }
            }, 1000);
        });
    }
    it('should support promise', async () => {
        const result = await fetchData('Hary');
        expect(result.toUpperCase()).toBe('HELLO HARY');
        expect(result).toBe('Hello Hary');
        try{
            await fetchData('Ridart');
        }catch(err){
            expect(err).toBe('Not found');
        }
    });
});