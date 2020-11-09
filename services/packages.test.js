const getPackages = require('./packages');

describe('packages in ascending order of cost', ()=>{
    it('should return 60 for basic tariff and 800 for packaged tariff when consumption is 0',()=>{
        expect(getPackages(0)).toMatchObject([
            {
                name: 'basic electricity tariff',
                cost: 60
            },
            {
                name: 'Packaged tariff',
                cost: 800
            }
        ]);
    });

    it('should return 60 for basic tariff and 800 for packaged tariff if consumption is negative',()=>{
        expect(getPackages(-1)).toMatchObject([
            {
                name: 'basic electricity tariff',
                cost: 60
            },
            {
                name: 'Packaged tariff',
                cost: 800
            }
        ]);
    });

    it('should return 830 for basic tariff and 800 for packaged tariff if consumption is 3500',()=>{
        expect(getPackages(3500)).toMatchObject([
            {
                name: 'Packaged tariff',
                cost: 800
            },
            {
                name: 'basic electricity tariff',
                cost: 830
            }
        ]);
    });

    it('should return 1050 for basic tariff and 950 for packaged tariff if consumption is 4500',()=>{
        expect(getPackages(4500)).toMatchObject([
            {
                name: 'Packaged tariff',
                cost: 950
            },
            {
                name: 'basic electricity tariff',
                cost: 1050
            }
        ]);
    });


    it('should return 1380 for basic tariff and 1400 for packaged tariff if consumption is 6000',()=>{
        expect(getPackages(6000)).toMatchObject([
            {
                name: 'basic electricity tariff',
                cost: 1380
            },
            {
                name: 'Packaged tariff',
                cost: 1400
            }
        ]);
    });

})