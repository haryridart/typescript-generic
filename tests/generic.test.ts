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

    class SimpleGeneric<T>{
        private value?: T;
        setValue(value: T): void{
            this.value = value;
        }
        getValue(): T | undefined{
            return this.value;
        }
    }
    it('should create simple generic', async () => {
        const simple = new SimpleGeneric<string>();
        simple.setValue('Hary');
        // simple.setValue(1);
        // simple.setValue(true);
        
        // produce error because generic value become any
        // expect(simple.getValue()).toUpperCase().toBe('HARY');
        expect(simple.getValue()!.toUpperCase()).toBe('HARY');
    });
});