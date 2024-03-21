const url =
    "https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLpcbzk7Z9-ywZBeFYOrDvn_VM76Tvk2yt&part=snippet&maxResults=8";

const content = null || document.getElementById("content");

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "dc11881de1msh65e18f63e3d7f8ep1176e8jsnbf3ed15883e9",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

const fetchData = async (urlApi) => {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
};

(async () => {
    try {
        const videos = await fetchData(url);
        console.log(videos);
        let view = `   
        ${videos.items.map(
            (video) => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
            >
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span
                        aria-hidden="true"
                        class="absolute inset-0"
                    ></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `
        ).join("")}
`;

        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();
