document.addEventListener("DOMContentLoaded",function(){
    const skills ={
        html:40,
        css:30,
        js:10,
        python:50
    };
    function updateSkills(){
        for(const skill in skills){
            const skillElement = document.getElementById(skill);
            if(skillElement){
                skillElement.textContent = skills[skill] + '%';
                skillElement.style.width = skills[skill] + '%';
                skillElement.dataset.skillValue = skills[skill];
            }
        }
    }

    function animateSkills() {
        for(const skill in skills){
            const skillStyle = document.getElementById(skill);
            if(skillStyle){
                skillStyle.style.width = '0'; 
                skillStyle.addEventListener('mouseenter', function() {
                    const skillValue = this.dataset.skillValue;
                    this.style.width = skillValue + '%';
                });
                skillStyle.addEventListener('mouseleave', function() {
                    this.style.width = '0';
                });
            }
        }
    }

    updateSkills();
    animateSkills();
});