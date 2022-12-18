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
  Snackbar,
  Alert,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Formik, useFormik } from "formik";
import { contactValidationSchema, createContact } from "../utils";
import { blue } from "@mui/material/colors";
import { useMutation } from "react-query";
import dayjs, { Dayjs } from "dayjs";
import ErrorPopup from "./errorPopup";

export default function CreateContactModal({ refetch }: { refetch: any }) {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values) => {
      if (!value) return;
      mutate({
        birthday: value?.format("DD-MM-YYYY"),
        firstname: values?.firstname,
        lastname: values?.lastname,
        email: values?.email,
      });
    },
  });

  const { mutate, isLoading, isError, isSuccess } = useMutation(
    "create-contact",
    createContact,
    {
      onSuccess: (data) => {
        console.log(data, "data");
        refetch();
        setOpen(false);
        formik.resetForm();
      },
      onError: (e: any) => {
        setErrorMessage(e?.response?.data?.message);
        setError(true);
      },
    }
  );

  return (
    <div>
      <ErrorPopup
        error={error}
        errorMessage={errorMessage}
        setError={setError}
      />
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        disableElevation
        size="large"
        sx={{
          textTransform: "capitalize",
          py: 1.5,
          fontFamily: "Poppins",
          fontWeight: "400",
          bgcolor: blue[500],
          ":hover": {
            bgcolor: blue[400],
          },
        }}
      >
        Create Contact
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ fontFamily: "Poppins" }}>Create Contact</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontFamily: "Poppins", marginBottom: 1.5 }}>
            Fill Out these fields to create a new contact
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
                  <CircularProgress color="inherit" size={"1.5rem"} />
                ) : (
                  "Create"
                )}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
