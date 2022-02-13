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

module.exports = {
    conservationStatus,
}