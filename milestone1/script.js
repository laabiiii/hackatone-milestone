var ToggleButton = document.getElementById('toggle-skills');
var Skills = document.getElementById('skills');
ToggleButton.addEventListener('click', function () {
    if (Skills.style.display === 'none') {
        Skills.style.display = 'block';
    }
    else {
        Skills.style.display = 'none';
    }
});