import React, { useEffect, useState } from 'react';
import AddResume from './components/AddResume';
import { useUser } from '@clerk/react';
import GlobalApi from '../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';

export const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  const GetResumeList = () => {
    const email = user?.primaryEmailAddress?.emailAddress;

    if (!email) return;

    GlobalApi.GetUserResume(email)
      .then((res) => {
        setResumeList(res.data.data);
      })
      .catch((err) => {
        console.error('Error fetching resumes:', err);
      });
  };

  useEffect(() => {
    if (user) {
      GetResumeList();
    }
  }, [user]);

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resumes</h2>
      <p>Start Building Your Perfect Resume Today!</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <AddResume />
        {resumeList.length>0 &&resumeList.map((resume,index)=>(
          <ResumeCardItem resume={resume} key = {index}/>
        ))}
      </div>
    </div>
  );
};