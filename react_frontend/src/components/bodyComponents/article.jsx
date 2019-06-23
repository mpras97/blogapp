import React, { Component } from 'react';
import SubHeader from '../common/subHeader'
import ArticleView1 from '../common/articleView1';

class ArticleBody extends Component {
  state = {};
  render () {
    let img1 = require('../../static/img/demo/avatar2.jpg');
    let img2 = require('../../static/img/demo/intro.jpg');
    {/*let img3Style = {
      backgroundImage: require('../../static/img/demo/3.jpg'),
      height: '150px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }*/}
    return (
      <React.Fragment>
        <div className="container">
          <div className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
            <div className="h-100 tofront">
              <div className="row justify-content-between">
                <div className="col-md-6 pt-6 pb-6 pr-6 align-self-center">
                  <p className="text-uppercase font-weight-bold">
                    <a className="text-danger" href="./category.html">Stories</a>
                  </p>
                  <h1 className="display-4 secondfont mb-3 font-weight-bold">Sterling could jump 8% if Brexit deal gets approved by UK Parliament</h1>
                  <p className="mb-3">
                    Analysts told CNBC that the currency could hit anywhere between $1.35-$1.40 if the deal gets passed through the U.K. parliament.
                  </p>
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle" src={img1} width="70" alt="article-img" />
                    <small className="ml-2">Jane Seymour <span className="text-muted d-block">A few hours ago &middot; 5 min. read</span>
                    </small>
                  </div>
                </div>
                <div className="col-md-6 pr-0">
                  <img src={img2} alt="article-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-4 pb-4">
          <div className="row justify-content-center">
            <div className="col-lg-2 pr-4 mb-4 col-md-12">
              <div className="sticky-top text-center">
                <div className="text-muted">
                  Share this
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <article className="article-post">
                <p>
                  Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift stealth mass market seed money rockstar niche market marketing buzz market.
                </p>
                <p>
                  Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.
                </p>
                <p>
                  Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market.
                </p>
                <p>
                  Freemium non-disclosure agreement lean startup bootstrapping holy grail ramen MVP iteration accelerator. Strategy market ramen leverage paradigm shift seed round entrepreneur crowdfunding social proof angel investor partner network virality.
                </p>
              </article>
              <div className="border p-5 bg-lightblue">
                <div className="row justify-content-between">
                  <div className="col-md-5 mb-2 mb-md-0">
                    <h5 className="font-weight-bold secondfont">Become a member</h5>
                      Get the latest news right in your inbox. We never spam!
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Enter your e-mail address" />
                      </div>
                      <div className="col-md-12 mt-2">
                        <button type="submit" className="btn btn-success btn-block">Subscribe</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-4 pb-4">
          <h5 className="font-weight-bold spanborder"><span>Read next</span></h5>
          <div className="row">
            <SubHeader />
            <div className="col-lg-6">
              <div className="flex-md-row mb-4 box-shadow h-xl-300">
                <ArticleView1 />
                <ArticleView1 />
                <ArticleView1 />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
        )
  }
}

export default ArticleBody;
