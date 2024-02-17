import React from 'react'
import "./Audio.css"
import { FaRegComment } from "react-icons/fa6";
import Fiorello from '../../../Components/Fiorello/Fiorello';
// import videoFlow from "../../assets/flow.mp4";


const Audio = () => {
  return (
    <div className="all-link-page">
<Fiorello/>

<div className='link-page'>
        <div className="fiorello-left">
          <div className="fiorello-left-top">
          {/* <video width="500" height="290" controls>
          <source src={videoFlow} type="video/mp4" />
          <source src={videoFlow} type="video/ogg" />
        </video> */}
          </div>
          <div className="fiorello-left-second">

          </div>
          <div className="fiorello-left-third">
            <p style={{"fontFamily":"Playfair Display"}}>“Let VanderSalm’s-Flipse be your first choice for flowers</p>
            <p style={{"fontFamily":"Playfair Display"}}>solutions for all your floral needs.”</p>
          </div>
          <div className="fiorello-left-forth">
            <p style={{"fontFamily":"Lora,serif"}}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
            <p style={{"fontFamily":"Lora,serif"}}>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin</p>
            <p style={{"fontFamily":"Lora,serif"}}>condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam</p>
            <p style={{"fontFamily":"Lora,serif"}}>massa nisl quis neque. Suspendisse in orci enim. Sed ut perspiciatis unde omnis iste natus. Proin gravida nibh vel</p>
            <p style={{"fontFamily":"Lora,serif"}}>velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
          </div>
          <div className="photos-first">
            <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/blog-img-1-650x650.jpg" alt="" />
            <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/blog-img-3-650x650.jpg" alt="" />
            <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/blog-img-2-650x650.jpg" alt="" />
          </div>
          <div className="photos-second">
            <img className='cl-1' src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/blog-img-4-1300x650.jpg" alt="" />
            <img className='cl-2' src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/Untitled-7-650x650.jpg" alt="" />
          </div>
          <div className="fiorello-left-fifth">
            <p style={{"fontFamily":"Playfair Display"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, malesuada non leo a, vehicula ornare</p>
            <p style={{"fontFamily":"Playfair Display"}}>nibh. Integer eget bibendum nulla, nec hendrerit magna. Nunc vitae ipsum interdum, varius magna ut, sollicitudin</p>
            <p style={{"fontFamily":"Playfair Display"}}>nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum</p>
            <p style={{"fontFamily":"Playfair Display"}}>aliquam condimentum ligula sit amet imperdiet. Sed facilisis ipsum nulla, at auctor mauris imperdiet at. Nam</p>
            <p style={{"fontFamily":"Playfair Display"}}>placerat vulputate libero at fermentum. Nullam ut lacus ac elit luctus tempor ut nec turpis. Quisque fermentum</p>
            <p style={{"fontFamily":"Playfair Display"}}>feugiat neque, ut ultrices nisi. Praesent eu euismod mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p style={{"fontFamily":"Playfair Display"}}>Duis gravida euismod efficitur. Aenean ut purus quis arcu suscipit viverra non ornare nunc. Donec bibendum at</p>
          </div>
          <div className="fiorello-left-ttt">
            <p>03.05.2018</p>
            <p>BY SHIRLEY BURKE</p>
            <p><FaRegComment style={{"fontSize":"18px"}}/> 2</p>
          </div>
          <hr />
          <div className="all-comment">
          <div className="comments">
            <p style={{"fontSize":"30px", "fontFamily":"sans-serif"}}>Comments</p>
          </div>  
          <div className='photo-comment'>
            <div className="first-photo-comment">
              <div className="foto">
                <img src="	https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/blog-subscriber-img.png" alt="" />
              </div>
              <div className="all-textss">
              <div className="textss-1">
                <span>PATRICIA HOPKINS </span>
                <span style={{"color":"gray"}}>03.05.2018</span>
              </div>
              <div className="textss-2">
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in</p>
              </div>
              <div className="textss-3">
                <span style={{"color":"red"}}>REPLY</span>
              </div>
              </div>
            </div>
          </div>
          
          <div className="post-a-comment">
            <p style={{"fontSize":"30px"}}>Post a comment</p>
            <div className="textarea">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="input-bttn">
            <div className="inputlar">
              <input type="text" placeholder='Your Name' className='inputlarrr'/>
              <input type="text" placeholder='Your Email'className='inputlarrr'/>
              <input type="text" placeholder='Website'className='inputlarrr'/>
            </div>
            <div className="submittt">
              <button className='submittt'>
                SUBMIT
              </button>
            </div>
            </div>
          </div>

          </div>
        </div>
        <div className="fiorello-right">
          <div className="birinci-sag">
          <div className="fiorello-right-first">
            <h5>CATEGORIES</h5>
          </div>
          <div className="fiorello-right-second">
            <p style={{"fontFamily":"Lora,serif","color":"gray","fontSize":"18px"}}>Bouquets</p>
            <p style={{"fontFamily":"Lora,serif","color":"gray","fontSize":"18px"}}>Cactuses</p>
            <p style={{"fontFamily":"Lora,serif","color":"gray","fontSize":"18px"}}>Exotic Blooms</p>
            <p style={{"fontFamily":"Lora,serif","color":"gray","fontSize":"18px"}}>Greens</p>
            <p style={{"fontFamily":"Lora,serif","color":"gray","fontSize":"18px"}}>Plants</p>
            <p style={{"fontFamily":"Lora,serif","color":"gray","fontSize":"18px"}}>Roses</p>
          </div>
          </div>
          <div className="recent-posts">
            <div className="recent-posts-firs">
              <h5>RECENT POSTS</h5>
            </div>
            <div>
              <div className="recent-posts-bottom">
                <div className="recent">
                 <div className="rcnt-img">
                 <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/blog-feature-img-8-150x100.jpg" alt="" />
                 </div>
                 <div className="rcnt-txt">
                 </div>
                </div>
                <div className="recent">
                 <div className="rcnt-img">
                 <img src="	https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/blog-feature-img-9-150x100.jpg" alt="" />
                 </div>
                 <div className="rcnt-txt">
                 </div>
                </div>
                <div className="recent">
                 <div className="rcnt-img">
                 <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/blog-feature-img-10-150x100.jpg" alt="" />
                 </div>
                 <div className="rcnt-txt">
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default Audio