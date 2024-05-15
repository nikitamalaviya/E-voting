import React, { useEffect } from "react";
import DataTable from "../../Atoms/DataTable";
import AddButton from "../../Atoms/Button";
import { Box, Grid, IconButton, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ELECTION_PENDING, GET_ALL_ELECTION_PENDING } from "../../redux-saga/admin/action/Action";
import { election_get_req, election_post_req } from "../../redux-saga/Constant";

const Election = () => {
  const inputTitles = ["election_name", "date"];
  const inputTypes = ["text", "date"];


  let dispatch = useDispatch();
 
  let data = useSelector((state) => state.adminReducer.election)

console.log(data,"Sdsa");

  // // Sample column data
  const columns = [
    { id: 'election_name', label: 'Election Name' },
    { id: 'date', label: 'Date' }
  ];

  // Sample row data
  const rows = data?.map((rowData) => ({
    election_name: rowData?.election_name,
    date: rowData?.date,
  }))

  // Function to handle form submission for adding election
  const handleSubmit = (formData) => {
    dispatch({ type: ADD_ELECTION_PENDING, payload: formData, endpoint: election_post_req })
  };

  // Function to handle deletion of election
  const handleDelete = (id) => {
    console.log(id);
  };

  // Dummy function for handling update (not implemented)
  const handleUpdate = () => {
    console.log("Update");
  };

  return (
    <>
      {/* Search and Add buttons */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <form>
          <IconButton type="submit" aria-label="search">
          </IconButton>
          <TextField
            id="search-bar"
            className="text"
            label="Enter Election Name"
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
        </form>
        <AddButton
          title="Add Election"
          inputTitles={inputTitles}
          inputTypes={inputTypes}
          onSubmit={handleSubmit}
        />
      </Grid>
      {/* DataTable */}
      <Box mt={11}>
        <DataTable
          columns={columns}
          rows={rows}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          height={450}
        />
      </Box>
    </>
  );
};

export default Election;