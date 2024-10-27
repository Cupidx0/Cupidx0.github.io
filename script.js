document.addEventListener("DOMContentLoaded", function() {
    const skillElements = document.querySelector('.skills .skill');
    
    skillElements.forEach(skill => {
        const percentage = skill.textContent;
        skill.style.width = percentage;

        skill.addEventListener('touchstart',() =>{
            skill.classList.add('hovered');

        });
        skill.addEventListener('touchend',()=>{
            skill.classList.remove('hovered');
        });

        skill.addEventListener('mouseenter', () => {
            skill.classList.add('hovered');
        });
            
        skill.addEventListener('mouseleave', () => {
            skill.classList.remove('hovered');
        });
    });
});