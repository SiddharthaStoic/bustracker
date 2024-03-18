const busStops1 = [
    [77.5791835, 12.9291457], //Jayanagar Metro
    [77.5788992, 12.9208324], //RV Road
    [77.5728374, 12.9155253], //Banashankari
    [77.5727141, 12.9074469], //JP Nagar
    [77.5689804, 12.8961052], //Yelachenahalli
    [77.5615794, 12.8890004], //KK Cross
    [77.5523391, 12.884931], //Doddakallasandra
    [77.5442639, 12.8780016], //Vajarahalli
    [77.5376824, 12.8714846], //Talaghattapura
    [77.5292822, 12.8618716], //Silk Institute
    [77.5267079, 12.8575224], //NICE Road
    [77.521153, 12.8490285], //Agara Cross
    [77.5171869, 12.8424463], //Kuppareddy Kere
    [77.5113192, 12.8427272], //JIT
  ];
  
  const busStops2 = [
    [77.5689804, 12.8961052], //Yelachenahalli
    [77.5615794, 12.8890004], //KK Cross
    [77.5523391, 12.884931], //Doddakallasandra
    [77.5442639, 12.8780016], //Vajarahalli
    [77.5376824, 12.8714846], //Talaghattapura
    [77.5292822, 12.8618716], //Silk Institute
    [77.5267079, 12.8575224], //NICE Road
    [77.521153, 12.8490285], //Agara Cross
    [77.5171869, 12.8424463], //Kuppareddy Kere
    [77.5113192, 12.8427272], //JIT
  ];
  
  const busStops3 = [
    [77.6572454, 12.8580257], //Electronic City Metro Station
    [77.6575504, 12.8581761], //Electronic City Toll
    [77.6540668, 12.8584923], //NICE Road Toll
    [77.6256577, 12.8668893], //ISR Indraprastha
    [77.5875065, 12.8518836], //T John College
    [77.5392966, 12.8513793], //Purva Highlands
    [77.5267079, 12.8575224], //NICE Road
    [77.521153, 12.8490285], //Agara Cross
    [77.5171869, 12.8424463], //Kuppareddy Kere
    [77.5113192, 12.8427272], //JIT
  ];
  
  const busStops4 = [
    [77.4752276, 12.907899], //Kengeri Metro Station
    [77.4703398, 12.9032639], //NICE Road Toll
    [77.4921545, 12.876668], //NICE Road Cloverleaf Junction
    [77.5267079, 12.8575224], //NICE Road
    [77.521153, 12.8490285], //Agara Cross
    [77.5171869, 12.8424463], //Kuppareddy Kere
    [77.5113192, 12.8427272], //JIT
  ];
  
  const busStops5 = [
    [77.5119801, 12.9336793], //Jnanabharathi Metro Station
    [77.5119801, 12.9336793], //Gopalan Arcade Mall
    [77.4936976, 12.9267181], //Nimishamba Temple
    [77.5103273, 12.9198164], //Raghavendra Swamy Temple
    [77.5103277, 12.9093853], //SGS Dreamland
    [77.5086505, 12.9003285], //Gopalan Florenza
    [77.5122778, 12.8905193], //Ganakal Cross
    [77.5124225, 12.8721924], //Gangamma Temple
    [77.5176869, 12.8680299], //Prestige Primrose Hills
    [77.5216019, 12.8565672], //The Magic Faraway Tree
    [77.5267079, 12.8575224], //NICE Road
    [77.521153, 12.8490285], //Agara Cross
    [77.5171869, 12.8424463], //Kuppareddy Kere
    [77.5113192, 12.8427272], //JIT
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2dnZ2dnMSIsImEiOiJja3J6YnNlZWEwYmswMnVydzAzcXNkYXNtIn0.y7GDZiA1GmIx5_oJtYPydg';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [77.5689804, 12.8961052],
    zoom: 11.5,
  });
  
  var marker1 = new mapboxgl.Marker() // First bus
    .setLngLat(busStops1[0])
    .addTo(map);
  
  var marker2 = new mapboxgl.Marker() // Second bus
    .setLngLat(busStops2[0])
    .addTo(map);
  
  var marker3 = new mapboxgl.Marker() // Third bus
    .setLngLat(busStops3[0])
    .addTo(map);
  
  var marker4 = new mapboxgl.Marker() // Fourth bus
    .setLngLat(busStops4[0])
    .addTo(map);
  
  var marker5 = new mapboxgl.Marker() // Fourth bus
    .setLngLat(busStops5[0])
    .addTo(map);
  
  let counter1 = 0; // Counter for the first bus
  let counter2 = 0; // Counter for the second bus
  let counter3 = 0; // Counter for the third bus
  let counter4 = 0; // Counter for the fourth bus
  let counter5 = 0; // Counter for the fifth bus
  
  // Move function for the first bus
  function moveBus1() {
    setTimeout(() => {
      if (counter1 >= busStops1.length) return;
      marker1.setLngLat(busStops1[counter1]);
      counter1++;
      moveBus1();
    }, 1000);
  }
  
  // Move function for the second bus
  function moveBus2() {
    setTimeout(() => {
      if (counter2 >= busStops2.length) return;
      marker2.setLngLat(busStops2[counter2]);
      counter2++;
      moveBus2();
    }, 1000);
  }
  
  // Move function for the third bus
  function moveBus3() {
    setTimeout(() => {
      if (counter3 >= busStops3.length) return;
      marker3.setLngLat(busStops3[counter3]);
      counter3++;
      moveBus3();
    }, 1000);
  }
  
  // Move function for the fourth bus
  function moveBus4() {
    setTimeout(() => {
      if (counter4 >= busStops4.length) return;
      marker4.setLngLat(busStops4[counter4]);
      counter4++;
      moveBus4();
    }, 1000);
  }
  
  // Move function for the fifth bus
  function moveBus5() {
    setTimeout(() => {
      if (counter5 >= busStops5.length) return;
      marker5.setLngLat(busStops5[counter5]);
      counter5++;
      moveBus5();
    }, 1000);
  }
  
  // Start moving all buses
  moveBus1();
  moveBus2();
  moveBus3();
  moveBus4();
  moveBus5();
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }