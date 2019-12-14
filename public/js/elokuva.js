function haeElokuva(){

   haeData();

}


async function haeData(){

  var leffan_nimi = document.getElementById("elokuva").value;
  var leffan_vuosi = document.getElementById("vuosi").value;

  const hakurimpsu = 'http://www.omdbapi.com/?t=' + leffan_nimi + '&y=' + leffan_vuosi + '&apikey=a95f3723';

  console.log(hakurimpsu);

  const vastaus = await fetch(hakurimpsu);
  const data = await vastaus.json();
  document.getElementById("elokuvan_nimi").innerHTML = data.Title;

  var poster = document.getElementById("elokuvan_juliste");
  poster.src = data.Poster;

}
