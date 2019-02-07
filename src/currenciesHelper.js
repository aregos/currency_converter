export default async function getCurrencies() {
    const query = await fetch('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml', {method : 'GET'});
    return query;
};