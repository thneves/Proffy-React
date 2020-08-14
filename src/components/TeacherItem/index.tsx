import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';



export interface Teacher {
    
        id: number;
        avatar: string;
        bio: string;
        cost: number;
        name: string;
        subject: string;
        whatsapp: string;
      }

interface teacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<teacherItemProps> = ({ teacher }) => {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/53500849?s=400&u=c02af173f2d42162dfbf93317bda46171faec077&v=4" alt="Thales Neves"/>
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>

                    <p>{teacher.bio}</p>
                    <footer>
                        <p>
                            Price/Hour
                            <strong>{teacher.cost}</strong>
                        </p>
                        <a href={`https://wa.me/${teacher.whatsapp}`}>
                            <img src={whatsappIcon} alt="contact"/>
                            Get in touch.
                        </a>
                    </footer>
                </article>
    )
}

export default TeacherItem;