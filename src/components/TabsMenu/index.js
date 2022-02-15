/* import external modules */
import { useState } from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import DataGridRepositories from '../repositories/DataGridRepositories'

/* import internal modules */

/** @description This is a functional component for layout TabsComponent
 *  @version 1.0.0
 *  @since 12/02/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name TabsComponent
 *  @returns {Component} Returns the layout of TabsComponent
 **/

const TabsComponent = () => {
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label='lab API tabs example'>
                        <Tab label='Repositories' value='1' />
                        <Tab label='Favorites' value='2' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <DataGridRepositories type='list' />
                </TabPanel>
                <TabPanel value='2'>
                    <DataGridRepositories type='favorites' />
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export default TabsComponent
