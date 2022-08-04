import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { Navbar, Footer, Sidebar, ThemeSettings } from './components';

import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button
                                type="button"
                                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                                onClick={() => setThemeSettings(true)}
                                style={{ background: currentColor, borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>

                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}

                    <div className={
                        `dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full
                         ${activeMenu
                            ? 'md:ml-72'
                            : 'flex-2'}`
                    }>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                            <Navbar />
                        </div>
                        {/* </div> */}

                        <div>
                            {themeSettings && <ThemeSettings />}

                            <Routes>
                                {/* dashboard  */}
                                <Route path="/demo-admin-dashboard/" element={(<Ecommerce />)} />
                                <Route path="/demo-admin-dashboard/ecommerce/" element={(<Ecommerce />)} />

                                {/* pages  */}
                                <Route path="/demo-admin-dashboard/orders/" element={<Orders />} />
                                <Route path="/demo-admin-dashboard/employees/" element={<Employees />} />
                                <Route path="/demo-admin-dashboard/customers/" element={<Customers />} />

                                {/* apps  */}
                                <Route path="/demo-admin-dashboard/kanban/" element={<Kanban />} />
                                <Route path="/demo-admin-dashboard/editor/" element={<Editor />} />
                                <Route path="/demo-admin-dashboard/calendar/" element={<Calendar />} />
                                <Route path="/demo-admin-dashboard/color-picker/" element={<ColorPicker />} />

                                {/* charts  */}
                                <Route path="/demo-admin-dashboard/line/" element={<Line />} />
                                <Route path="/demo-admin-dashboard/area/" element={<Area />} />
                                <Route path="/demo-admin-dashboard/bar/" element={<Bar />} />
                                <Route path="/demo-admin-dashboard/pie/" element={<Pie />} />
                                <Route path="/demo-admin-dashboard/financial/" element={<Financial />} />
                                <Route path="/demo-admin-dashboard/color-mapping/" element={<ColorMapping />} />
                                <Route path="/demo-admin-dashboard/pyramid/" element={<Pyramid />} />
                                <Route path="/demo-admin-dashboard/stacked/" element={<Stacked />} />


                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App