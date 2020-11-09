
const getPackages = (consumption) => {
    if(isNaN(consumption) || consumption < 0) consumption = 0;
    consumption = Math.round(consumption);
    const bundles = [
        {
            name: 'basic electricity tariff',
            base: 60,
            upperLimit: 0,
            chargeInCents: 22
        },
        {
            name: 'Packaged tariff',
            base: 800,
            upperLimit: 4000,
            chargeInCents: 30
        }
    ];

    const packages = [];
    bundles.forEach(bundle => {
        packages.push({
            name: bundle.name,
            cost: getCost(bundle.base, bundle.upperLimit, bundle.chargeInCents, consumption)
        });
    });

    return packages.sort((a,b) => a.cost - b.cost);;
}


const getCost = (base, upperLimit, chargeInCents, consumption) => {
    return base + (consumption > upperLimit ? ((consumption - upperLimit)/100) * chargeInCents : 0)
}

module.exports = getPackages;
