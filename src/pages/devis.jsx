import React from 'react';
import Icons from '../components/Icons';
const Devis = () => {
  return (
    <>
      <div id="start">
        <div className="d-flex justify-content-start d-back">
          <a className="arrow-color" href="http://">
            <div className="arrow-position">
              <Icons icon="arrow" />
            </div>
          </a>
        </div>
      </div>

      <div class="container-fluid p-slide pb-11">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label class="label" for="name">
                  Full Name
                </label>
                <input type="text" class="form-control" name="name" id="name" placeholder="Name" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="label" for="email">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label class="label" for="subject">
                  Subject
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label class="label" for="#">
                  Message
                </label>
                <textarea
                  name="message"
                  class="form-control"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <input type="submit" value="Send Message" class="btn btn-primary" />
                <div class="submitting"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <h1 className="orange big-font-size-xxl rotate">DEMANDE DE DEVIS</h1>
          </div>
        </div>
      </div>
      <footer id="footer" className="fixed-bottom">
        <div className="d-flex justify-content-end">
          <Icons icon="logo" className="logo-footer" />
        </div>
      </footer>
    </>
  );
};
export default Devis;
