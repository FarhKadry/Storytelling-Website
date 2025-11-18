let characters = [
    {
        image: `public/images/character01.jpg`,
        name: `Natasha Romanoff`,
        job: `Agent, avenger, Assasin`,
        tag: `Protagonist`
    },
    {
        image: `public/images/character03.jpg`,
        name: `Isaiah Ross`,
        job: `Black Widow's lawyer`,
        tag: `Supporting`
    },
    {
        image: `public/images/character02.jpg`,
        name: `Mr. lucas`,
        job: `Businessman`,
        tag: `Antagonist`
    },
];
for (let i=0; i < characters.length; i++){
    document.getElementById("character_array").innerHTML+=`
    <div class="character_card flex_column reveal_text">
                <img class="img_stroke" src="${characters[i].image}" alt="">
                <h3>${characters[i].name}</h3>
                <h5>${characters[i].job}</h5>
                <div class="tag"><h5>${characters[i].tag}</h5></div>
            </div>
    `
};
let audio = document.getElementById("audio");
let audio_btn = document.getElementById("audioToggle");

audio_btn.addEventListener("click", () => {
  const action = audio.paused ? "play" : "pause";
  audio[action]();
   document.body.classList.toggle("switch_sound");
});
