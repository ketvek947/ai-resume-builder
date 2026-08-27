import React from 'react'
import { useContext } from 'react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import PersonalDetailPreview from './preview/PersonalDetailPreview';
import SummaryPreview from './preview/SummaryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';

function ResumePreview() {
  const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
  return (
    <div className='shadow-lg h-full p-14 border-t-20'
      style={{borderColor:resumeInfo?.themeColor}}
    >
      {/* Personal Information */}
      <PersonalDetailPreview resumeInfo = {resumeInfo}/>
      {/* Summary */}
      <SummaryPreview resumeInfo = {resumeInfo}/>
      {/* Skills */}
      <SkillsPreview resumeInfo = {resumeInfo}/>
      {/* Professional Experience */}
      <ExperiencePreview resumeInfo = {resumeInfo}/>
      {/* Projects */}
      {/* Education */}
      <EducationalPreview resumeInfo = {resumeInfo}/>


    </div>
  )
}

export default ResumePreview