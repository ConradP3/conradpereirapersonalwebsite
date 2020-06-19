import React, { Component } from 'react';

class Athletics extends Component {
  render() {

    if(this.props.data){
      var image = 'images/highjump.mov';
      var description = 'High Jump 2019';
    }

    var myVids = [
        "https://www.youtube.com/embed/pwFonu50YTw",

    ];
    return (
      <section id="Athletics">

         <div className="row section-Ath">



            <aside className="four columns footer-widgets">

              <h1>Athletics</h1>
              <div classname='jump-video'>
                <iframe width="966" height="543" src={myVids} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


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
