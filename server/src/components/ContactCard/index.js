import React from "react";

function ContactCard(){
    return(
        <div className="uk-container">
            <div className = "uk-text-center">
                <p>Feel free to contact me with questions or about employment opportunities at <a id= "emailLink" href="mailto:goodwinamundson@gmail.com">goodwinamundson@gmail.com</a></p>
                <p>or follow me on Github or Linkedin</p>
                <div className="uk-text-center uk-text-middle">
                    <a uk-icon="icon: github-alt" className="contact-icon contact-link-icon" href="https://github.com/goodwinamundson"  target="_blank"></a>
                    <a uk-icon="icon: linkedin" className="contact-icon contact-link-icon" href="https://www.linkedin.com/in/goodwin-amundson-635922135/" target="_blank"></a>
                </div>

            </div>
        </div>

    )
}

export default ContactCard;