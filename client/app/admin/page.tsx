'use client';
import React from 'react'
import Heading from "../utils/Heading"
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar"
import DashboardHero from "../components/Admin/DashboardHero"
import AdminProtected from '../hooks/adminProtected';

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title="Bhasa LMS - Admin"
                    description="Bhasa is a platform for language students to learn and get help from teachers"
                    keywords="English, Japanese, Korean, Chinese, Nepali, Hindi, Urdu, Spanish"
                />
                <div className="flex h-[200vh]">
                    <div className='1500px:w-[16%] w-1/5'>
                        <AdminSidebar />
                    </div>
                    <div className="w-[85%]">
                        <DashboardHero />
                    </div>
                </div>
            </AdminProtected>
        </div>
    )
}

export default page