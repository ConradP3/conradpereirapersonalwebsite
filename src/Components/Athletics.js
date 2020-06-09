import React, { Component } from 'react';
import video from "/Users/conradpereira/Desktop/conradpereirapersonalwebsite/src/videos/highjump.MOV";

class Athletics extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="Athletics">

         <div className="row section-Ath">



            <aside className="four columns footer-widgets">

              <h1>Athletics</h1>
              <div classname='jump-video'>
                <video src={video} width="600" height="300" controls="controls" muted='true' autoplay="true" type='video/mov' />
              </div>


               <div className="widget widget_tweets">
                  <h4 className="widget-title"></h4>
                  <ul id="twitter">
                     <li>
                        <span>

                        <a href="#"></a>
                        </span>
                        <b><a href="#"></a></b>
                     </li>
                     <li>
                        <span>

                        <a href="#"></a>
                        </span>
                        <b><a href="#"></a></b>
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Athletics;
