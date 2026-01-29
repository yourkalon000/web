let count = 0;
const totalAds = 4;

const adsLinks = [
    "https://zmastar.blogspot.com/",
    "https://judicialimpatientgenerator.com/zcvm0rch?key=93b158ea491b4f11e0adbacd15934c67",
    "https://bedsidemeasuring.com/rze4wd8aa?key=74d74ecf1cacbe96436ceb718716741c",
    "https://deemphotousage.com/fz3ifw9n?key=255cb9b54aebe1dca0f89408b47e3fcf"
];


const popup = document.getElementById("popup");
const btn = document.getElementById("btn");
const bar = document.getElementById("bar");
const notice = document.getElementById("notice");

window.onload = () => {
    popup.style.display = "flex";
};

btn.onclick = () => {
    if(count < totalAds){
        window.open(adsLinks[count], "_blank");
        count++;

        bar.style.width = (count / totalAds * 100) + "%";
        notice.style.display = "block";
        notice.textContent = "একটি Ads সম্পূর্ণ হয়েছে";

        if(count < totalAds){
            btn.textContent = "Ads " + (count + 1) + " দেখুন";
        }else{
            btn.textContent = "ভিডিও দেখুন";
            btn.style.background = "#4caf50";
            notice.textContent = "সব Ads সম্পূর্ণ হয়েছে";

            btn.onclick = () => {
                window.location.href = videoLink; // instant same tab
            };
        }
    }
};
