/* eslint-disable no-unused-vars */
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export type TAlertType = "info" | "warning" | "error" | "success" | "default";

export interface IBaseAlertProps {
  title?: string;
  description?: string;
  type?: TAlertType;
}

export interface IConfirmComponentProps extends IBaseAlertProps {
  onConfirm?: (value: any) => any | Promise<void>;
  onCancel?: (value: any) => void | Promise<void>;
}

export const ConfirmComponent = ({
  title = "Confirm",
  description = "No description provided.",
  type = "default",
  onConfirm,
  onCancel,
}: IConfirmComponentProps) => {
  const [value, setValue] = useState("");
  const handleClose = () => {
    const alertComponent = document.getElementById("coolert-confirm");
    if (alertComponent === null) {
      return;
    }
    // delete alert component
    alertComponent.remove();
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
    <div
      id="coolert-confirm"
      className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    >
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
        <div className="flex justify-between items-center gap-16">
          <div className="text-xl font-bold flex gap-2 items-center">
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
            <h1 className="text-xl font-bold" id="coolert-alert-title">
              {title}
            </h1>
          </div>
        </div>
        {description && (
          <div>
            <p className="text-sm text-gray-500" id="coolert-alert-description">
              {description}
            </p>
          </div>
        )}
        <div>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className="flex w-full justify-end gap-2">
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export const coolfirm = ({
  title = "Alert",
  description = "",
  type = "default",
  onConfirm,
  onCancel,
}: IConfirmComponentProps) => {
  // find alert component by id
  const alertContainer = document.getElementById("coolert-wrapper");
  if (!alertContainer) return;
  const root = createRoot(alertContainer);
  root.render(
    <ConfirmComponent
      title={title}
      description={description}
      type={type}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};
