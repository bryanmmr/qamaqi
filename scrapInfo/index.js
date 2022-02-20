const axios = require("axios");
const cheerio = require("cheerio");

const request = require('request'); 

const { conservationStatus } = require('./info/animalInfo');
const { scientificClassification } = require('./info/classification');


axios.get("https://en.wikipedia.org/wiki/List_of_birds_of_Peru").then(function(response) {
   
    const $ = cheerio.load(response.data);

    /* Getting Orders*/
    const order = [];
    const orderLinks = [];
    const listOrder = $("span.mw-headline a").each(function(i, elem) {
        order.push($(elem).text());
        orderLinks.push($(elem).attr("href"));
    });
    /* END Getting Orders*/

    /* Getting Mammals*/
    const animals = [];
    const animalLinks = [];
    //const listAnimals = $("ul li ul li ul li ul li a").each(function(i, elem) {
	const listAnimals = $("div.mw-parser-output div.div-col ul li a").each(function(i, elem) { 
        animals.push($(elem).text());
        animalLinks.push('https://en.wikipedia.org'+$(elem).attr("href"));
    });
	animals.forEach((animal, index) => {
		axios.get(animalLinks[index]).then(function(response){
			const $ = cheerio.load(response.data);
			/**
			 * GET CONSERVATION STATUS OF THE ANIMAL
			 */
			const animalConservationStatus = [];
			const getAnimalConservationStatus = $("table.infobox.biota tbody tr td div a").each(function(i, elem) {
				const dataScrapped = $(elem).text();
				Object.entries(conservationStatus).forEach(status => {
					dataScrapped === status[1].title?animalConservationStatus.push($(elem).text()):null;
				})
			});
			//console.log(animalConservationStatus[0])
			/**
			 * GET SCIENTIFIC CLASSIFICATION OF THE ANIMAL
			 */
			const animalMainInfo = [];
			const tmpAnimalMainInfo = [];
			const getAnimalMainInfo = $("table.infobox.biota tbody tr td").each(function(i, elem) {
				const dataScrapped = $(elem).text();
				tmpAnimalMainInfo.push(dataScrapped);
			});
			scientificClassification.forEach((classification) => {
				const tmpObject = {}
				tmpAnimalMainInfo.forEach((animalData, index) => {
					if(animalData.includes(classification.title))
					{
						tmpObject[classification.title] = tmpAnimalMainInfo[index+1].split(`\n`)[0]
						animalMainInfo.push(tmpObject)
					}
				})
			})
			//console.log(animalMainInfo)

			/**
			 * GET SCIENTIFIC NAME OF THE ANIMAL
			 */
			const animalScientificName = [];
			const getAnimalScientificName = $("table.infobox.biota tbody tr td b span i").each(function(i, elem) {
				const dataScrapped = $(elem).text();
				animalScientificName.push(dataScrapped);
			});

			//console.log(`${animal} : {conservation status: ${animalConservationStatus[0]}, scientific name : ${animalScientificName[0]}}`)

			/**
			 * GET MAP IMAGE (SRC) OF THE ANIMAL
			 */
			const animalMapArea = [];
			const getanimalMapArea = $("table.infobox.biota tbody tr td a.image").each(function(i, elem) {
				const dataScrapped = $(elem).find('img');
				animalMapArea.push({ folder: "Birds", image : `https:${dataScrapped.attr('src')}`, alt : dataScrapped.attr('alt') });
			});
			//console.log(animalMapArea);

			/**
			 * GET PARAGRAPH OF THE ANIMAL
			 */
			const animalMainParagraph = [];
			const getanimalMainParagraph = $("div#mw-content-text.mw-body-content.mw-content-ltr div.mw-parser-output p").each(function(i, elem) {
				const dataScrapped = $(elem).text();
				animalMainParagraph.push(dataScrapped);
			});
			//console.log(animalMainParagraph);

			
			const tmpImage = []
			animalMapArea.forEach((image)=> {
				const clientOptions = {
					uri: `http://127.0.0.1:8080/upload/image`,
					body: JSON.stringify(image),
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					}
				}
				request(clientOptions, (error, response) => {
					const res = JSON.parse(response.body)
					tmpImage.push({
						src: res.secure_url,
						alt: image.alt
					})
					//console.log(error, response)
					const animalInfo = {
						name: animal,
						link: animalLinks[index],
						conservationStatus: animalConservationStatus[0],
						scientificName: animalScientificName[0],
						scientificClassification: animalMainInfo,
						img: tmpImage,
						animalInfo: animalMainParagraph,
						active: true
					};
					console.log(animalInfo)
					const getAnimalOptions = {
						uri: `http://127.0.0.1:8080/api/animal/specific/${animalInfo.name}`,
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					}
					request(getAnimalOptions, (error, response) => {
						const newAnimalData = JSON.parse(response?.body) || {}
						const getMethod = newAnimalData.id?'PATCH':'POST';
						const idToPatch = newAnimalData.id?`/${newAnimalData.id}`:'/';
						const clientOptions = {
							uri: `http://127.0.0.1:8080/api/animal${idToPatch}`,
							body: JSON.stringify(animalInfo),
							method: getMethod,
							headers: {
								'Content-Type': 'application/json'
							}
						}
						request(clientOptions, (error, response) => {
							console.log(error, response)
							return;
						})
						
						return;
					})
					return;
				})
			})
			
			
		}).catch((error) => {
			console.error(error)
		});
	/* POST ELEMENTS TO DATABASE */
		
		/*
		const clientOptions = {
			uri: `http://127.0.0.1:8080/api/animal/`,
			body: JSON.stringify(animalInfo),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}
		request(clientOptions, (error, response) => {
			console.log(error, response)
			return;
		})*/
	});
/* END Getting Mammals*/
});