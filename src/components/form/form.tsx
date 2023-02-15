import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const AddNews = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Button onClick={handleOpen}>Add News</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Add News</h1>
          <form>
            <TextField
              defaultValue="test"
              {...register("title")}
              label="title"
            />

            <TextField
              defaultValue="test"
              {...register("category")}
              label="category"
            />

            <TextField defaultValue="test" {...register("date")} label="date" />

            <TextField defaultValue="test" {...register("text")} label="text" />

            <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
            <Button onClick={() => reset()} variant={"outlined"}>
              Reset
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
