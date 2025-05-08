import Phoebe from 'phoebe-ebird';

const phoebe = new Phoebe({
  apiKey: process.env['EBIRD_API_KEY'], // This is the default and can be omitted
});

async function observations() {
  const phoebes = await phoebe.data.observations.recent.species.retrieve('easpho', {
    regionCode: 'US-NY',
  });

  console.debug(phoebes);

  const recentChecklists = await phoebe.data.observations.recent.list('US-NY');

  console.debug(recentChecklists);
}

observations();
