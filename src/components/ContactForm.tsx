import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm, ValidationError } from "@formspree/react";
import { agencyConfig } from "../data/agencyConfig";
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaLocationDot,
  FaCircleCheck,
  FaXmark
} from "react-icons/fa6";
import "./styles/ContactForm.css";
import { FaPhone } from "react-icons/fa";

const ContactForm = () => {
  // "@formspree/react";
  const { contact } = agencyConfig.brand;
  const [state, handleSubmit] = useForm("mjgnzekb");

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent;
      const messageTextarea = document.getElementById("form-msg") as HTMLTextAreaElement;
      if (messageTextarea) {
        messageTextarea.value = customEvent.detail;
      }
    };
    window.addEventListener("prefillContact", handlePrefill);
    return () => window.removeEventListener("prefillContact", handlePrefill);
  }, []);

  return (
    <div className="contact-form-section" id="contact">
      <div className="contact-form-container section-container">
        
        <div className="contact-form-grid">
          <div className="contact-info-panel glass-panel" data-cursor="disable">
            <div className="section-subtitle">
              <span className="subtitle-line"></span>
              {/* GET IN TOUCH */}
            </div>
            
            <h2 className="section-title">
              Let's Discuss <br />
              <span className="gradient-text">Your Project</span>
            </h2>
            
            <p className="contact-panel-desc">
              Have a custom design concept, or looking to deploy a professional baseline portfolio? Drop us a line and let's craft something premium.
            </p>

            <div className="info-items-list">
              <div className="info-item">
                <div className="info-item-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-item-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-item-icon">
                  <FaWhatsapp />
                </div>
                <div>
                  <h4>WhatsApp Chat</h4>
                  <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                    Connect on WhatsApp
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-item-icon">
                  <FaLocationDot />
                </div>
                <div>
                  <h4>Our Office</h4>
                  <p>{contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-inputs-block glass-panel" data-cursor="disable">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="form-name">Full Name</label>
                <input 
                  type="text" 
                  id="form-name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="err-msg" />
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="form-mobile">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="form-mobile" 
                    name="mobile"
                    placeholder="Number"
                    required
                  />
                  <ValidationError prefix="Mobile" field="mobile" errors={state.errors} className="err-msg" />
                </div>

                <div className="form-group">
                  <label htmlFor="form-email">Email Address</label>
                  <input 
                    type="email" 
                    id="form-email" 
                    name="email" 
                    placeholder="xyz@gmail.com"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="err-msg" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="form-msg">Message Description</label>
                <textarea 
                  id="form-msg" 
                  name="message" 
                  rows={5}
                  placeholder="Message..."
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="err-msg" />
              </div>

              <button 
                type="submit" 
                className="glow-btn-primary form-submit-btn" 
                disabled={state.submitting}
              >
                {state.submitting ? "Submitting Request..." : "Send Message Request"}
              </button>
            </form>
          </div>
        </div>

        {/* Success Modal Overlay */}
        {state.succeeded && createPortal(<div className="success-modal-overlay active">
          <div className="success-modal glass-panel">
            <a href="/" className="success-close-btn" aria-label="Close modal">
              <FaXmark />
            </a>
            
            <div className="success-modal-inner">
              <div className="success-check-wrapper">
                <FaCircleCheck />
              </div>
              <h2>Message Sent Successfully!</h2>
              <p>
                Thank you for contacting <strong>{agencyConfig.brand.name}</strong>. Our digital design leads will review your inquiry and connect with you on WhatsApp/Email within the next 24 hours.
              </p>
              <a href="/" className="glow-btn-primary success-ok-btn">
                Awesome, Got It!
              </a>
            </div>
          </div>
        </div>, document.body)}

      </div>
    </div>
  );
};

export default ContactForm;
