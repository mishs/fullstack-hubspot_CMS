import { Alert, Snackbar } from "@mui/material";
import { ErrorPopupProps } from "../models";

export default function ErrorPopup({
  error,
  errorMessage,
  setError,
}: ErrorPopupProps) {
  return (
    <Snackbar
      open={error}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={() => setError(false)}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
}
