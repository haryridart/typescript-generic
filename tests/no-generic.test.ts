describe('no-generic', () => {
    class Data{
        value:any;
        constructor(value:any){
            this.value = value
        }
    }
    it('should accept all values', async () => {
        const data: Data = new Data('Hary');
        // data.value = 1;

        console.info(data.value.toUpperCase());
    });
})