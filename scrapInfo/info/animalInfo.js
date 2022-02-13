const conservationStatus = {
    EX : {title : 'Extinct', desc : 'No known living individuals'},
    EW : {title : 'Extinct in the Wild', desc : 'Known only to survive in captivity, or as a naturalized population outside its historic range'},
    CR : {title : 'Critically Endangered', desc : 'Extremely high risk of extinction in the wild'},
    EN : {title : 'Endangered', desc : 'Higher risk of extinction in the wild'},
    VU : {title : 'Vulnerable', desc : 'High risk of extinction in the wild'},
    NT : {title : 'Near Threatened', desc : 'Likely to become endangered in the near future'},
    CD : {title : 'Conservation Dependent', desc : 'Low risk; is conserved to prevent being near threatened, certain events may lead it to being a higher risk level'},
    LC : {title : 'Least Concern', desc : 'Lowest risk; does not qualify for a higher risk category. Widespread and abundant taxa are included in this category.'},
    DO : {title : 'Domesticated', desc : 'Domestication is a sustained multi-generational relationship in which one group of organisms assumes a significant degree of influence over the reproduction and care of another group to secure a more predictable supply of resources from that second group'},
    DD : {title : 'Data Deficient', desc : 'Not enough data to make an assessment of its risk of extinction'},
    NE : {title : 'Not Evaluated', desc : 'Has not yet been evaluated against the criteria.'},
}

const phylum = [
    {
        name: 'Annelida',
        meaning: 'Little ring'
    },
    {
        name: 'Agmata',
        meaning: 'Fragmented'
    },
    {
        name: 'Archaeocyatha',
        meaning: 'Animals with collars'
    },
    {
        name: 'Arthropoda',
        meaning: 'Jointed foot'
    },
    {
        name: 'Brachiopoda',
        meaning: 'Arm foot'
    },
    {
        name: 'Bryozoa',
        meaning: 'Moss animals'
    },
    {
        name: 'Chaetognatha',
        meaning: 'Longhair jaw'
    },
    {
        name: 'Chordata',
        meaning: 'With a cord'
    },
    {
        name: 'Cnidaria',
        meaning: 'Stinging nettle'
    },
    {
        name: 'Ctenophora',
        meaning: 'Comb bearer'
    },
    {
        name: 'Cycliophora',
        meaning: 'Wheel carrying'
    },
    {
        name: 'Echinodermata',
        meaning: 'Spiny skin'
    },
    {
        name: 'Entoprocta',
        meaning: 'Inside anus'
    },
    {
        name: 'Gastrotricha',
        meaning: 'Hairy stomach'
    },
    {
        name: 'Gnathostomulida',
        meaning: 'Jaw orifice'
    },
    {
        name: 'Hemichordata',
        meaning: 'Half cord'
    },
    {
        name: 'Ivesheadiomorpha',
        meaning: 'No'
    },
    {
        name: 'Kinorhyncha',
        meaning: 'Motion snout'
    },
    {
        name: 'Loricifera',
        meaning: 'Corset bearer'
    },
    {
        name: 'Micrognathozoa',
        meaning: 'Tiny jaw animals'
    },
    {
        name: 'Medusoid',
        meaning: 'Jellyfish-like'
    },
    {
        name: 'Mollusca',
        meaning: 'Soft'
    },
    {
        name: 'Nematoda',
        meaning: 'Thread like'
    },
    {
        name: 'Nematomorpha',
        meaning: 'Thread form'
    },
    {
        name: 'Nemertea',
        meaning: 'A sea nymph'
    },
    {
        name: 'Onychophora',
        meaning: 'Claw bearer'
    },
    {
        name: 'Petalonamae',
        meaning: 'Shaped like leaves'
    },
    {
        name: 'Phoronida',
        meaning: 'Zeus\'s mistress'
    },
    {
        name: 'Placozoa',
        meaning: 'Plate animals'
    },
    {
        name: 'Platyhelminthes',
        meaning: 'Flat worm'
    },
    {
        name: 'Porifera',
        meaning: 'Pore bearer'
    },
    {
        name: 'Priapulida',
        meaning: 'Little Priapus'
    },
    {
        name: 'Proarticulata',
        meaning: 'Before articulates'
    },
    {
        name: 'Rhombozoa',
        meaning: 'Lozenge animal'
    },
    {
        name: 'Rotifera',
        meaning: 'Wheel bearer'
    },
    {
        name: 'Saccorhytida',
        meaning: 'Saccus : "pocket" and "wrinkle"'
    },
    {
        name: 'Tardigrada',
        meaning: 'Slow step'
    },
    {
        name: 'Trilobozoa',
        meaning: 'Three-lobed animal'
    },
    {
        name: 'Vetulicolia',
        meaning: 'Ancient dweller'
    },
    {
        name: 'Xenacoelomorpha',
        meaning: 'Strange hollow form'
    },
];

module.exports = {
    conservationStatus,
    phylum,
}