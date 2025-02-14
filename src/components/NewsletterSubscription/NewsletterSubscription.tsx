import './NewsletterSubscription.css'

const NewsletterSubscription = () => {

  return (
    <section className="spotlight newsletter">
      <div className="spotlight-content">
      <h1>Subscribe to Our Newsletter</h1>
      <div id="mc_embed_shell">
  
      <div id="mc_embed_signup">
          <form action="https://noeticacommunity.us8.list-manage.com/subscribe/post?u=d9a8228377b377da3346e5eea&amp;id=ee1501ff35&amp;f_id=00f4c1e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate>
              <div id="mc_embed_signup_scroll">Subscribe to Our Newsletter to Receive New Monthly Content!<hr></hr>
                  <div className="mc-field-group">
                    {/* <label htmlFor="mce-EMAIL">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email Address</label> */}
                  <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required /*value={email}  onChange={(e) => setEmail(e.target.value)}  */ placeholder="you@institution.edu" /></div>
              <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
              </div>
          <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input type="text" name="b_d9a8228377b377da3346e5eea_ee1501ff35" tabIndex={-1} value="" readOnly />
          </div>
              <div className="optionalParent">
                  <div className="clear foot">
                      <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                      {/* <p style={{margin: '0px auto'}}><a href="http://eepurl.com/jbsEK6" title="Mailchimp - email marketing made easy and fun"><span style={{display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px'}}><img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center'}} /></span></a></p> */}
                  </div>
              </div>
          </div>
      </form>
      </div>
      </div>

      </div>
    </section>
  )
}

export default NewsletterSubscription 
