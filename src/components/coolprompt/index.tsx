/* eslint-disable no-unused-vars */
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { delay } from "@/utils";
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { IAlertComponentProps } from "../coolert";
import { Input } from "../ui/input";

export type TAlertType = "info" | "warning" | "error" | "success" | "default";
export interface IPropmtOptions {
  description?: string;
  type?: TAlertType;
  defaultValue?: string;
  inputType?: "text" | "password" | "email" | "number";
}

export interface IPropmtComponentProps extends IAlertComponentProps {
  onConfirm?: (value: string) => any | Promise<void>;
  onCancel?: (value: string) => any | Promise<void>;
  options?: IPropmtOptions;
}

export const PropmtComponent = ({
  title = "Propmt",
  options,
  onConfirm,
  onCancel,
}: IPropmtComponentProps) => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const { description = "No description provided.", type = "default" } =
    options || {};
  const handleClose = async () => {
    const alertComponent = document.getElementById("coolert-confirm");

    setIsOpen(false);
    await delay(100);
    // delete alert component
    alertComponent?.remove();
  };

  const handleCancel = async () => {
    onCancel && (await onCancel(value));
    handleClose();
  };

  const handleConfirm = async () => {
    onConfirm && (await onConfirm(value));
    handleClose();
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex gap-2 items-center">
            {
              {
                info: <InfoCircledIcon className="w-8 h-8" />,
                warning: (
                  <ExclamationTriangleIcon className="w-8 h-8 text-yellow-500" />
                ),
                error: (
                  <ExclamationTriangleIcon className="w-8 h-8 text-red-500" />
                ),
                success: (
                  <CheckCircledIcon className="w-8 h-8 text-green-500" />
                ),
                default: null,
              }[type]
            }
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type something"
            type={options?.inputType || "text"}
          />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>Cancle</AlertDialogCancel>
          <Button onClick={handleConfirm}>Confirm</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const coolprompt = (props: IPropmtComponentProps) => {
  // find alert component by id
  const alertContainer = document.getElementById("coolert-wrapper");
  if (!alertContainer) return;
  const root = createRoot(alertContainer);
  root.render(<PropmtComponent {...props} />);
};
