import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/53500849?s=400&u=c02af173f2d42162dfbf93317bda46171faec077&v=4" alt="Thales Neves"/>
                        <div>
                            <strong>Thales Neves</strong>
                            <span>Ruby</span>
                        </div>
                    </header>

                    <p>
                        A Rails enthusiast.
                        <br/> <br/>
                        Passionate about technology and the Ruby language, already taught more than 200.000 people to work with Ruby on Rails framework.
                    </p>
                    <footer>
                        <p>
                            Price/Hour
                            <strong>U$32,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="contact"/>
                            Get in touch.
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;