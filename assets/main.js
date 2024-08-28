



const url = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PL6_ZJvY0V4f20qyxLx8aI3N1_wBlMIq3T&part=snippet&maxResults=20';

const content = null || document.getElementById("content")



const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '344bce1ce0msh1eb9fbe5ec7cd83p1eec3cjsn7ae4a24245f0',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json()
    return data
}

(async ()=> {
try{
 const videos = await fetchData(url)
let view =`
${videos.items.map(video => `<div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.descriptionp}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>`).slice(1,6).join('')}
`;
    content.innerHTML = view;
}catch (err){ 
    console.log(err);
}
})();