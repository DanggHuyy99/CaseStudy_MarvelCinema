window.onload = (event) => {
    document.getElementById('title').innerHTML = localStorage.getItem('title');
    document.getElementById('description').innerHTML = localStorage.getItem('description');
    document.getElementById('date').innerHTML = localStorage.getItem('date');
    document.getElementById('category').innerHTML = localStorage.getItem('category');
    document.getElementById('video').setAttribute('src', localStorage.getItem('video'));
    document.getElementById('download').setAttribute('download', localStorage.getItem('video'));
 };