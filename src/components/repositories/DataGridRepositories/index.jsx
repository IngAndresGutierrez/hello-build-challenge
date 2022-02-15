/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

/* import internal modules */
import AddToFavoritesRepositories from '../AddFavorites'

/** @description This is a functional component for DataGridRepositories
 *  @version 1.0.0
 *  @since 12/02/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name DataGridRepositories
 *  @returns {Component} Returns the DataGridRepositories component
 **/

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'name',
    headerName: 'Name',
    width: 450,
  },
  {
    field: 'default_branch',
    headerName: 'Default Branch',
    width: 150,
  },
  {
    field: 'language',
    headerName: 'Language',
    width: 110,
  },
  {
    headerName: 'Actions',
    sortable: false,
    width: 160,
    renderCell: (params) => <AddToFavoritesRepositories {...params} />,
  },
]

const DataGridRepositories = ({ type }) => {
  const [rows, setRows] = useState([])
  const repositoriesList = useSelector(
    (state) => state.repositories.repositories
  )
  const repositoriesFavorites = useSelector(
    (state) => state.repositories.favoritesRepositories
  )

  useEffect(() => {
    updateRows()
  }, [repositoriesList])

  const updateRows = () => {
    switch (type) {
      case 'list':
        setRows(repositoriesList)
        break
      case 'favorites':
        setRows(repositoriesFavorites)
        break

      default:
        break
    }
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  )
}

export default DataGridRepositories
