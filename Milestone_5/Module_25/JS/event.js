console.log('This is seperate JS file');


//2. second option: onclick function
//!important: we will use it 
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//3. third option: 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//3. Option three another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

//4. fourth option
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option four another 
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});

//4. final option
//!important: we wil use it in sometimes
document.getElementById('make-goldenrod').addEventListener('click', function makeGoldenrod() {
    document.body.style.backgroundColor = 'goldenrod';
});