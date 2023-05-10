/**
 * kml-parser.js
 * 
 * The function that parse an XML file into JS object
 */
//

var MILES_PER_DEGREE = 68.97;

function getIndexInfo(data) {
  var trailList = [];

  // console.log("kml:",data)
  var placemarks = data.querySelectorAll("Placemark")
  for (var index in placemarks) {
    var element = placemarks[index]

    if (element.lastElementChild == null)
      continue
    if (element.lastElementChild.tagName == "LineString")
      continue
    
    var infoPoint = {};
    infoPoint["name"] = element.children[0].textContent
    var descriptionRaw = element.children[1].textContent
    const textRegex = /<br>(.*)/is;
    const urlRegex = /<img[^>]+src="([^">]+)"/i;
    infoPoint["description"] = descriptionRaw.match(textRegex)[1].trim().replace(/<br>/g, '');
    infoPoint["imgURL"] = urlRegex.exec(descriptionRaw)[1];

    trailList.push(infoPoint)
  }
  
  return trailList;
}

// future function in case we need to get the Latitude and Longitude of each info point 
function extractLatLong(coordinateString) {
  var coords = coordinateString.split(",")
  for(var index in coords) {
    coords[index] = parseFloat(coords[index].replace(/[^0-9.-]/g,""));
  }
  return coords
}

export default getIndexInfo;