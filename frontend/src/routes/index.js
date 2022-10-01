import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import ResultsPage from '../pages/ResultsPage'

function index() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/results' element={<ResultsPage />} />
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </MainLayout>
        </BrowserRouter>

    )
}

export default index