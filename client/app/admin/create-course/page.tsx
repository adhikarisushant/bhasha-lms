'use client'
import React from 'react'
import AdminSidebar from '../../components/Admin/sidebar/AdminSidebar';
import Heading from "../../../app/utils/Heading"
import CreateCourse from "../../components/Admin/Course/CreateCourse"
import DashboardHeader from '../../../app/components/Admin/DashboardHeader';

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Heading
                title="Bhasa LMS - Admin"
                description='Bhasa is a language learning platform for students'
                keywords="English, Spanish, Chinese, Japanese, Korean"
            />
            <div className="flex">
                <div className="1500px:w-[16%] w-1/5">
                    <AdminSidebar />
                </div>
                <div className='w-[85%]'>
                    <DashboardHeader />
                    <CreateCourse />
                </div>
            </div>
        </div>
    )
}

export default page