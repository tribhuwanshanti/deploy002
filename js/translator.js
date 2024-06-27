// console.log("Translate By Safal");

// const eng_selector = document.getElementById('eng_selector');
// const nep_selector = document.getElementById('nep_selector');
// const languageSelector = document.querySelector('select');

// const nav = {
//     home: document.getElementById('homeNav'),
//     about:{
//         about: document.getElementById('aboutNav'),
//         overview: {
//             main: document.getElementById('aboutOverviewMain'),
//             sub: document.getElementById('aboutOverviewSub'),
//         },
//         adminstration: {
//             main: document.getElementById('aboutAdminstrationMain'),
//             sub: document.getElementById('aboutAdminstrationSub'),
//         },
//         staffs: {
//             main: document.getElementById('aboutAdminstrationMain'),
//             sub: document.getElementById('aboutAdminstrationSub'),  
//         },
//     }
// }


// let localLanguage, globalLanguage;

// const translation = {

//     english: {
//         eng_select: "English",
//         nep_select: "Nepali",
//         home: "Home",
//         about: "About",
//         overview: {
//             main: "Overview",
//             sub: "About The School",
//         },
//         adminstration: {
//             main: "Adminstration", 
//             sub: "About The School",
//         },
//         staffs: {
//             main: "Staffs",
//             sub: "Non teching Staffs",  
//         },

//     },
//     nepali: {
//         eng_select: "अंग्रेजी",
//         nep_select: "नेपाली",
//         home: "गृह",
//         about: "बारेमा",
//         overview: {
//             main: "अवलोकन",
//             sub: "विद्यालयको बारेमा",
//         },
//         adminstration: {
//             main: "प्रशासन", 
//             sub: "प्रशासन को सन्देश",
//         },
//         staffs: {
//             main: "कर्मचारीहरू",
//             sub: "गैर-शैक्षणिक कर्मचारीहरू",  
//         },
//     }
// }

// globalLanguage = localStorage.getItem('globalLanguage');
// // console.log(`${globalLanguage} is the language stored`);


// const setLanguage = (language) => {
//     if (language == 'nepali') {

//         localLanguage = 'nepali';
//         eng_selector.textContent = translation.nepali.eng_select;
//         nep_selector.textContent = translation.nepali.nep_select;
//         nav.home.textContent = translation.nepali.home;
//         nav.about.about.textContent = translation.nepali.about;
//             localStorage.setItem('globalLanguage', localLanguage)
//     }
//     else if (language == 'english') {

//         localLanguage = 'english';
//         eng_selector.textContent = translation.english.eng_select;
//         nep_selector.textContent = translation.english.nep_select;
//             localStorage.setItem('globalLanguage', localLanguage)
//     }
// }

// if (globalLanguage) {
//     setLanguage(globalLanguage);
// }

// languageSelector.addEventListener('change', (event) => {

//     event.preventDefault;
//     // console.log("Language Changed");
//     setLanguage(event.target.value);
//     console.log(event.target.value);


// })

// if (globalLanguage == 'Nepali') {
//     nep_selector.setAttribute("selected", "selected");
//     setLanguage(nepali);
// }
// else if (globalLanguage == 'English') {
//     eng_selector.setAttribute("selected", "selected");
//     setLanguage(english);
// }
