import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import TablePagination from '@material-ui/core/TablePagination'
import TableFooter from '@material-ui/core/TableFooter'
import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

// core components
import styles from 'assets/jss/material-dashboard-react/components/tableStyle.js'

const useStyles = makeStyles(styles)

export default function CustomTable (props) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const classes = useStyles()
  let [tableList , setTableList] = React.useState([])
  let { tableHead, tableHeaderColor, tableData } = props

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const onDelete = (row) => {
    tableData = tableData.filter((data, index) => index!==row)
    console.log(row)
    setTableList(tableData)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  return (
    <div className={classes.tableResponsive}>
      <Paper>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + 'TableHeader']}>
              <TableRow className={classes.tableHeadRow}>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={
                        classes.tableCell + ' ' + classes.tableHeadCell
                      }
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {(rowsPerPage > 0
              ? tableData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : tableData
            ).map((prop, key) => {
              return (
                <TableRow key={key} className={classes.tableBodyRow}>
                  <TableCell className={classes.tableCell} >
                    {prop.name}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.country}
                  </TableCell>
                  <TableCell className={classes.tableCell} >
                    {prop.web_pages[0]}
                  </TableCell>
                  <TableCell className={classes.tableCell} >
                    {prop.domains[0]}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <div>
                      <EditIcon />
                    </div>
                    <div onClick={() => props.deleteItem((page * rowsPerPage)+key)}>
                      <DeleteForeverIcon />
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='TableRow'
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    </div>
  )
}

CustomTable.defaultProps = {
  tableHeaderColor: 'gray'
}

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.object),
  deleteItem: PropTypes.func
}
