import Phoebe from 'phoebe';

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

async function observations() {
  const phoebes = await phoebe.data.observations.recent.species.retrieve('US-NY', 'easpho');

  console.debug(phoebes);

  const recentChecklists = await phoebe.data.observations.recent.list('US-NY');

  console.debug(recentChecklists);
}

async function main() {
  await observations();

  await ref();
}

main();
