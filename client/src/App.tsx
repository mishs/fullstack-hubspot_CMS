import { useState } from "react";

import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Fade,
  Stack,
  Typography,
} from "@mui/material";
import { blue, pink, red } from "@mui/material/colors";
import { useMutation, useQuery } from "react-query";
import { BASE_URL, deleteContact } from "./utils";
import { Contact, FormattedData } from "./models";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import CreateContactModal from "./components/createModal";
import EditContactModal from "./components/editModal";

function App() {
  const [open, setOpen] = useState(true);

  const { data, isLoading, isError, error, refetch } = useQuery<Contact[]>(
    "contacts",
    () => {
      return fetch(`${BASE_URL}contacts`)
        .then((res) => res.json())
        .then((res) => res.data);
    }
  );

  const formattedData = data?.map((contact) => {
    return {
      id: contact?.id,
      birthday: contact?.properties?.birthday,
      email: contact?.properties?.email,
      firstname: contact?.properties?.firstname,
      lastname: contact?.properties?.lastname,
    };
  });

  const { mutate, isLoading: deleteLoading } = useMutation(
    "delete-contact",
    deleteContact,
    {
      onSuccess: (data) => {
        console.log(data, "data");
        refetch();
      },
      onError: (e: any) => {
        console.log(e?.message);
      },
    }
  );

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 75 },
    { field: "firstname", headerName: "First name", width: 250 },
    { field: "lastname", headerName: "Last name", width: 250 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "birthday", headerName: "Birthday", minWidth: 250, flex: 1.2 },
    {
      field: "edit",
      headerName: "Edit",
      // minWidth: 150,
      flex: 0.4,

      renderCell(params: GridRenderCellParams) {
        return <EditContactModal params={params} refetch={refetch} />;
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      // minWidth: 150,
      flex: 0.4,
      renderCell(params: GridRenderCellParams) {
        return (
          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "capitalize",
              fontFamily: "Poppins",
              fontWeight: "400",
              width: "80%",
              paddingY: 1.1,

              bgcolor: red[600],
              ":hover": {
                bgcolor: red[400],
              },
            }}
            onClick={() => mutate(params?.id as string)}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  // if (isLoading) {
  //   return (
  //     <Backdrop
  //       sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //       open={open}
  //     >
  //       <CircularProgress color="inherit" />
  //     </Backdrop>
  //   );
  // }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }} bgcolor="#FAF7F0">
      <Container maxWidth="xl" sx={{ paddingY: 8 }}>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: "28px", fontFamily: "Poppins" }}
            color="Background"
          >
            Contacts List
          </Typography>
          <CreateContactModal refetch={refetch} />
        </Stack>
        <div style={{ width: "100%", height: "650px", marginTop: 20 }}>
          {isLoading ? (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            <DataGrid
              columns={columns}
              rows={formattedData!}
              sx={{ fontFamily: "Poppins" }}
              rowsPerPageOptions={[]}
              initialState={{
                pagination: {
                  pageSize: 20,
                },
              }}
            />
          )}
        </div>
      </Container>
    </Box>
  );
}

export default App;
