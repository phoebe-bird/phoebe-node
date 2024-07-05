import Phoebe from 'phoebe';

const phoebe = new Phoebe({
  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted
});

async function main() {
  const infoRetrieveResponse = await phoebe.ref.hotspot.info.retrieve('L99381');

  console.log(infoRetrieveResponse.countryCode);
}

main();
