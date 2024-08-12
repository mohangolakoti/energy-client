import React from 'react'
import Sidebar from '../components/sidebar'

const Dashboard = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <section className='bg-slate-100 w-full'>
            <div className='mx-2'>
                <div>
                    <h2>Energy Monitoring System</h2>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Dashboard