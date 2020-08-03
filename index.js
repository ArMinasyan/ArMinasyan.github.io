let screen_index = 0,
    cert_index = 0;
let screenshots = [
    'Email Verification Tool_1.png',
    'Email Verification Tool_2.png',
    'Email Verification Tool_3.png'
];

let certificates = [
    'cert_1.jpg',
    'cert_2.jpg',
    'cert_3.jpg',
    'cert_4.jpg',
    'cert_5.jpg',
    'cert_6.jpg',
    'cert_7.jpg',
    'cert_8.jpg'
]




document.getElementById('next_screen').addEventListener('click', function (e) {
    if (screen_index == 0) screen_index = screenshots.length - 1;
    else screen_index -= 1;
    document.getElementById('screenshots').src = './screenshots/' + screenshots[screen_index];
    document.getElementById('screen_name').innerHTML = screenshots[screen_index].split('_')[0];

})

document.getElementById('prev_screen').addEventListener('click', function (e) {
    document.getElementById('screenshots').src = './screenshots/' + screenshots[screen_index];
    document.getElementById('screen_name').innerHTML = screenshots[screen_index].split('_')[0];
    if (screen_index == screenshots.length - 1) screen_index = 0;
    else screen_index += 1;
})


document.getElementById('next_cert').addEventListener('click', function (e) {
    if (cert_index == 0) cert_index = certificates.length - 1;
    else cert_index -= 1;
    document.getElementById('certificates').src = './certificates/' + certificates[cert_index];

})

document.getElementById('prev_cert').addEventListener('click', function (e) {
    document.getElementById('certificates').src = './certificates/' + certificates[cert_index];
    if (cert_index == certificates.length - 1) cert_index = 0;
    else cert_index += 1;
})



document.getElementById('personal_b').addEventListener('click', (e) => {
    document.querySelectorAll('.item').forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById('personal').style.display = 'block';
})

document.getElementById('education_b').addEventListener('click', (e) => {
    document.querySelectorAll('.item').forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById('education').style.display = 'block';
})

document.getElementById('skill_b').addEventListener('click', (e) => {
    document.querySelectorAll('.item').forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById('skills').style.display = 'block';
})

document.getElementById('screen_b').addEventListener('click', (e) => {
    document.querySelectorAll('.item').forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById('show_screen').style.display = 'block';
    document.getElementById('Show').style.opacity = 0.9;
    document.getElementById('screenshots').src = './screenshots/' + screenshots[0];
    document.getElementById('screen_name').innerHTML = screenshots[0].split('_')[0];

})

document.getElementById('cert_b').addEventListener('click', (e) => {
    document.getElementById('Show').style.opacity = 0.9;
    document.querySelectorAll('.item').forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById('certificates').src = './certificates/' + certificates[0];
    document.getElementById('show_cert').style.display = 'block';
})