// The entries in this file get shown on https://gw2efficiency.com/community/contributors
// Feel free to add yourself after updating one of the translations! :)

const current = [
  { name: 'Ainillia.5794', language: 'French' },
  { name: 'EDCDragon.8356', language: 'French' },
  { name: 'Pilou.3498', language: 'French' },
  { name: 'jonesarte.2980', language: 'Spanish' },
  { name: 'MrSmiley.9273', language: 'German' },
  { name: 'Regitus.7189', language: 'German' },
  { name: 'Llenara.8712', language: 'French' },
]

module.exports = [
  'Ainillia.5794',
  'Creativewild.6319',
  'EDCDragon.8356',
  'hers.7185',
  'Holox.3528',
  'Index.7169',
  'jjunior.8935',
  'jonesarte.2980',
  'MrSmiley.9273',
  'Natrox.5462',
  'Novitsh.4695',
  'octopussy.3854',
  'Offering of Pie.3057',
  'PReimers.1720',
  'razzy.8650',
  'Regitus.7189',
  'Saha.7218',
  'Superritchman.3159',
  'Talas Shounika.7185',
  'TheMrMilchmann.3491',
  'Unshatter.8210',
  'Wiella.8567',
  'Xerneas.4267',
  'xPhantomNL.7230',
  'Gwenju.9316',
  ...current.map((x) => x.name),
]
  .sort((a, b) => a.localeCompare(b))
  .filter((x, i, self) => self.indexOf(x) === i)
