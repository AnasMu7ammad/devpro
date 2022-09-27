let response = [];

console.log("response");

const random = async() => {
    response = await fetch(
        "https://api.unsplash.com/photos/random/?count=6&client_id=kLSsSs5qDWNnFveJW_QZcHamVzfrBKFtiRaB_oYhmQ8"
    );
    data = await response.json();
    console.log(data);
    return data;
};

random();

const fetchTextUsingWholeCard = async() => {
    let name = document.querySelector("#search").value;
    let count = document.querySelector("#count").value;
    console.log({ name: name, count: count });
    let newRandom = await fetch(
        `https://api.unsplash.com/photos/?query=${name}&count=${count}&client_id=9kXWhW-MbYaFvCwNfj3ZkI7_sQef-0Y7bddaBFrfL9U`
    );

    let data = [];
    newRandom.length ? (data = await newRandom.json()) : (data = await random());

    console.log(data);

    const myPhotos = data.map((photo) => {
        const element = `<div class="singlePhoto"><img src="" alt="" /></div>`;
        console.log(element);
        return `<div class="singlePhoto">
        <div class="myPhoto">
        <img src="${photo.urls.small_s3}" alt="${photo.id}" />
        </div>
        <div class="username">

        <span style='color:${photo.color}'>${photo.user.name}</span>
        <div class="statistics">

        <div class="likesAndDownloads"><img width="20" src="../images/favorite_FILL0_wght400_GRAD0_opsz48.svg" /><span>${photo.likes}</span></div>

         <div class="likesAndDownloads"><img width="20" src="../images/file_download_FILL0_wght400_GRAD0_opsz48.svg" /><span>${photo.downloads}</span></div>

         </div>

        </div>
        </div>`;
    });

    console.log(myPhotos);
    document.querySelector(".fullImageView").innerHTML = myPhotos.join("");

    // return data;
};
fetchTextUsingWholeCard();

const form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("first");
    fetchTextUsingWholeCard();
});

function submit(e) {}