import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { agencyConfig } from "../data/agencyConfig";
import { 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp, 
  FaLocationDot,
  FaCircleCheck,
  FaXmark
} from "react-icons/fa6";
import "./styles/ContactForm.css";

interface FormFields {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const { contact } = agencyConfig.brand;
  
  const [fields, setFields] = useState<FormFields>({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent;
      setFields((prev) => ({ ...prev, message: customEvent.detail }));
      setErrors((prev) => ({ ...prev, message: undefined }));
    };
    window.addEventListener("prefillContact", handlePrefill);
    return () => window.removeEventListener("prefillContact", handlePrefill);
  }, []);

  const validate = (): boolean => {
    let tempErrors: FormErrors = {};
    let isValid = true;

    if (!fields.name.trim()) {
      tempErrors.name = "Full Name is required.";
      isValid = false;
    }

    if (!fields.mobile.trim()) {
      tempErrors.mobile = "Mobile Number is required.";
      isValid = false;
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(fields.mobile.trim())) {
      tempErrors.mobile = "Please enter a valid mobile number.";
      isValid = false;
    }

    if (!fields.email.trim()) {
      tempErrors.email = "Email Address is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!fields.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessOverlay(true);
      setFields({ name: "", mobile: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="contact-form-section" id="contact">
      <div className="contact-form-container section-container">
        
        <div className="contact-form-grid">
          {/* Sidebar Information Panel */}
          <div className="contact-info-panel glass-panel" data-cursor="disable">
            <div className="section-subtitle">
              <span className="subtitle-line"></span>
              GET IN TOUCH
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

          {/* Contact Input Form block */}
          <div className="contact-inputs-block glass-panel" data-cursor="disable">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="form-name">Full Name</label>
                <input 
                  type="text" 
                  id="form-name" 
                  name="name" 
                  value={fields.name} 
                  onChange={handleInput} 
                  className={errors.name ? "input-err" : ""}
                  placeholder="Name"
                />
                {errors.name && <span className="err-msg">{errors.name}</span>}
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="form-mobile">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="form-mobile" 
                    name="mobile" 
                    value={fields.mobile} 
                    onChange={handleInput} 
                    className={errors.mobile ? "input-err" : ""}
                    placeholder="Number"
                  />
                  {errors.mobile && <span className="err-msg">{errors.mobile}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="form-email">Email Address</label>
                  <input 
                    type="email" 
                    id="form-email" 
                    name="email" 
                    value={fields.email} 
                    onChange={handleInput} 
                    className={errors.email ? "input-err" : ""}
                    placeholder="xyz@gmail.com"
                  />
                  {errors.email && <span className="err-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="form-msg">Message Description</label>
                <textarea 
                  id="form-msg" 
                  name="message" 
                  rows={5}
                  value={fields.message} 
                  onChange={handleInput} 
                  className={errors.message ? "input-err" : ""}
                  placeholder="Message..."
                />
                {errors.message && <span className="err-msg">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="glow-btn-primary form-submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting Request..." : "Send Message Request"}
              </button>
            </form>
          </div>
        </div>

        {/* Success Modal Overlay */}
        {createPortal(<div className={`success-modal-overlay ${showSuccessOverlay ? "active" : ""}`} onClick={() => setShowSuccessOverlay(false)}>
          <div className="success-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="success-close-btn" onClick={() => setShowSuccessOverlay(false)} aria-label="Close modal">
              <FaXmark />
            </button>
            
            <div className="success-modal-inner">
              <div className="success-check-wrapper">
                <FaCircleCheck />
              </div>
              <h2>Message Sent Successfully!</h2>
              <p>
                Thank you for contacting <strong>{agencyConfig.brand.name}</strong>. Our digital design leads will review your inquiry and connect with you on WhatsApp/Email within the next 24 hours.
              </p>
              <button className="glow-btn-primary success-ok-btn" onClick={() => setShowSuccessOverlay(false)}>
                Awesome, Got It!
              </button>
            </div>
          </div>
        </div>, document.body)}

      </div>
    </div>
  );
};

export default ContactForm;
