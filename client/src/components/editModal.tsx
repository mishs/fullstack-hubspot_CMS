import { Dispatch, SetStateAction, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Formik, useFormik } from "formik";
import { contactValidationSchema, createContact, editContact } from "../utils";
import { blue } from "@mui/material/colors";
import { useMutation } from "react-query";
import dayjs, { Dayjs } from "dayjs";
import { GridRenderCellParams } from "@mui/x-data-grid";
import ErrorPopup from "./errorPopup";

export default function EditContactModal(
  props: {
    params: GridRenderCellParams;
  } & { refetch: any }
) {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState<Dayjs | null>(
    dayjs(props?.params?.row?.birthday, "DD-MM-YYYY")
  );

  const { mutate, isLoading } = useMutation("update-contact", editContact, {
    onSuccess: (data) => {
      console.log(data, "data");
      setOpen(false);
      props?.refetch();
    },
    onError: (e: any) => {
      console.log(e?.message);
      setErrorMessage(e?.response?.data?.message);
      setError(true);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: props?.params?.row?.email,
      firstname: props?.params?.row?.firstname,
      lastname: props?.params?.row?.lastname,
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values) => {
      if (!value) return;
      mutate({
        birthday: value?.format("DD-MM-YYYY"),
        firstname: values?.firstname,
        lastname: values?.lastname,
        email: values?.email,
        id: props?.params?.row?.id,
      });
    },
  });

  return (
    <div>
      <ErrorPopup
        error={error}
        errorMessage={errorMessage}
        setError={setError}
      />
      <Button
        variant="contained"
        disableElevation
        sx={{
          textTransform: "capitalize",
          fontFamily: "Poppins",
          fontWeight: "400",
          width: "80%",
          paddingY: 1.1,
          bgcolor: blue[500],
          ":hover": {
            bgcolor: blue[400],
          },
        }}
        onClick={() => setOpen(true)}
      >
        EDIT
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ fontFamily: "Poppins" }}>Edit Contact</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontFamily: "Poppins", marginBottom: 1.5 }}>
            Update these fields to update the contact
          </DialogContentText>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              sx={{
                paddingY: 1.1,
                fontFamily: "Poppins",
                "::placeholder": { fontFamily: "Poppins" },
              }}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="dense"
              name="firstname"
              label="First Name"
              type="text"
              fullWidth
              variant="standard"
              sx={{
                paddingY: 1.1,
                fontFamily: "Poppins",
                "::placeholder": { fontFamily: "Poppins" },
              }}
              value={formik.values.firstname}
              onChange={formik.handleChange}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
            <TextField
              margin="dense"
              name="lastname"
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
              sx={{
                paddingY: 1.1,
                fontFamily: "Poppins",
                "::placeholder": { fontFamily: "Poppins" },
              }}
              value={formik.values.lastname}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth sx={{ mt: 3, py: 1.1 }} />
                )}
              />
            </LocalizationProvider>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                type="submit"
                disableElevation
                sx={{ bgcolor: blue[500] }}
                variant="contained"
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress size={"1.5rem"} color="inherit" />
                ) : (
                  "Update"
                )}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
