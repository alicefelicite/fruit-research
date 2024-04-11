const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// function search(str, arr) {
//     let results = [];
//     arr.forEach(function (val) {
//         if (val.includes(str)) {
//             results.push(val);
//         }
//     })
//     // TODO
//     // console.log(results);
//     return results;
// }

// input.addEventListener('keyup', function (e) {
//     let results = [];
//     fruit.forEach(function (val) {
//         if (val.includes(input.value)) {
//             results.push(val);
//         }
//         // console.log(results);
//     })
//     console.log(results);
//     return results;
// });

// function search(str) {
//     let results = [];
//     fruit.forEach(function (val) {
//         if (val.includes(input.value)) {
//             results.push(val);
//         }
//     })
//     console.log(results);
//     return results;
// }

function search(str) {
    let results = [];
    for (i = 0; i < fruit.length; i++) {
        if ((fruit[i].toLowerCase()).includes(input.value.toLowerCase())) {
            results.push(fruit[i]);
        }
    }
    showSuggestions(results);
    if (input.value == '') {
        suggestions.innerHTML = '';
    }
}

function showSuggestions(results) {
    suggestions.innerHTML = '';
    results.forEach(function (val) {
        const newLi = document.createElement('li');
        newLi.innerText = val;
        suggestions.appendChild(newLi);
    })
}

function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.innerText;
    }
    search();
    suggestions.innerHTML = '';
}

suggestions.addEventListener('click', useSuggestion);

input.addEventListener('keyup', search);

//THE CODE BELOW IS NOT FIRING FOR SOME REASON -- WORKING ON DEBUGGING
// suggestions.addEventListener('mouseenter', function (e) {
//     if (e.target.tagName === 'LI') {
//         e.target.style.color = 'red';
//         console.log(e);
//     }
// })

// suggestions.addEventListener('mouseleave', function (e) {
//     if (e.target.tagName === 'LI') {
//         e.target.style.color = 'white';
//         console.log(e);
//     }
// })

