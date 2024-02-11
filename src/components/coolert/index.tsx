import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { delay } from "@/utils";
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { createRoot } from "react-dom/client";

export type TAlertType = "info" | "warning" | "error" | "success" | "default";

export interface IAlertOptions {
  description?: string;
  type?: TAlertType;
}

export interface IAlertComponentProps {
  title?: string;
  options?: IAlertOptions;
}

export const AlertComponent = ({
  title = "Alert",
  options,
}: IAlertComponentProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const { description = "No description provided.", type = "default" } =
    options || {};
  const handleClose = async () => {
    const alertComponent = document.getElementById("coolert-alert");

    setIsOpen(false);
    await delay(100);
    // delete alert component
    alertComponent?.remove();
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
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleClose}>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const coolert = ({ title = "Alert", options }: IAlertComponentProps) => {
  // find alert component by id
  const alertContainer = document.getElementById("coolert-wrapper");
  if (!alertContainer) return;
  const root = createRoot(alertContainer);
  root.render(<AlertComponent title={title} options={options} />);
};
