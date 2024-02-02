"use client";
import React from 'react'
import FilterMenu from './filter-menu';
import { menus } from '@/config/menus';

const MainFilterLayout = () => {
    return (
        <div className='container flex overflow-hidden'>
            <FilterMenu isCollapsed={false} links={menus} />
        </div>
    )
}

export default MainFilterLayout;