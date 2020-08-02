import React, { Component } from 'react';
import ShowMoreText from 'react-show-more-text';
import { Container, Button } from 'reactstrap'

class Resume extends Component {

  constructor(props) {
    super(props)
    this.state = {
      expanded: false //begin with box closed
    }
  }

  //function that takes in expanded and makes it the opposite of what it currently is
  showButton = () => {
    this.setState({ expanded: !this.state.expanded })
}
  render() {
    const { expanded } = this.state
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <div className="info">{education.degree}</div>
         <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <div>{work.description}</div>

            <div><i class="fa fa-map-marker" aria-hidden="true"></i> {work.location} |  <a href={work.site}><i class="fa fa-external-link" aria-hidden="true"></i> {work.company}</a></div>
            <p></p>
        </div>
      })

      var work2 = this.props.data.work2.map(function(work2){
        return <div key={work2.company}><h3>{work2.company}</h3>
            <p className="info">{work2.title}<span>&bull;</span> <em className="date">{work2.years}</em></p>
            <div>{work2.description}</div>
            <div><i class="fa fa-map-marker" aria-hidden="true"></i> {work2.location} |  <a href={work.site}><i class="fa fa-external-link" aria-hidden="true"></i> {work2.company}</a></div>
            <p></p>
        </div>
      }

    )
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><em>{skills.name}</em></li>
      })
    }



    return (
      <section id="resume">
      <link href="/assets/vendor/nucleo/css/nucleo.css" rel="stylesheet"></link>
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

    <div className="row work">
       <div className="three columns header-col">
          <h1><span>Other Work</span></h1>

       </div>
       <div className="nine columns main-col">

       <container style={ { } }>
               <button onClick={ this.showButton }>Show More</button>
               {
                 expanded &&
                 <p><div>
                   {work2}
                 </div></p>
               }
             </container>


       </div>

  </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">



				<div className="bars">
				   <ul className="skills">
           <i class="ni ni-air-baloon"></i>
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
