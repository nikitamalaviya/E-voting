
import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import { Grid, TextField } from '@mui/material';
import { Box, ListItem, ModalClose, Sheet, Typography } from '@mui/joy';
import DataTable from '../../Atoms/DataTable';
import AddButton from '../../Atoms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PARTY_PENDING, GET_ALL_PARTY_PENDING } from '../../redux-saga/admin/action/Action';
import { party_get_req, party_post_req } from '../../redux-saga/Constant';

export default function Party() {

  const [open, setOpen] = React.useState(false);

  let dispatch = useDispatch()

  let data = useSelector((state) => state.adminReducer.party)
  console.log(data);

  // // Sample column data
  const columns = [
    {
      id: "img",
      label: "Party Logo",
      minWidth: 170,
      align: "center",
    },
    {
      id: "PartyName",
      label: "Party Name",
      minWidth: 170,
      align: "center",
    },
    {
      id: "PartySCode",
      label: "Party Short-Code",
      minWidth: 170,
      align: "center",
    },
  ];

  // Map data for DataTable rows, handle potential null data
  const rows = data?.map((party) => ({
    id: party?._id,
    PartyName: party?.party_name || "",
    img: party?.party_logo || "",
    PartySCode: party?.short_code || "",
  }));

  // Function to handle form submission for adding election
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("party_name", event.target.elements["party-name"].value);
    formData.append("party_logo", event.target.elements["party-logo"].files[0]);
    formData.append(
      "short_code",
      event.target.elements["party-short-code"].value
    );

    dispatch(
      { type: ADD_PARTY_PENDING, payload: formData, endpoint: party_post_req }
    );

    setOpen(false);
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
    <React.Fragment>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={8}>
          <ListItem>  <Input size="md" placeholder="Search" /></ListItem>
        </Grid>
        <Grid xs={4}>
          <ListItem>
            <div>
              <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
              >
                <Add />
                &nbsp; Add Party
              </Button>
              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    maxWidth: 500,
                    borderRadius: "md",
                    p: 3,
                    boxShadow: "lg",
                  }}
                >
                  <ModalClose variant="plain" sx={{ m: 1 }} />
                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    fontWeight="lg"
                    mb={1}
                  >
                    Add Party
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      id="party-name"
                      label="Party Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <input
                      type="file"
                      id="party-logo"
                      name="partyLogo"
                      accept="image/*"
                      required
                    />
                    <TextField
                      id="party-short-code"
                      label="Party Short Code"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <Button type="submit" variant="solid" color="primary">
                      Submit
                    </Button>
                  </form>
                </Sheet>
              </Modal>
            </div>

          </ListItem>
        </Grid>
        <Grid xs={12}>
          <Box mt={11}>
            <DataTable
              columns={columns}
              rows={rows}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              height={450}
            />
          </Box>
        </Grid>

      </Grid>

    </React.Fragment>
  );
}