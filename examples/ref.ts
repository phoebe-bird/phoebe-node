import Phoebe from 'phoebe-ebird';

const phoebe = new Phoebe({
  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted
});

async function ref() {
  const hotspot = await phoebe.ref.hotspot.info.retrieve('L99381');

  console.debug(hotspot);

  const speciesGroups = await phoebe.ref.taxonomy.speciesGroups.list('ebird');

  console.debug(speciesGroups);

  const locales = await phoebe.ref.taxonomy.locales.list();

  console.debug(locales);
}

ref();
