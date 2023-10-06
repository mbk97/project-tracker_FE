import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useTheme } from "@mui/material/styles";

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  children: any;
  dialogTitle: string;
  type?: string;
}

const CustomModal = ({
  open,
  handleClose,
  children,
  dialogTitle,
  type,
}: IModalProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="">
      <Dialog
        open={open}
        fullWidth
        maxWidth={"sm"}
        onClose={handleClose}
        fullScreen={fullScreen}
      >
        <DialogTitle className="flex justify-between items-center">
          <p className="font-semibold">{dialogTitle}</p>
          <IconButton onClick={handleClose}>
            <AiOutlineCloseCircle />
          </IconButton>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomModal;
