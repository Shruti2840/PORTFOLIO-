// About.js
import React from 'react';

const Skills = () => {
  return (
    
    <section class="skills section" id="skills">
    <h2 class="section-title">Skills</h2>
    
    <div class="skills__container bd-grid">          
    <div>
    <h2 class="skills__subtitle">Profesional Skills</h2>
    <p class="skills__text"></p>
    <div class="skills__data">
    <div class="skills__names">
    <i class='bx bxl-html5 skills__icon'></i>
    <span class="skills__name">HTML5</span>
    </div>
    <div class="skills_bar skills_html">
    
    </div>
    <div>
    <span class="skills__percentage">90%</span>
    </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-css3 skills__icon'></i>
            <span class="skills__name">CSS3</span>
        </div>
        <div class="skills_bar skills_css">
            
        </div>
        <div>
            <span class="skills__percentage">80%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
    <i class='bx bxl-javascript skills__icon' ></i>
    <span class="skills__name">JAVASCRIPT</span>
    </div>
    <div class="skills_bar skills_js">
    </div>
    <div>
    <span class="skills__percentage">60%</span>
    </div>
    </div>
    
    </div>
                        
    
    </div>
    </section>
  );
}

export default Skills;
