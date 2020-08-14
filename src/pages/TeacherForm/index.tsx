import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';


const TeacherForm = () => {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: "", to: ""},
    ])

    let addNewScheduleItem = () => {

        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]);
    }


    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return {...scheduleItem, [field]:value }
            }

            return scheduleItem;
        })

       setScheduleItems(updatedScheduleItems);
    }


    function handleCreteClass (e: FormEvent) {
        e.preventDefault();

   api.post('classes', {
       name,
       avatar,
       whatsapp,
       bio,
       subject,
       cost: Number(cost),
       schedule: scheduleItems
   }).then(() => {
       alert('Form updated succesfully!')
       history.push('/');
   }).catch(() => {
       alert('Error while filling form.')
   })

        console.log(
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        )

    }


    return(
        <div id="page-teacher-form" className="container">
        <PageHeader
         title="It's awesome that you want to teach!"
         description="The first step is to fill out this subscription form."
        />

        <main>
            <form onSubmit={handleCreteClass}>
            <fieldset>
                <legend>Your Info</legend>
                <Input name='name'
                 label='Full name'
                 value={name}
                 onChange={(e) => { setName(e.target.value) }}
                  />
                <Input name='avatar'
                 label='Avatar'
                 value={avatar}
                 onChange={ (e) => { setAvatar(e.target.value) }}
                 />
                <Input name='whatsapp'
                 label='Whatsapp'
                 value={whatsapp}
                 onChange={ (e) => { setWhatsapp(e.target.value) }}
                  />
                <Textarea name='bio'
                 label='Bio'
                 value={bio}
                 onChange={(e) => { setBio(e.target.value) }}
                 />
            </fieldset>

            <fieldset>
                <legend>About your class</legend>
                <Select
                 name='subject'
                  label='Subject'
                  value={subject}
                  onChange={(e) => { setSubject(e.target.value) }}
                  options={[
                      {value:'Ruby on Rails', label:'Ruby on Rails'},
                      {value:'Django', label:'Django'},
                      {value:'Flask', label:'Flask'},
                      {value:'Laravel', label:'Laravel'},
                      {value:'.NET ASP', label:'.NET ASP'},
                      {value:'Docker', label:'Docker'},
                      {value:'Flutter', label:'Flutter'},
                  ]} />
                <Input 
                name='cost'
                 label='Cost per hour'
                 value={cost}
                 onChange={(e) => { setCost(e.target.value) }}
                 />
            </fieldset>

            <fieldset>
                <legend>
                    Available Hours
                    <button type="button" onClick={addNewScheduleItem}>
                    + New Schedule
                </button>
                </legend>

                {scheduleItems.map( (scheduleItem, index) => {
                    return (
                        <div key={scheduleItem.week_day} className="schedule-item">
               <Select
                 name='week_day'
                  label='Week Day'
                  value={scheduleItem.week_day}
                  onChange={e => setScheduleItemValue( index, 'week_day', e.target.value) }
                  options={[
                      {value:'0', label:'Monday'},
                      {value:'1', label:'Tuesday'},
                      {value:'2', label:'Wednesday'},
                      {value:'3', label:'Thursday'},
                      {value:'4', label:'Friday'},
                      {value:'5', label:'Saturday'},
                      {value:'6', label:'Sunday'},
                  ]} />

                  <Input name="from"
                   label="From"
                    type="time"
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue( index, 'from', e.target.value) }
                     />

                  <Input name="to"
                   label="To"
                    type="time"
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue( index, 'to', e.target.value) }
                    />

               </div>
                    )
                })}
               
               
            </fieldset>



            <footer>
                <p><img src={warningIcon} alt="Important Warning"/>It's important to fill all your information.</p>
                <button type='submit'>Save</button>
            </footer>
            </form>
        </main>
       </div>
    )
}

export default TeacherForm;