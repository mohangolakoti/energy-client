import React from 'react'
import { Sidebar } from 'rsuite'
import Dashboard from './Dashboard'

const Home = () => {
  return (
    <div>
        <section className='h-[100vh] flex md:flex-row flex-col'>
        <Sidebar/>
        <Dashboard/>
        </section>
    </div>
  )
}

export default Home