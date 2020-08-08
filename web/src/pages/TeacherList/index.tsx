import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


const TeacherList = () => {
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)
  }

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.'>
        {/* no typescrit tem que adicionar tipos para as props, a gente pode ver isso no component PageHeader */}
        <form id='search-teachers' onSubmit={searchTeachers}>
        <Select name="subject" label="Matéria" value={subject} onChange={e=>{setSubject(e.target.value)}} options={[
            { value: 'Artes', label: 'Artes' },
            { value: 'Biologia', label: 'Biologia' },
            { value: 'Ciências', label: 'Ciências' },
            { value: 'Educação física', label: 'Educação física' },
            { value: 'Física', label: 'Física' },
            { value: 'Geografia', label: 'Geografia' },
            { value: 'História', label: 'História' },
            { value: 'Matemática', label: 'Matemática' },
            { value: 'Português', label: 'Artes' },
            { value: 'Química', label: 'Química' },
          ]} />

          <Select 
          name="week_day" 
          label="Dia da semana" 
          value={week_day} 
          onChange={e => {setWeek_day(e.target.value)}} 
          options={[
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-feira' },
            { value: '2', label: 'Segunda-feira' },
            { value: '3', label: 'terça-feira' },
            { value: '4', label: 'quarta-feira' },
            { value: '5', label: 'quinta-feira' },
            { value: '6', label: 'sexta-feira' },
          ]} />
          <Input name="time" label="Hora" type="time" value={time} onChange={e => {
            setTime(e.target.value)
            }} />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  );
};

export default TeacherList;
